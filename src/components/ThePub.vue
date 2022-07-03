<script setup>
    import IconFacebook from './icons/IconFacebook.vue';
</script>
<template>
    <section id="pub" class="section" role="region" tabindex="0">
         <article class="section__article">
            <header class="section__header">
                <h2 class="section__title">Man of the Earth Publishing LLC</h2>
                <p class="section__subtitle">Established 2022</p>
            </header>
            <div class="section__body">
                <a href="https://www.facebook.com/adam.wray.75" target="_blank" title="Visit Man of the Earth Publishing's facebook page" class="link">
                    <IconFacebook /> Man of the Earth Publishing Facebook Page
                </a>
            </div>
             <aside class="section__aside">
                <figure class="figure">
                    <picture class="picture">
                        <source srcset="@/assets/images/motep_logo.webp" format="image/webp">
                        <img alt="Man of the Earth Publishing" src="@/assets/images/motep_logo.jpg">
                    </picture>
                </figure>
            </aside>
        </article>
    </section>
</template>
