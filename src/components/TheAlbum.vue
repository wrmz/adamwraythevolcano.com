<script setup>
    import IconYouTube from './icons/IconYouTube.vue';
</script>
<template>
    <section id="album" class="section" role="region" tabindex="0">
        <aside class="section__column">
            <div class="video">
                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="720"
                    height="405"
                    src="https://www.youtube.com/embed/OoHw41eryn0?fs=0&modestbranding=1&playsinline=1"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </aside>
        <article class="section__column">
            <header class="section__header">
                <h2 class="section__title">Lava Lava</h2>
                <p class="section__subtitle">Alternative/Blues/Rock</p>
            </header>
            <div class="section__body">
                <a href="https://www.youtube.com/channel/UCuVmARb5T-sDJpBi8q9GIfg" target="_blank" class="link">
                    <IconYouTube /> The Adam Wray Sound
                </a>
            </div>
        </article>
    </section>
</template>

<style scoped>
    .video {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: calc(100% * (9/16));
    }
    .video iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
