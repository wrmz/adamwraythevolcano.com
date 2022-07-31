<script setup>
    import IconFire from './icons/IconFire.vue';
</script>
<template>
    <div class="flamephoto" ref="el">
        <img alt="" :src="src" class="flamephoto__img" ref="img" />
        <canvas class="flamephoto__canvas" ref="canvas"></canvas>
    </div>
    <div class="flamephoto__actions">
        <button
            type="button"
            class="flamephoto__button"
            @click="burnIt"
        >
                <div class="flamephoto__button-icon">
                    <IconFire></IconFire>
                </div>
                <div class="flamephoto__button-content">
                    {{ isOnFire ? 'OK. Stop It.' : 'Burn This Book' }}
                </div>
        </button>
    </div>
</template>
<script>
export default {
    name: 'TheFlamePhoto',
    props: {
        src: { type: String }
    },
    data: () => ({
        settings: {
            size: 6,
            fireWidth: 80,
            lifeTime: 2000,
            innerFlameStartColor: { r: 250, g: 140, b: 0 },
            innerFlameEndColor: { r: 50, g: 0, b: 0 },
            outerFlameStartColor: { r: 200, g: 60, b: 0 },
            outerFlameEndColor: { r: 80, g: 10, b: 0 }
        },
        isOnFire: false,
        flames: [],
        ctx: {},
        canvasW: 0,
        canvasH: 0,
        resizeObserver: undefined,
        animationFrame: undefined
    }),
    computed: {
        el() { return this.$refs.el; },
        img() { return this.$refs.img; },
        canvas() { return this.$refs.canvas; },
        dimW() { return Math.ceil(this.canvasW / this.settings.size); },
        dimH() { return Math.ceil(this.canvasH / this.settings.size); }
    },
    watch: {
        isOnFire(isOnFire) {
            if (isOnFire) {
                this.render();
            } else {
                this.clear();
            }
        }
    },
    mounted() {
        this.resizeObserver = new ResizeObserver(this.handleResize);
        this.ctx = this.canvas.getContext('2d');
        this.canvasW = this.el.getBoundingClientRect().width;
        this.canvasH = this.el.getBoundingClientRect().height;

        this.resizeObserver.observe(this.el);
    },
    beforeUnmount() {
        this.resizeObserver.disconnect();
        cancelAnimationFrame(this.animationFrame);
    },
    methods: {
        clear() {
            this.flames = [];
            this.ctx.drawImage(this.img, 0, 0, this.canvasW, this.canvasH);
        },
        burnIt() {
            this.isOnFire = !this.isOnFire;
            if (this.isOnFire) {
                this.generateFlames();
            }
        },
        generateFlames() {
            this.flames = [];
            for (let i = 0; i < 2000; i++) {
                this.flames.push(this.initFlame());
            }
        },
        initFlame(reset) {
            let y = Math.ceil(Math.random() * this.dimH);
            let x = Math.ceil(((this.dimW / 2) - this.settings.fireWidth / 2 + Math.random() * this.settings.fireWidth) * 2) / 2;
            let colorStart = this.settings.innerFlameStartColor;
            let colorStop = this.settings.innerFlameEndColor;

            if (reset) {
                y = this.dimH;
            }

            if (x <= (this.dimW / 2) - (this.settings.fireWidth / 6) ||
                x >= (this.dimW / 2) + (this.settings.fireWidth / 6)) {
                colorStart = this.settings.outerFlameStartColor;
                colorStart = this.settings.outerFlameEndColor;
            }

            return {
                x,
                y,
                colorStart,
                colorStop,
                sinX: Math.random() * 1,
                speedX: Math.ceil(Math.random() * 5),
                speedY: 1,
                top: Math.round(Math.random() * this.dimH / 2) * 2,
                startTime: Date.now(),
                lifeTime: Math.random() * this.settings.lifeTime,
            };
        },
        render() {
            const flamesCount = this.flames.length;
            this.ctx.drawImage(this.img, 0, 0, this.canvasW, this.canvasH);
            this.ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < flamesCount; i++) {
                let flame = this.flames[i];
                let endStep = flame.startTime + flame.lifeTime;
                let curStep = endStep - Date.now();
                flame.y -= flame.speedY;
                let y = Math.floor(flame.y);
                flame.x += Math.round(Math.sin(flame.sinX += flame.speedX));
                flame.x = Math.round(flame.x * 2) / 2;
                if (flame.y <= flame.top || curStep <= 0) {
                    this.flames[i] = this.initFlame(true);
                }
                let color = this.changeColor(flame.colorStart, flame.colorStop, flame.y);
                color.a = flame.lifeTime * curStep;
                this.ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
                this.drawTriangle(flame.x, y, color.a);
            }
            this.ctx.globalCompositeOperation = 'source-over';
            if (this.isOnFire) {
                this.animationFrame = requestAnimationFrame(this.render);
            } else {
                cancelAnimationFrame(this.animationFrame);
            }
        },
        changeColor(startColor, endColor, step) {
            const scale = step / this.dimH;
            const r = endColor.r + scale * (startColor.r - endColor.r);
            const g = endColor.g + scale * (startColor.g - endColor.g);
            const b = endColor.b + scale * (startColor.b - endColor.b);
            return {
                r: Math.floor(Math.min(255, Math.max(0, r))),
                g: Math.floor(Math.min(255, Math.max(0, g))),
                b: Math.floor(Math.min(255, Math.max(0, b)))
            };
        },
        drawTriangle(x, y, alpha) {
            const size = this.settings.size;
            const isEqual = parseInt(x) === x;
            const startPath = isEqual
                ? { x: x * size, y: y * size }
                : { x: x * size - size / 2, y: y * size };
            const line1 = isEqual
                ? { x: x * size + size / 2, y: y * size + size }
                : { x: x * size + size / 2, y: y * size };
            const line2 = isEqual
                ? { x: x * size - size / 2, y: y * size + size }
                : { x: x * size, y: y * size + size };
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.moveTo(startPath.x, startPath.y);
            this.ctx.lineTo(line1.x, line1.y);
            this.ctx.lineTo(line2.x, line2.y);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.restore();
        },
        handleResize(entries) {
            for (let entry of entries) {
                if (entry.contentBoxSize) {
                    const contentBoxSize = Array.isArray(entry.contentBoxSize)
                        ? entry.contentBoxSize[0]
                        : entry.contentBoxSize;
                    this.canvasW = contentBoxSize.inlineSize;
                    this.canvasH = contentBoxSize.blockSize;
                } else {
                    this.canvasW = entry.contentRect.width;
                    this.canvasH = entry.contentRect.height;
                }
                this.canvas.width = this.canvasW;
                this.canvas.height = this.canvasH;
                this.generateFlames();
            }
        }
    }
};
</script>
<style lang="scss">
.flamephoto {
    position: relative;
    display: block;
}
.flamephoto__img {
    display: block;
    width: 100%;
    height: auto;
}
.flamephoto__canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.flamephoto__button {
    cursor: pointer;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    border: 0;
    background: var(--palette-black);
    transition: color .2s ease-out;
    &:hover {
        color: var(--palette-red);
    }
}
</style>
