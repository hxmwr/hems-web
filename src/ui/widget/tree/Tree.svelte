<script>
    export let activeKey = null
    export let tree;
    export let depth = 0;
    export let onClick = null; // click handler

    const {label, children, key} = tree;
    let {expanded = true} = tree;
    function clickHandler() {
        activeKey = key
        expanded = !expanded;
        if(!children && !!onClick) {
            onClick(tree, depth, expanded);
        }
    }
</script>
<style>
    div, ul {
        font-size: 13px;
    }
    div {
        cursor: pointer;
    }
</style>

{#if !!label}
    <div class:active={activeKey === key} class={"label depth-" + depth} on:click={clickHandler} class:expanded class:collapsed={!expanded} class:has-children={!!children}>
        <span class="icon" class:active={activeKey === key}></span>
        <span style="z-index: 1">{label} ({depth})</span>
    </div>
{/if}
{#if !!children && expanded}
    <ul>
        {#each children as child}
            <li>
                <svelte:self tree={child} depth={++depth} {onClick} bind:activeKey={activeKey}/>
            </li>
        {/each}
    </ul>
{/if}