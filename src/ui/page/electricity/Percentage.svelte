<script>
    export let value = "--"

</script>
<div class:positive={value > 0} class:negative={value < 0}>
    <span class="iconfont icon-triangle" class:hide={value==='--' || !value}></span>
    <span>{value}%</span>
</div>
<style>
    .iconfont {
        font-size: 9px;
        vertical-align: middle;
    }
    .positive > .iconfont {
        transform: rotateZ(0deg);
    }
    .negative > .iconfont {
        display: inline-block;
        transform: rotateZ(180deg);
        margin-top: -2px;
    }
    .iconfont.hide {
        visibility: hidden;
    }
    .negative {
        color: red;
    }
    .positive {
        color: green;
    }
</style>
