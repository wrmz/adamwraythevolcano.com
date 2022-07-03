<template>
    <div class="callout">
        <slot />
        <slot name="link" />
    </div>
</template>
<style>
    .callout {
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        padding: 30px;
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 0.02em;
        color: var(--palette-red);
        background: var(--palette-black);
        box-shadow: 0 0 20px var(--palette-black);
    }
</style>
