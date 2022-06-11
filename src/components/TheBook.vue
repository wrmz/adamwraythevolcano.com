<template>
    <section id="book" class="section" role="region" tabindex="0">

        <article class="section__column">
            <header class="section__header">
                <h2 class="section__title">The Volcano</h2>
                <p class="section__subtitle">My Life &mdash; Proof of God&rsquo;s Existence?</p>
            </header>
            <div class="section__body">
                <p class="section__leadin">Burn This Book</p>
                <p>Human eyes are unprepared for the words describing the events which took place in this man&rsquo;s life.</p>
                <p>Give heed to how Ray Adams (Adam Wray) conquered childhood depression after surviving an early suicide attempt. An unimaginable discovery firmly convinces him of God&rsquo;s presence. As we traverse the years together with Ray, we see his conviction challenged, and then strengthened. Vivid recollections are melded with inspiring moments of faith, heart-wrenching emotion, unapologetically unique blends of humor, and brutal honesty. Stories, theories, romance, and poems surface as he delineates the process leading him to eminence and sheer joy.</p>
                <p>This autobiography takes a twist, as the author invites us on a journey that forms his life&rsquo;s volcano, through his own eyes, in real time. Is the introduction of a special and rare love the final puzzle piece in this man&rsquo;s pathway to God or will a &ldquo;volcanic eruption&rdquo; render him derailed?</p>
            </div>
            <footer class="section__footer">
                <TheSocials />
            </footer>
        </article>
        <aside class="section__column">
            <picture class="picture">
                <source srcset="@/assets/images/book_cover.webp" format="image/webp">
                <img alt="" src="@/assets/images/book_cover.jpg">
            </picture>
        </aside>
    </section>
</template>
<style>
    .section__leadin {
        font-size: 30px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: var(--palette-red);
    }
</style>
