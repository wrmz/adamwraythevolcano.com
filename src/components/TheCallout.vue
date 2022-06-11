<template>
    <div class="callout">
        <slot />
    </div>
</template>
<style>
    .callout {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: var(--palette-red);
        background: var(--palette-black);
    }
</style>
