<template>
	<mm_page class="page_calculation" id="calculation_dbd_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid id="dbd_grid" class="space-x">
					<mm_col>
						<mm_block url="./dbd_view?did=1">
							<mm_head class="lr">
								<mm_div>
									<mm_main class="font_small">
										<mm_title>20190520112121</mm_title>
										<mm_desc>未开启</mm_desc>
									</mm_main>
								</mm_div>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item class="big">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text class="num">数量：10.33</text>
												<text class="days">有效天数：289</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block url="./dbd_view?did=1">
							<mm_head class="lr">
								<mm_div>
									<mm_main class="font_small">
										<mm_title>20190520112121</mm_title>
										<mm_desc>未开启</mm_desc>
									</mm_main>
								</mm_div>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item class="big">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text class="num">数量：10.33</text>
												<text class="days">有效天数：289</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			clickTest() {
				console.log(1)
			}
		}
	}
</script>

<style>
	.mian {
		background: rgb(237, 237, 237);
		font-size: .8rem
	}

	.tab_list {
		height: 2.5rem;
		background: #ffffff;
	}

	.tab_list .mm_div {
		height: 2.3rem;
		line-height: 2.3rem;
		text-align: center;
		font-size: .8rem;
		border-bottom: 1px solid #09BB07;
	}

	.num {
		padding: .5rem;
	}

	#dbd_list .mm_item {
		background: #ffffff;
		margin-bottom: .2rem;
	}

	/* 
	#dbd_list .mm_item>.mm_desc {
		padding: .3rem 0rem;
		margin: 0rem .5rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #b9b9b9;
	} */

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 .5rem;
		padding: 1rem 0;
	}

	.info .img {
		flex: 1;
		background: #dbdbdb;
	}

	.img>image {
		width: 100%;
		height: 14vh;
		padding: .5rem;
	}

	.introduce {
		flex: 2;
		padding-left: .5rem;
		height: 14vh;
		display: flex;
		align-content: space-between;
		flex-wrap: wrap
	}

	.introduce h3 {
		font-size: 1rem;
		font-weight: 400;
		width: 100%;
	}

	.introduce p {
		width: 100%;
	}

	.introduce p:first-of-type {
		font-size: 1.4rem
	}

	.introduce p:first-of-type:before {
		content: "￥";
		font-size: .8rem
	}

	.introduce p:last-of-type {
		display: flex;
		justify-content: space-between;
	}
</style>
