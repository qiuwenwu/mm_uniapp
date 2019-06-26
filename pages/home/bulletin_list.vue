<template>
	<!-- 公告列表页面 -->
	<mm_page class="page_home" id="home_bulletin_list">
		<!-- 外套 -->
		<mm_warp>
			<!-- 栅格 -->
			<mm_grid col="1" class="space-x">
				<!-- 格子 -->
				<mm_col>
					<!-- 公告列表 -->
					<mm_block>
						<mm_body class="lr">
							<mm_list_article :list="list_text" class="big" id="mm_list_article"></mm_list_article>
						</mm_body>
					</mm_block>
				</mm_col>
			</mm_grid>
		</mm_warp>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
				url: "~/paper/all",
				query: {
					cid: ""
				},
				list_text: [{
						title: "这是一条公告，轮播公告",
						desc: "2019年6月20日",
						url: "/pages/home/bulletin_view"
					},
					{
						title: "关于币价上涨，引起的矿机限购的公告",
						desc: "2019年6月20日",
						url: "/pages/home/bulletin_view"
					}
				]
			}
		},
		methods: {
			get_list_before(param) {
				var pm = this.$obj.copy(param);
				pm.index = (param.page - 1) + "";
				delete pm.page;
				return pm;
			}
		}
	}
</script>

<style>
	.hot_icon { padding-top: 0; padding-bottom: 0; height: 2.5rem; line-height: 2.5rem; color: #C60A0A; }
</style>
