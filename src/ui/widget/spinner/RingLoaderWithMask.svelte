<script>
    import RingLoader from "./RingLoader.svelte";

    export let opacity = 1
    export let showMessage = false
</script>

<div class="mask" style={"opacity: " + opacity}>
    <div class="wrapper">
        <RingLoader />
    </div>
    {#if showMessage}
        <span class="message">正在加载...</span>
    {/if}
</div>

<style>
    .mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .wrapper {
        border-radius: 8px;
        position: absolute;
        padding: 8px 16px 16px;
    }

    :global(.with-loader) {
        position: relative;
    }

    .message {
        position: absolute;
        color: grey;
        font-size: 12px;
        left: 26px;
        top: 7px;
    }
</style>