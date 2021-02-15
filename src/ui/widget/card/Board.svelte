<script>
    import Card from "./Card.svelte";

    export let title
    export let actions
</script>

<Card>
    <div class="container">
        <div class="title-bar">
            <span>{title}</span>
            <div class="actions">
                <slot name="actions">
                </slot>
            </div>
        </div>
        <div class="content">
            <slot name="content">
            </slot>
        </div>
    </div>
</Card>

<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .title-bar {
        height: 32px;
        position: relative;
        box-sizing: border-box;
        padding: 0 16px;
        font-weight: 600;
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        display: flex;
        justify-content: space-between;
    }

    .title-bar > .actions {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .title-bar:after {
        content: "";
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: -1px;
        height: 1px;
        background-color: rgba(0, 42, 76, 0.1);
    }

    .title-bar > span {
        line-height: 30px;
        font-size: 13px;
        color: var(--ring-text-color);
    }

    .content {
        position: relative;
        flex-grow: 1;
    }

    .content::before {
        position: absolute;
        z-index: 1;
        z-index: var(--ring-fixed-z-index);
        left: 0;

        display: block;

        width: 100%;
        height: 24px;

        content: '';

        pointer-events: none;

        opacity: 0.8;
        background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(#fff));
        background: linear-gradient(to top, rgba(255, 255, 255, 0), #fff);
        background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(var(--ring-content-background-color)));
        background: linear-gradient(to top, rgba(255, 255, 255, 0), var(--ring-content-background-color)); /* stylelint-disable-line function-linear-gradient-no-nonstandard-direction */
    }

    .content:first-child::before {
        border-top-left-radius: 3px;
        border-top-left-radius: var(--ring-border-radius);
        border-top-right-radius: 3px;
        border-top-right-radius: var(--ring-border-radius);
    }

    .content::after {
        position: absolute;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 24px;

        content: '';
        pointer-events: none;

        opacity: 0.8;
        border-bottom-right-radius: 3px;
        border-bottom-right-radius: var(--ring-border-radius);
        border-bottom-left-radius: 3px;
        border-bottom-left-radius: var(--ring-border-radius);
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(#fff));
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(var(--ring-content-background-color)));
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--ring-content-background-color));
    }
</style>