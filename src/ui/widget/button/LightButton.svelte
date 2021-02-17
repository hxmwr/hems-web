<script>
    export let active = false
    export let clickHandler = () => {}
    export let clazz = "light"
</script>

<button class={clazz} class:active={active} on:click={clickHandler}>
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
        background-color: var(--ring-content-background-color);
        box-shadow: inset 0 0 0 1px var(--ring-borders-color);
    }

    button:hover {
        z-index: 2;
    }
    button:active {
        z-index: 2;
    }


    .light {
        color: var(--ring-text-color);
    }
    .light:hover {
        box-shadow: inset 0 0 0 1px var(--ring-border-hover-color);
    }
    .light:active, .light.active {
        background-color: var(--ring-selected-background-color);
        box-shadow: inset 0 0 0 1px var(--ring-border-hover-color);
    }

    .danger {
        color: var(--ring-error-color);
    }
    .danger:hover {
        box-shadow: inset 0 0 0 1px var(--ring-button-danger-hover-color);
    }
    .danger:active, .danger.active {
        background-color: var(--ring-button-danger-active-color);
        box-shadow: inset 0 0 0 1px var(--ring-button-danger-hover-color);
    }
</style>