<script setup>
    import IconFacebook from '@/components/icons/IconFacebook.vue';
    import IconEbook from '@/components/icons/IconEbook.vue';
    import IconHardcover from '@/components/icons/IconHardcover.vue';
    import IconPaperback from '@/components/icons/IconPaperback.vue';
    import IconFire from '@/components/icons/IconFire.vue';
    import TheCallout from '@/components/TheCallout.vue';
</script>
<template>
    <section id="book" class="section" role="region" tabindex="0">
        <article class="section__article">
            <header class="section__header">
                <h2 class="section__title">The Volcano</h2>
                <p class="section__subtitle">My Life &mdash; Proof of God&rsquo;s Existence?</p>
            </header>
            <div class="section__body">
                <p class="section__leadin">Burn This Book</p>
                <p>Human eyes are unprepared for the words describing the events which took place in this man&rsquo;s life.</p>
                <p>Give heed to how Ray Adams (Adam Wray) conquered childhood depression after surviving an early suicide attempt. An unimaginable discovery firmly convinces him of God&rsquo;s presence. As we traverse the years together with Ray, we see his conviction challenged, and then strengthened. Vivid recollections are melded with inspiring moments of faith, heart-wrenching emotion, unapologetically unique blends of humor, and brutal honesty. Stories, theories, romance, and poems surface as he delineates the process leading him to eminence and sheer joy.</p>
                <p>This autobiography takes a twist, as the author invites us on a journey that forms his life&rsquo;s volcano, through his own eyes, in real time. Is the introduction of a special and rare love the final puzzle piece in this man&rsquo;s pathway to God or will a &ldquo;volcanic eruption&rdquo; render him derailed?</p>
                <p><i>The Volcano</i> serves as a reminder to us all that regardless of our differences, we are intrisically similar in how we&rsquo;re affected by our upbringing, our relationships, and our experiences. We stop short in attempting to diagnose Ray&rsquo;s afflictions, realizing we&rsquo;re attempting, actually, to diagnose our own. In the fullness of time, there are volcanoes in&nbsp;us&nbsp;all.</p>
            </div>
            <footer class="section__footer">
                <TheCallout class="book__callout">
                    <div class="book__callout-content">
                        Preorder the Book Today
                    </div>
                    <div class="book_callout-shopping">
                        <!-- <button type="button" class="btn">
                            <IconFire />
                            Burn This Book
                        </button> -->
                        <a href="https://shop.aer.io/adamwraythevolcano/p/The_Volcano/9798986377728-13657" target="_blank" class="btn" title="Preorder The Volcano in E-book format">
                            <IconEbook />
                            E-Book
                        </a>
                        <div class="btn btn--disabled">
                            <IconPaperback />
                            Paperback
                            <div class="btn__note">Coming Soon!</div>
                        </div>
                        <div class="btn btn--disabled">
                            <IconHardcover />
                            Hardcover
                            <div class="btn__note">Coming Soon!</div>
                        </div>
                    </div>
                     <template #link>
                        <a href="https://www.facebook.com/Adam-Wray-The-Volcano-105492948856462" target="_blank" class="link">
                            <IconFacebook /> Adam Wray The Volcano
                        </a>
                    </template>
                </TheCallout>
            </footer>
            <aside class="section__aside">
                <figure class="figure">
                    <!-- <TheFlamePhoto src="/book_cover_v2.jpg"></TheFlamePhoto> -->
                    <picture class="picture">
                        <source srcset="@/assets/images/book_cover_v2.webp" format="image/webp">
                        <img alt="Book Cover, featuring a male and female dancing around a volcanic pool" src="@/assets/images/book_cover_v2.jpg">
                    </picture>
                    <figcaption class="figcaption">
                        Coming <a href="https://calendar.google.com/calendar/r/eventedit?text=The+Volcano+Available+for+Preorder&dates=20220922T160000Z/20220922T180000Z&details=For+details,+visit:+https://adamwraythevolcano.com" target="_blank" class="link" style="display:inline-grid">9/22/22</a>
                    </figcaption>
                </figure>
            </aside>
        </article>
    </section>
</template>
<style>
    .section__leadin {
        font-family: var(--font-heading);
        font-size: 30px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--palette-red);
    }
    .book__callout {
        display: grid;
        gap: 30px;
    }
    .book_callout-shopping {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        gap: 20px;
    }
    @media screen and (min-width: 768px) {
        #book .section__footer {
            grid-column: 1 / span 2;
        }
        .book_callout-shopping {
            grid-template-columns: repeat(4, max-content);
        }
    }
</style>
