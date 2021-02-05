<script>
    import Menu from "./ui/widget/menu/Menu.svelte"
    import User from "./ui/crud/user/User.svelte";
    import {Route, Router} from "./lib/routing"

    let iconFont = "font/iconfont.css"


</script>
<Router url="">
<div>
    <div class="top-bar">
        <div class="logo">
            <img src="img/hems.svg" alt="logo">
        </div>
        <div class="sys-menu">
            <div class="avatar">
                <img src="img/6.jpg"/>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="menu-area">
            <Menu/>
        </div>
        <header>

        </header>
        <main>
            <div class="body" style="height: 3000px;">
                    <Route path="/" component={User} />
                    <Route path="/user" component={User} />
            </div>
            <div class="footer">
            </div>
        </main>
    </div>
</div>
</Router>


<svelte:head>
    <link rel="stylesheet" href={iconFont}>
</svelte:head>

<style>
    .container {
        display: grid;
        grid-template-columns: 180px 1fr;
        grid-template-rows: 50px 1fr;
        height: 100vh;
        transition: all .2s;
        padding-top: 3px;
        box-sizing: border-box;
    }

    .sys-menu {
        height: 100%;
    }

    .menu-area {
        grid-area: 2/1/3/2;
        margin: 0;
        border-right: 1px solid #d6d9dc;
    }

    .logo {
        width: 180px;
        display: flex;
        align-items: center;
        padding-left: 44px;
    }

    .logo img {
        height: 50%;
    }

    header {
        grid-area: 1/2/2/3;
        position: relative;
    }

    .top-bar {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        width: 100%;
        background: #fafafb;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.05);
        border-top: 3px solid #1bbc9c;
        z-index: 9999;
    }

    .avatar {
        box-sizing: border-box;
        height: 50px;
        overflow: hidden;
        padding: 8px;
        cursor: pointer;
    }

    .avatar:hover {
        background: #e4e6e8;
    }

    .avatar img {
        height: 100%;
    }

    main {
        grid-area: 2/2/3/3;
    }

    main > .body {
        margin: 16px;
    }
</style>