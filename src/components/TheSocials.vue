<script setup>
    import IconPortfolio from './icons/IconPortfolio.vue';
    import IconYouTube from './icons/IconYouTube.vue';
    import IconFacebook from './icons/IconFacebook.vue';
    import IconInstagram from './icons/IconInstagram.vue';
</script>
<template>
    <div class="socials">
        <div class="socials__title">More about me:</div>
        <a href="https://adamdouglaswray.wixsite.com/artist" target="_blank" title="Check out my porfolio"><IconPortfolio /> Portfolio</a>
        <a href="https://www.youtube.com/c/AdamWray" target="_blank" title="Check out my videos"><IconYouTube /> Youtube</a>
        <a href="https://www.facebook.com/adam.wray.75" target="_blank" title="Visit me on Facebook"><IconFacebook /> Facebook</a>
        <a href="https://www.instagram.com/adam.douglas.wray/" target="_blank" title="Follow me on Instagram"><IconInstagram /> Instagram</a>
    </div>
</template>
<style lang="scss">
.socials {
    display: grid;
    grid-auto-flow: column dense;
    grid-auto-columns: max-content;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    border-radius: 2px;
    background: var(--palette-dark-gray);
    box-shadow: 0 0 20px var(--palette-black);
}
.socials__title {
    display: none;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    @media (min-width: 1024px) {
        display: block;
    }
}
.socials a {
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 5px;
    font-family: var(--font-heading);
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color .2s ease-out;
    svg {
        width: 30px;
        height: auto;
    }
    &:hover, &:focus {
        color: var(--palette-red);
    }
}
</style>
