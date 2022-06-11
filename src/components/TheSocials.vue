<script setup>
    import IconPortfolio from './icons/IconPortfolio.vue';
    import IconYouTube from './icons/IconYouTube.vue';
    import IconFacebook from './icons/IconFacebook.vue';
    import IconInstagram from './icons/IconInstagram.vue';
</script>
<template>
    <div class="socials">
        <a href="https://adamdouglaswray.wixsite.com/artist" target="_blank" title="Check out my porfolio"><IconPortfolio /></a>
        <a href="https://www.youtube.com/c/AdamWray" target="_blank" title="Check out my videos"><IconYouTube /></a>
        <a href="https://www.facebook.com/adam.wray.75" target="_blank" title="Visit me on Facebook"><IconFacebook /></a>
        <a href="https://www.instagram.com/adam.douglas.wray/" target="_blank" title="Follow me on Instagram"><IconInstagram /></a>
    </div>
</template>
<style lang="scss">
.socials {
    display: grid;
    grid-auto-flow: column dense;
    grid-auto-columns: max-content;
    align-items: center;
    gap: 20px;
}
.socials a {
    display: flex;
    align-items: center;
    justify-content: center;
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
