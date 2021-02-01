<script>
	import Menu from "./ui/widget/menu/Menu.svelte"
	import DataTable from "./ui/widget/table/DataTable.svelte"

	let iconFont = "font/iconfont.css"
</script>
<div>
	<div class="hr"></div>
	<div class="container">
		<div class="menu-area">
			<div class="logo">
				<img src="img/hems.svg" alt="logo">
			</div>
			<Menu />
		</div>
		<header>
			<div></div>
			<div class="avatar">
				<img src="img/6.jpg" />
			</div>
		</header>
		<main>
			<div class="breadcrumb">
				<div>系统</div>
				<div class="sp">/</div>
				<div>库存管理</div>
				<div class="sp">/</div>
				<div>编辑</div>
			</div>
			<div class="body">
				<DataTable />
			</div>
			<div class="footer">
			</div>
		</main>
	</div>
</div>

<svelte:head>
	<link rel="stylesheet" href={iconFont}>
</svelte:head>

<style>
	.hr {
		border-top: 3px solid #1bbc9c;
	}
	.container {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-template-rows: 50px 1fr;
		height: calc(100vh - 3px);
		transition: all .2s;
	}
	.menu-area  {
		grid-area: 1/1/3/2;
		margin: 0;
	}

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		background: linear-gradient(180deg, rgb(255 255 255) 0%, rgb(237 237 237) 100%);
		box-shadow: 3px 1px 4px rgba(0,0,0,0.065);
		/*background-color:  #fafafb;*/
		/*box-shadow: 0 1px 2px rgba(0,0,0,0.05),0 1px 4px rgba(0,0,0,0.05),0 2px 8px rgba(0,0,0,0.05);*/
	}

	.logo img {
		height: 50%;
	}

	header {
		z-index: 1;
		grid-area: 1/2/2/3;
		background: linear-gradient(180deg, rgb(255 255 255) 0%, rgb(237 237 237) 100%);
		box-shadow: 3px 1px 4px rgba(0,0,0,0.065);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.avatar {
		box-sizing: border-box;
		height: 100%;
		overflow: hidden;
		padding: 8px;
		cursor: pointer;
	}

	.avatar:hover  {
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
	.breadcrumb {
		display: flex;
		font-size: 12px;
		margin: 16px;
	}
	.breadcrumb .sp {
		margin: 0 5px;
	}
</style>