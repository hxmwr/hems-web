<script>
    export let active = false
    export let clickHandler = () => {}
</script>

<button class="light" class:active={active} on:click={clickHandler}>
    <slot>
    </slot>
</button>

<style>
    button {
        height: 24px;
        padding: 0 16px;
        box-sizing: border-box;
        display: inline-block;
        transition: color var(--ring-ease), background-color var(--ring-ease), box-shadow var(--ring-ease), -webkit-box-shadow var(--ring-ease);
        border: 0;
        outline: 0;
        font-size: var(--ring-font-size-smaller);
        line-height: 24px;
        cursor: pointer;
        border-radius: var(--ring-border-radius);
        margin: 0;
    }

    .light {
        color: var(--ring-text-color);
        background-color: var(--ring-content-background-color);
        box-shadow: inset 0 0 0 1px var(--ring-borders-color);
    }
    .light:hover {
        z-index: 2;
        box-shadow: inset 0 0 0 1px var(--ring-border-hover-color);
    }
    .light:active, .light.active {
        z-index: 2;
        background-color: var(--ring-selected-background-color);
        box-shadow: inset 0 0 0 1px var(--ring-border-hover-color);
    }
</style>