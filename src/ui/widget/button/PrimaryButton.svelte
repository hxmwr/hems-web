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
        background-repeat: repeat-x;
        background-position: -1px -1px;
        background-size: 110% 110%;
        color: #fff;
        background-color: #129f83;
        background-image: linear-gradient(-180deg, #1bbc9c 0%, #15a98b 90%);
    }

    button:hover {
        background-color: #14ab8f;
        background-image: linear-gradient(-180deg, #16b193 0%, #14ab8f 90%);
        background-position: 0 -0.5em;
        border-color: rgba(27,31,35,0.5);
    }

    button:active {
        background-color: #17947c;
        background-image: none;
        border-color: rgba(27,31,35,0.5);
        box-shadow: inset 0 0.15em 0.3em rgba(27,31,35,0.15);
    }
</style>