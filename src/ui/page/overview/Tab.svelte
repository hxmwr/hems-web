<script>
    export let items = []
    export let activeTabIndex = 0
</script>

<div class="container">
    {#each items as item, i}
        <div class="tab" class:active={activeTabIndex === i} on:click={() => {activeTabIndex = i}}>{item.title}</div>
    {/each}
</div>

<style>
.container {
    display: flex;
}

.tab {
    margin: 0 8px;
    line-height: 24px;
    box-sizing: border-box;
    cursor: pointer;
}

.tab.active {
    border-bottom: 2px solid grey;
    border-bottom-color: var(--ring-icon-success-color);
}
</style>