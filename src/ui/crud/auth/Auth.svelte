<script>
    import SimpleTable from "../../widget/table/SimpleTable.svelte";

    let options = {
        selectable: true,
        ajax: {
            url: "http://47.105.46.129:3000/mock/11/api/auth/roles", parse: json => json.data.rows
        },
        key: "key",
        columns: [
            {
                label: "名称",
                render: function (data, row) {
                    return `<a><span>${row.name}</span></a><span>${row.description}</span>`
                }
            },
            {
                label: "key",
                data: "key"
            },
            {
                label: "权限",
                render: function (data, row) {
                    return Math.ceil(Math.random() * 10)
                }
            }
        ]
    }
</script>


<div class="container">
    <div class="title">
        角色列表
    </div>
    <div>
        <SimpleTable options={options} />
    </div>
</div>

<style>

</style>
