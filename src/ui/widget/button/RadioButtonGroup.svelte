<script>
    import LightButton from "./LightButton.svelte";

    export let buttons
    export let mode = "option"
    export let selected = 0

</script>

{#if buttons}
    <div class="btn-grp">
        {#each buttons as button, i}
            <LightButton active={selected === i}
                         clickHandler={() => {selected = i; console.log(i)}}>{button.text}</LightButton>
        {/each}
    </div>
{/if}

<style>
    .btn-grp > :global(button) {
        margin-left: -1px;
        border-radius: 0;
    }

    .btn-grp > :global(button:first-child) {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        margin-left: 0;
    }

    .btn-grp > :global(button:last-child) {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
    }
</style>