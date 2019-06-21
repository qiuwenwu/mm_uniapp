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
											<mm_desc class="price"><text class="unit">￥</text>298.00</mm_desc>
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
					<mm_col class="pn-b">
						<mm_block>
							<mm_body>
								<mm_list id="tabs" col="2" class="space_big">
									<mm_item :class="{'active': state == '0' }" @click.native="state = '0'">产品描述</mm_item>
									<mm_item :class="{'active': state == '1' }" @click.native="state = '1'">法律声明</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col class="pn-t">
						<!-- 公告列表 -->
						<mm_block v-show="state == '0'">
							<mm_div class="html">
								<text>365天的0.5T算力（含所有费用），价值￥300元</text>
								<image src="https://axure-file.lanhuapp.com/94d81de6-5cf3-438d-9714-a1fddaeef867__bec6cca7b4d8b79709eeda362fa8ed8d"></image>
								<view>注：1.开启后即可进行挖矿，每天产生BTC；</view>
								<view>2.算力稳步上升，一周调整一次。</view>
							   <view>3.每天签到后即可获得当天的挖矿收益。</view>
							</mm_div>
						</mm_block>
						<mm_block v-show="state == '1'">
							<mm_div class="pa">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
								sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
								et
								magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
								tellus mollis orci, sed rhoncus sapien nunc eget.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
								sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
								et
								magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
								tellus mollis orci, sed rhoncus sapien nunc eget.

								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
								sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
								et
								magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
								tellus mollis orci, sed rhoncus sapien nunc eget.
							</mm_div>
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
				state: '0'
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
	.mm_bodyer { margin-bottom: 3rem; }
</style>
