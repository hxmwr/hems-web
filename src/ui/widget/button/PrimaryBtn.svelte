<script>

</script>


<button>
    <slot>
    </slot>
</button>

<style>
    button {
        border-radius: var(--ring-border-radius);
        color: var(--ring-dark-text-color);
        background-color: var(--ring-main-color);
        font-family: var(--ring-font-family);
        font-size: var(--ring-font-size-smaller);
        line-height: 24px;
        transition: color var(--ring-ease), background-color var(--ring-ease), box-shadow var(--ring-ease), -webkit-box-shadow var(--ring-ease);
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 24px;
        margin: 0;
        padding: 0 16px;
        cursor: pointer;
        box-shadow: none;
        border: 0;
        outline: 0;
    }

    button:hover {
        transition: none;
        background-color: var(--ring-main-hover-color);
    }

    button:active {
        background-color: #1a98ff;
        background-color: var(--ring-button-primary-background-color);
        -webkit-box-shadow: inset 0 0 0 1px #0062b2;
        box-shadow: inset 0 0 0 1px #0062b2;
        -webkit-box-shadow: inset 0 0 0 1px var(--ring-button-primary-border-color);
        box-shadow: inset 0 0 0 1px var(--ring-button-primary-border-color);
    }
</style>