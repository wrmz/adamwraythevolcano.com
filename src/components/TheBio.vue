<script setup>
    import TheSocials from '@/components/TheSocials.vue';
</script>
<template>
    <section id="bio" class="section" role="region" tabindex="0">
        <article class="section__article">
            <header class="section__header">
                <h2 class="section__title">Adam Wray</h2>
                <p class="section__subtitle">Bio not BO</p>
            </header>
            <div class="section__body">
                <p>My name is Adam Douglas Wray. I&rsquo;m a creative soul from &ldquo;Hub City&rdquo; in Maryland, USA. I came from a loosely religious Christian household with limited income and minimal resources. At a young age, I was diagnosed with social anxiety and depression. I am pretty much a mean-faced loner who never perfected a social life, but I&rsquo;m actually quite kind, kind of.</p>
                <p>As a kid, some of my favorite things included drawing, Legos, Lincoln Logs, and Play Dough. I always wanted to create new things. I struggled with emotional stability, but I came to a great spiritual realization when I was a teenager that continued to manifest and grow for many years.</p>
                <p>As an adult, I found my purpose: creating. I knew it all along. I received a Bachelor of Science in Industrial Design from the Art Institute of Pittsburgh, and continue to study. I do sign design, illustrations, graphics, and 3D art. Many of my projects are filmed for YouTube. I even dabble in musicianship as a guitarist and songwriter. But now, I&rsquo;ve scrambled a bunch of words together in an object that us people like to call a book!</p>
            </div>
            <footer class="section__footer">
                <TheSocials />
            </footer>
            <aside class="section__aside">
                <picture class="picture">
                    <source srcset="@/assets/images/portrait.webp" format="image/webp">
                    <img alt="" src="@/assets/images/portrait.jpg">
                </picture>
            </aside>
        </article>
    </section>
</template>
