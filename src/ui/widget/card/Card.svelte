<script>

</script>

<div class="card">
    <div class="ring-island">
        <slot></slot>
    </div>
</div>


<style>
    .ring-island {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        border: 1px solid #dfe5eb;
        border: 1px solid var(--ring-line-color);
        border-radius: 3px;
        border-radius: var(--ring-border-radius);
        background-color: #fff;
        background-color: var(--ring-content-background-color);
        -webkit-box-shadow: 0 1px 4px rgba(0, 42, 76, 0.15);
        box-shadow: 0 1px 4px rgba(0, 42, 76, 0.15);
        -webkit-box-shadow: 0 1px 4px var(--ring-popup-shadow-color);
        box-shadow: 0 1px 4px var(--ring-popup-shadow-color);
    }
</style>