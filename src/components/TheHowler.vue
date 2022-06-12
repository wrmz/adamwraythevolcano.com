<template>
    <button @click="play">Play</button>
    <button @click="stop">Stop</button>
</template>
<script>
import { Howl, Howler } from 'howler';
export default {
    name: 'TheHowler',
    props: {
        src: { type: String }
    },
    data: () => ({
        howler: undefined,
    }),
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
        }
    }
}
</script>
