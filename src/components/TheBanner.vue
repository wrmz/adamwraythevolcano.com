<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
</script>
<template>
    <div class="banner">
        <div class="banner__content">Preorders Are Now Available!</div>
        <div class="banner__actions">
            <RouterLink to="#book" class="banner__link">Learn More</RouterLink>
            <a href="https://shop.aer.io/adamwraythevolcano" target="_blank" class="banner__link">Preorder Now</a>
        </div>
        <div class="banner__countdown">
            <vue-countdown
                :time="release"
                tag="div"
                v-slot="{ days, hours, minutes, seconds }"
            >Book Release:&nbsp;<span>{{ days }} Days {{ hours }}:{{ minutes }}:{{ seconds }}</span></vue-countdown>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheBanner',
    components: {
        VueCountdown
    },
    data: () => ({
        release:  new Date(2022, 8, 22).getTime() - Date.now(),
    }),
};
</script>
<style lang="scss">
.banner {
    position: relative;
    display: grid;
    font-family: var(--font-heading);
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    background: var(--palette-dark-gray);
    z-index: 1;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr max-content;
    }
    @media screen and (min-width: 930px) {
        text-align: left;
        grid-template-columns: 1fr max-content max-content;
    }
}
.banner__content {
    padding: 10px 20px 0;
    font-weight: 600;
}
.banner__actions {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    @media screen and (min-width: 768px) {
        grid-row: 2;
        grid-column: 1;
    }
    @media screen and (min-width: 930px) {
        grid-row: unset;
        grid-column: unset;
    }
}
.banner__countdown {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 30px;
    min-width: 250px;
    padding: 0 20px;
    color: var(--palette-red);
    background: var(--palette-black);
    span {
        color: white;
    }
    @media screen and (min-width: 768px) {
        grid-row: 1 / span 2;
        grid-column: 2;
    }
    @media screen and (min-width: 930px) {
        grid-row: unset;
        grid-column: unset;
        font-size: unset;
    }
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
