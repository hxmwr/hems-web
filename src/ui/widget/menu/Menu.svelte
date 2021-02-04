<script>
    let menu = [
        {
            section: "",
            menuItems: [
                {
                    title: '',
                    url: '',
                    icon: '',
                    subMenuItems: [
                        {
                            title: '',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            section: "",
            menuItems: [
                {
                    title: '',
                    url: '',
                    icon: '',
                    subMenuItems: [
                        {
                            title: '',
                            url: ''
                        }
                    ]
                }
            ]
        }
    ]

    let isExpanded = true
</script>

<div class="container">
    <ul>
        <li>
        <div class="mi">
                <span class="iconfont icon-biaoqianguanli mi-i">
                    <span class="mi-t">标签管理</span>
                </span>
            <span class="iconfont icon-xiala mi-ei"></span></div>
    </li>
        <li>
            <div class="mi" on:click={e => isExpanded = !isExpanded}>
                <span class="iconfont icon-bociguanli mi-i">
                    <span class="mi-t">波次管理</span>
                </span>
                <span class="iconfont icon-xiala mi-ei" class:expanded={isExpanded}></span>
            </div>
            <div class="sm" class:expanded={isExpanded}>
                <div class="smi">
                    <span>波次管理1</span>
                </div>
                <div class="smi active">
                    <span>波次管理2</span>
                </div>
                <div class="smi">
                    <span>波次管理3</span>
                </div>
                <div class="smi">
                    <span>波次管理4</span>
                </div>
                <div class="smi">
                    <span>波次管理5</span>
                </div>
            </div>

        </li>
        <li>
            <div class="mi">
                <span class="iconfont icon-chukuguanli mi-i">
                <span class="mi-t">出库管理</span>
            </span>
                <span class="iconfont icon-xiala mi-ei"></span>
            </div>
        </li>
        <li>
            <div class="mi">
                <span class="iconfont icon-kucunguanli mi-i">
                <span class="mi-t">库存管理</span>
            </span>
                <span class="iconfont icon-xiala mi-ei"></span>
            </div>
        </li>
        <li>
            <div class="mi">
                <span class="iconfont icon-renwuguanli mi-i">
                <span class="mi-t">任务管理</span>
            </span>
                <span class="iconfont icon-xiala mi-ei"></span>
            </div>
        </li>
        <li>
            <div class="mi">
                <span class="iconfont icon-jichuguanli mi-i">
                <span class="mi-t">基础管理</span>
            </span>
                <span class="iconfont icon-xiala mi-ei"></span>
            </div>
        </li>
        <li>
            <div class="mi">
                <span class="iconfont icon-xitongguanli mi-i">
                <span class="mi-t">系统管理</span>
            </span>
                <span class="iconfont icon-xiala mi-ei"></span>
            </div>
        </li>
    </ul>
</div>

<style>
    .container {
        height: calc(100vh - 53px);
        position: sticky;
        top: 53px;
        overflow-y: auto;
    }

    .container::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background-color: transparent;
    }

    .container::-webkit-scrollbar-corner {
        background-color: transparent;
        border-color: transparent;
    }

    .container::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0,0,0,0.2);
    }

    .container::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: transparent;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding-left: 0;
        padding-top: 16px;
    }

    .mi {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        justify-content: space-between;
        cursor: pointer;
        color: #535a60;
    }

    .mi:hover {
        color: #0c0d0e;
    }

    .mi-i {
    }

    .mi-t {
        margin-left: 10px;
        font-size: 14px;
    }

    .mi-ei {
        font-size: 12px;
    }

    .mi-ei {
        transform: rotateZ(0deg);
    }

    .mi-ei.expanded {
        transform: rotateZ(180deg);
    }

    .sm {
        transition: all .2s;
        height: 0;
        overflow: hidden;
    }

    .sm.expanded {
        transition: all .2s;
        height: auto;
    }

    .smi {
        cursor: pointer;
        padding-left: 52px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 14px;
        color: #535a60;
    }

    .smi:hover {
        color: #0c0d0e;
    }

    .smi.active {
        border-right: 3px solid #1bbc9c;
        background: #f4f4f4;
        font-weight: bold;
        color: #0c0d0e;
    }
</style>