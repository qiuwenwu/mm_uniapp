<template>
	<!-- 门户页面 -->
	<view class="page_home" id="home_index">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col class="pn-b">
						<!-- 轮播图 -->
						<mm_swiper_img :list="list" />
					</mm_col>
					<mm_col class="pn-tb">
						<mm_block>
							<!-- 菜单 -->
							<list_menu />
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<!-- 热点文章 —— 图片轮播 -->
						<mm_block class="lr">
							<mm_side class="hot_icon">
								<mm_div class="font_default" url="./bulletin_list"><text class="fa fa-bullhorn"></text></mm_div>
							</mm_side>
							<mm_main class="pn">
								<mm_swiper_text :list="list_bulletin" v-if="list_bulletin.length > 0" />
							</mm_main>
						</mm_block>
					</mm_col>
					<!-- 横幅广告 -->
					<mm_col>
						<view class="banner">
							<view class="banner_title">{{ banner1.title }}</view>
							<navigator :url="banner1.url" hover-class="navigator-hover">
								<mm_icon :src="banner1.img"></mm_icon>
							</navigator>
						</view>
					</mm_col>
					<mm_col id="dbd_list">
						<mm_block class="dbd">
							<mm_head class="lr">
								<mm_item url="/pages/calculation/dbd_view" class="font_small">
									<mm_div class="arrow">
										<mm_title>为您推荐</mm_title>
										<mm_desc>DBD说明</mm_desc>
									</mm_div>
								</mm_item>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item class="big" url="/pages/calculation/dbd_view">
										<mm_side>
											<mm_icon :src="dbd.icon"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>{{ dbd.title }}</mm_title>
											<mm_desc><text class="price">{{ dbd.price }}</text><text class="unit">元/个</text></mm_desc>
											<mm_desc>
												有效天数：365
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div class="footer_info">
							<navigator url="../home/special?title=关于我们" class="footer_link">比特中心</navigator>
							<text class="copyright">Copyright © 2019-2022 weui.io</text>
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</view>
</template>

<script>
	import list_menu from '@/components/menu'
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {
			list_menu
		},
		data() {
			return {
				oauth: true,
				title: 'Hello',
				url_get_list: "~/image/grouping",
				query: {
					index: 0,
					size: 4,
					grouping: "轮播图"
				},
				list_bulletin: [],
				banner1: {
					title: "",
					img: "",
					url: ""
				},
				dbd: this.$store.state.dbd
			}
		},
		methods: {
			get() {
				this.$get_dbd(this.get_list);
			},
			/// 获取公告
			get_bulletin() {
				var query = {
					index: 0,
					size: 4,
					grouping: "公告"
				}
				var url = this.url_get_list;
				var _this = this;
				this.$get(this.toUrl(query, "~/paper/grouping/paper"), function(json, status) {
					if (json) {
						var lt = json.content;
						if (lt) {
							_this.list_bulletin.clear();
							for (var i = 0; i < lt.length; i++) {
								var o = lt[i];
								o.url = '/pages/home/bulletin_view?id=' + o.id;
								_this.list_bulletin.push(o);
							}
						}
					}
					_this.get_banner();
				});
			},
			/// 获取横幅
			get_banner() {
				var query = {
					index: 0,
					size: 1,
					grouping: "横幅"
				}
				var url = this.url_get_list;
				var _this = this;
				this.$get(this.toUrl(query, url), function(json, status) {
					if (json) {
						var lt = json.data;
						if (lt && lt.length > 0) {
							var o = lt[0];
							o.img = o.address;
							o.title = o.imageName;
							_this.$obj.push(_this.banner1, o);
						}
					}
				});
			},
			// 广告
			get_list_after(json, status) {
				if (json) {
					var lt = json.data;
					if (lt) {
						this.list.clear();
						for (var i = 0; i < lt.length; i++) {
							var o = lt[i];
							o.img = o.address;
							o.title = o.imageName;
							this.list.push(o);
						}
					}
				}
				this.get_bulletin();
			}
		}
	}
</script>

<style>
	.banner {
		text-align: center;
	}

	.banner .mm_icon {
		height: 8.75rem;
	}

	.banner_title {
		padding: 0.5rem 0;
		background: #fff;
	}

	.banner_image {
		width: 100%;
		height: 8.75rem;
	}

	.hot_icon {
		padding-top: 0;
		padding-bottom: 0;
		height: 2.5rem;
		line-height: 2.5rem;
		position: relative;
	}

	.hot_icon:after {
		display: block;
		content: "";
		position: absolute;
		height: 60%;
		top: 20%;
		bottom: 0;
		right: 0;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	}

	.dbd .mm_head .mm_title {
		color: #333;
	}
</style>
