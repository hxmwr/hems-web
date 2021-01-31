<script>
    export let title
</script>

<button>
    {title}
</button>

<style>
    button {
        border: 1px solid rgba(27,31,35,0.2);
        border-radius: 0.25em;
        user-select: none;
        color: #24292e;
        background-color: #eff3f6;
        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
        background-repeat: repeat-x;
        background-position: -1px -1px;
        background-size: 110% 110%;
    }

    button:hover {
        background-color: #e6ebf1;
        background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
        background-position: 0 -0.5em;
        border-color: rgba(27,31,35,0.35);
    }

    button:active {
        background-color: #e9ecef;
        background-image: none;
        border-color: rgba(27,31,35,0.35);
        box-shadow: inset 0 0.15em 0.3em rgba(27,31,35,0.15);
    }
</style>