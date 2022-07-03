<script setup>
    import IconYouTube from '@/components/icons/IconYouTube.vue';
    import TheHowler from '@/components/TheHowler.vue';
</script>
<template>
    <section id="album" class="section" role="region" tabindex="0">
        <article class="section__article">
            <header class="section__header">
                <h2 class="section__title">Lava Lava</h2>
                <p class="section__subtitle">Alternative/Blues/Rock</p>
            </header>
            <div class="section__body">
                <p>The sister project to The Volcano is coming soon to an ear near you. Lava Lava is a concept album, the concept of experiences and life&rsquo;s emotions building up like a volcano. When it erupts, creativity spews in all directions. In this case it comes in the form of&nbsp;radio&nbsp;waves.</p>
                <a href="https://www.youtube.com/channel/UCuVmARb5T-sDJpBi8q9GIfg" target="_blank" class="link">
                    <IconYouTube /> The Adam Wray Sound
                </a>
            </div>
            <footer class="section__footer">
                 <TheHowler src="/sample.wav" />
            </footer>
             <aside class="section__aside">
                <picture class="picture">
                    <source srcset="@/assets/images/album_cover.webp" format="image/webp">
                    <img alt="" src="@/assets/images/album_cover.jpg">
                </picture>
            </aside>
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
