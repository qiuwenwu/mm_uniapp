<template>
	<mm_page class="page_calculation" id="calculation_dbd_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<!-- 礼包展示 -->
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_side class="dbd_view">
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
									</mm_item>
									<mm_item>
										<mm_main class="bt">
											<mm_title>价格</mm_title>
											<mm_desc class="price"><text class="unit">￥</text>389.65</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>有效时长</mm_title>
											<mm_desc><text>365</text><text class="unit">天</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_footer>
			<mm_warp>
				<mm_grid>
					<mm_col>
						<mm_group>
							<mm_btn type="default" @click.native="buy()">
								立即购买
							</mm_btn>
						</mm_group>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_footer>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				state: 0
			}
		},
		methods: {
			send_msg() {
				console.log(0);
			},
			buy() {

			}
		}
	}
</script>

<style>
	.dbd_view {
		float: none;
	}

	.dbd_view .mm_icon {
		width: 100%;
		height: 8rem;
		margin: auto !important;
	}
</style>
