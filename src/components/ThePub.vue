<script setup>
    import IconFacebook from './icons/IconFacebook.vue';
</script>
<template>
    <section id="pub" class="section" role="region" tabindex="0">
         <article class="section__column">
            <header class="section__header">
                <h2 class="section__title">Man of the Earth Publishing, LLC</h2>
                <p class="section__subtitle">Established 2022</p>
            </header>
            <div class="section__body">
                <a href="" target="_blank" title="Visit Man of the Earth Publishing's facebook page" class="link">
                    <IconFacebook /> Man of the Earth Publishing Facebook Page
                </a>
            </div>
        </article>
        <aside class="section__column">
            <picture class="picture">
                <source srcset="@/assets/images/motep_logo.webp" format="image/webp">
                <img alt="" src="@/assets/images/motep_logo.jpg">
            </picture>
        </aside>
    </section>
</template>
