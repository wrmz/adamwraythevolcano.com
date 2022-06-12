<template>
    <button
        type="button"
        class="howler"
        :class="{ 'howler--playing': isPlaying }"
        @click="togglePlaying"
    >
        <div class="howler__icon">
            <span class="howler__bar howler__bar1"></span>
            <span class="howler__bar howler__bar2"></span>
            <span class="howler__bar howler__bar3"></span>
        </div>
        <div class="howler__content">{{ content }} Sample</div>
    </button>
</template>
<script>
import { Howl, Howler } from 'howler';
export default {
    name: 'TheHowler',
    props: {
        src: { type: String }
    },
    data: () => ({
        isPlaying: false,
        howler: undefined,
    }),
    computed: {
        content() {
            return this.isPlaying ? 'Stop' : 'Play';
        }
    },
    watch: {
        isPlaying(isPlaying) {
            if (this.isPlaying) {
                this.play();
            } else {
                this.stop();
            }
        }
    },
    created() {
        this.howler = new Howl({
            src: [this.src],
            html5: true,
            loop: true,
        });
    },
    methods: {
        play() {
            this.howler.play();
        },
        stop() {
            this.howler.stop();
        },
        togglePlaying() {
            this.isPlaying = !this.isPlaying;
        }
    }
}
</script>
<style>
    .howler {
        cursor: pointer;
        display: grid;
        grid-template-columns: max-content max-content;
        align-items: center;
        gap: 10px;
        margin: 0;
        padding: 0;
        font-size: 18px;
        text-transform: uppercase;
        color: white;
        border: 0;
        background: transparent;
        transition: color .2s ease-out;
    }
    .howler__icon {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: flex-end;
        gap: 2px;
        width: 40px;
        height: 40px;
        padding: 8px;
        border-radius: 2px;
        background: var(--palette-dark-gray);
    }
    .howler__bar {
        height: 100%;
        background: white;
        transition: background .2s ease-out;
    }
    .howler__bar1 {
        height: 60%;
    }
    .howler__bar2 {
        height: 30%;
    }
    .howler__bar3 {
        height: 75%;
    }
    .howler--playing .howler__bar {
        animation: waver 1.3s ease infinite alternate;
    }
    .howler--playing .howler__bar2 {
         animation-delay: -2.2s;
    }
    .howler--playing .howler__bar3 {
        animation-delay: -3.7s;
    }
    .howler:hover {
        color: var(--palette-red);
    }
    .howler:hover .howler__bar {
        background: var(--palette-red);
    }
    @keyframes waver {
        10% {
            height: 30%;
        }
        30% {
            height: 100%;
        }
        60% {
            height: 50%;
        }
        80% {
            height: 75%;
        }
        100% {
            height: 60%;
        }
    }
</style>
