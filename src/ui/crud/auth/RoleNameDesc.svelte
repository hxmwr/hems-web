<script>
    import {Link} from "../../../lib/routing";
    export let data
    export let row
</script>

<div>
    <Link to="/auth/role">
        <span>{row.name}</span>
    </Link>
    <span class="desc">{row.description}</span>
</div>

<style>
    .desc {
        margin-left: 8px;
        color: var(--ring-secondary-color);
        font-size: 12px;
    }
</style>