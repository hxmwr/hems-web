<script>
    export let tabs
    export let activeTabIndex

    function handleClick(i) {
        activeTabIndex = i
    }
</script>

{#if tabs}
    <div class="tabs">
        {#each tabs as tab, i}
            <div class="tab" class:inactive={i !== activeTabIndex} class:active={i === activeTabIndex} on:click={() => {handleClick(i)}}>
                <span>
                    {tab.title}
                </span>
            </div>
        {/each}
    </div>
{/if}

<style>
    .tabs {
        display: flex;
        font-size: 13px;
        box-shadow: inset 0 -1px 0 0 var(--ring-line-color);
    }
    .tab {
        margin-left: 24px;
        line-height: 32px;
        cursor: pointer;
    }
    .tab > span {
        line-height: 24px;
    }
    .tab:first-child {
        margin-left: 0;
    }

    .tab.inactive:hover {
        color: #ff008c;
        color: var(--ring-link-hover-color);
        outline-style: none;
        -webkit-box-shadow: inset 0 -1px 0 0 #ff008c;
        box-shadow: inset 0 -1px 0 0 #ff008c;
        -webkit-box-shadow: inset 0 -1px 0 0 var(--ring-link-hover-color);
        box-shadow: inset 0 -1px 0 0 var(--ring-link-hover-color);
    }

    .tab.active {
        cursor: default;
        box-shadow: inset 0 -3px 0 0 var(--ring-text-color);
    }
    .tab.active > span {
        font-weight: bold;
    }
</style>