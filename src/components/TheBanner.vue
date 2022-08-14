<template>
    <div class="banner">
        <div class="banner__content">Preorders Are Now Available!</div>
        <div class="banner__actions">
            <RouterLink to="#book" class="banner__link">Learn More</RouterLink>
            <a href="https://shop.aer.io/adamwraythevolcano" target="_blank" class="banner__link">Preorder Now</a>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
.banner {
    position: relative;
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    padding: 10px 20px;
    font-family: var(--font-heading);
    font-size: 20px;
    text-transform: uppercase;
    background: var(--palette-dark-gray);
    z-index: 1;
    @media (min-width: 768px) {
        padding: 10px 30px;
    }
    @media (min-width: 1024px) {
        padding: 10px 50px;
    }
    @media (min-width: 1320px) {
        padding: 10px calc((100vw - 1280px) / 2);
    }
}
.banner__actions {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    gap: 10px;
}
.banner__link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    color: var(--palette-red);
    border-radius: 2px;
    background: white;
}
</style>
