<template>
	<view class="page_account" id="account_signin">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_list id="dbd_list">
							<mm_item url="./dbd_view?did=1">
								<mm_head>
									<mm_main>
										<mm_title>20190520112121</mm_title>
										<mm_desc>未开启</mm_desc>
									</mm_main>
								</mm_head>
								<div class="info">
									<mm_icon src="/static/img/ad_2.png"></mm_icon>
									<div class="introduce">
										<h3>DBD礼包</h3>
										<p>298.00</p>
										<p>
											<span>数量：10.33</span>
											<span>有效天数：289</span>
										</p>
									</div>
								</div>
							</mm_item>
						</mm_list>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</view>
</template>A

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
