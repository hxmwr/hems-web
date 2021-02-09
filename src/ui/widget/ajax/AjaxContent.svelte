<script>
    import RingLoaderWithMask from "../spinner/RingLoaderWithMask.svelte";

    export let url
    export let delay

    async function load(url) {
        const res = await fetch(url)
        const json = await res.json()
        if (res.ok) {
            return json
        } else {
            throw new Error("Internal Error")
        }
    }

    let promise = new Promise(() => {})
    $:if (delay) {
        setTimeout(() => {
            promise = load(url)
        }, delay)
    } else {
        promise = load(url)
    }

</script>
{#await promise}
    <RingLoaderWithMask/>
{:then json}
    <slot json={json}>
    </slot>
{/await}
