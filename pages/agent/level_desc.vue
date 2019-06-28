<template>
	<!-- 等级说明页面 -->
	<mm_page class="page_agent" id="agent_level_desc">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>等级{{ user.level + 1 }} 升级条件</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item v-if="oj.dbd_my > 0">
										<mm_main>
											<mm_title>自己DBD数量</mm_title>
											<mm_desc>
												<mm_icon src="/static/img/state_success.svg"></mm_icon>{{ user.hold }}/{{ oj.dbd_my }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.people_1 > 0">
										<mm_main>
											<mm_title>一级代理人数</mm_title>
											<mm_desc>
												<mm_icon src="/static/img/state_success.svg" v-if="user.people >= oj.people_1"></mm_icon>
												<mm_icon src="/static/img/state_warning.svg" v-else></mm_icon>
												{{ user.people }}/{{ oj.people_1 }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.dbd_1 > 0">
										<mm_main>
											<mm_title>一级DBD总数</mm_title>
											<mm_desc>
												<mm_icon src="/static/img/state_success.svg" v-if="user.hold1 >= oj.dbd_1"></mm_icon>
												<mm_icon src="/static/img/state_warning.svg" v-else></mm_icon>
												{{ user.hold1 }}/{{ oj.dbd_1 }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.people_2 > 0">
										<mm_main>
											<mm_title>二级代理人数</mm_title>
											<mm_desc>
												<mm_icon src="/static/img/state_success.svg" v-if="user.people2 >= oj.people_2"></mm_icon>
												<mm_icon src="/static/img/state_warning.svg" v-else></mm_icon>
												{{ user.people2 }}/{{ oj.people_2 }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.dbd_2 > 0">
										<mm_main>
											<mm_title>二级DBD总数</mm_title>
											<mm_desc>
												<mm_icon src="/static/img/state_success.svg" v-if="user.hold2 >= oj.dbd_2"></mm_icon>
												<mm_icon src="/static/img/state_warning.svg" v-else></mm_icon>
												{{ user.hold2 }}/{{ oj.dbd_2 }}
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_title><text class="font_danger">已达成 {{ $double(user.percentage * 100) }}%</text></mm_title>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>当前权益</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>一级购买</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>二级购买</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>下级权益</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>一级购买</mm_title>
											<mm_desc></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_main>
											<mm_title>二级购买</mm_title>
											<mm_desc></mm_desc>
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
			return {
				oauth: true,
				url_get_obj: "~/user/level_term",
				user: this.$store.state.user,
				obj: {
					ejtg: [], // 二级推广
					ercy: [], // 二级持有
					yicy: [], // 一级持有
					yjtg: [], // 一级推广
					zjcy: [] // 自己持有dbd
				},
				desc: {
					"level6": "",
					"level5": "",
					"level4": "",
					"level3": "",
					"level2": "",
					"level1": "",
					"level0": "",

					"level4_team": "",
					"level2_team": "",
					"level3_team": "",
					"level1_team": "",

					"tow_level6": "",
					"tow_level5": "",
					"tow_level4": "",
					"tow_level3": "",
					"tow_level2": "",
					"tow_level1": "",
					"tow_level0": ""
				}
			}
		},
		computed: {
			oj() {
				var i = this.user.level + 1;
				var o = this.obj;
				if (i > o.ercy.length) {
					i = o.ercy.length;
				}
				if (o.ercy.length > 0) {
					return {
						dbd_my: o.zjcy[i],
						dbd_1: o.yicy[i],
						dbd_2: o.ercy[i],
						people_1: o.yjtg[i],
						people_2: o.ejtg[i]
					}
				} else {
					return {
						dbd_my: 0,
						dbd_1: 0,
						dbd_2: 0,
						people_1: 0,
						people_2: 0
					}
				}
			}
		},
		methods: {
			get_desc() {
				var _this = this;
				this.$get('~/user/level_rebate', function(json, status) {
					if (json) {
						if (json.data) {
							_this.$obj.push(_this.desc, json.data);
						}
					}
				});
			},
			get_obj_after(json, status) {
				if (json) {
					if (json.data) {
						this.$obj.push(this.obj, json.data);
					}
				}
				this.get_desc();
			}
		}
	}
</script>

<style>
	#agent_level_desc .mm_desc .mm_icon {
		float: right;
		margin-left: 0.5rem;
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
