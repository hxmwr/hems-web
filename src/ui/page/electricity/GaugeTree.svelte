<script>
    import Tree from "../../widget/tree/Tree.svelte";

    export let tree
    export let activeKey = null
</script>
<style>
    .container {
        position: relative;
    }
    :global(ul) {
        list-style: none;
        padding-inline-start: 20px;
    }
    .container > :global(ul) {
        padding-inline-start: 0;
    }
    .container :global(.label) {
        display: flex;
        height: 24px;
        margin-bottom: 6px;
        line-height: 24px;
        color: var(--ring-text-color);
    }
    .container :global(.icon) {
        display: block;
        height: 24px;
        width: 24px;
        transform: rotateZ(-90deg);
    }

    .container :global(.has-children .icon) {
        background: url("/img/triangle.svg") center;
        background-size: contain;
    }
    .container :global(.expanded .icon) {
        transform: rotateZ(0deg);
    }
    .container :global(.label.active) {
    }
    .container :global(.label.active):before{
        content: '\00a0';
        position: absolute;
        width: 100%;
        height: 24px;
        left: 0;
        background: #d4edff;
    }
</style>
<div class="container">
    <Tree {tree} bind:activeKey={activeKey}/>
</div>
