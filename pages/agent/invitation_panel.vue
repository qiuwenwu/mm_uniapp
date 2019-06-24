<template>
	<!-- 邀请面板页面 -->
	<view class="page_agent" id="agent_invitation_panel">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_header>
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="2" class="jiugong">
					<mm_col width="100" class="bb">
						<mm_block>
							<mm_head class="font_small">
								<mm_title>我</mm_title>
							</mm_head>
							<mm_body>
								<mm_div url="./level_desc">
									<mm_progress :num="23">等级3</mm_progress>
								</mm_div>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div class="pa" url="./member_list">
							<mm_title>邀请人数</mm_title>
							<mm_desc class="num">80</mm_desc>
						</mm_div>
					</mm_col>
					<mm_col class="bl">
						<mm_div class="pa" url="./invitation_record">
							<mm_title>邀请奖励</mm_title>
							<mm_desc class="price"><text class="unit">￥</text>8000</mm_desc>
						</mm_div>
					</mm_col>
				</mm_grid>
				<mm_grid col="1" class="space-x">
					<mm_col class="pn-b">
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1">
									<mm_item>
										<mm_main>
											<mm_title>邀请码</mm_title>
											<mm_desc>
												<text class="text_code code">{{ obj.code }}</text>
												<text id="btn_copy" class="font_success" @click="$copy(obj.code)">复制</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>邀请链接</mm_title>
											<mm_desc>
												<text id="btn_url" class="font_info" @click="$copy(invitation_qrcode)">复制链接</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<mm_qrcode display="2" class="invitation_qrcode" :value="invitation_qrcode" v-if="invitation_qrcode"></mm_qrcode>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: false,
				url_get_obj: "~/spread/",
				obj: {
					code: ""
				},
				query: {}
			}
		},
		computed: {
			invitation_qrcode() {
				return this.$url('/pages/account/signup?invitation_code=' + this.obj.code);
			}
		},
		methods: {
		},
		mounted() {}
	}
</script>

<style>
	#text_url {
		display: none;
	}

	#agent_invitation_panel .code {
		margin-right: 0.5rem;
		padding-right: 0.5rem;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	}

	.mm_progress {
		padding: 1.5rem 1rem 2rem 1rem;
	}

	.invitation_qrcode {
		padding-top: 1.25rem;
		padding-bottom: 0.725rem;
	}

	.jiugong {
		text-align: center;
		background: #fff;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin-bottom: .5rem;
	}
</style>
