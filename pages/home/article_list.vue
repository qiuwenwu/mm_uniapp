<template>
	<!-- 文章列表页面 -->
	<mm_page class="page_home" id="home_article_list">
		<!-- 外套 -->
		<mm_warp>
			<!-- 栅格 -->
			<mm_grid col="1" class="space-x">
				<!-- 格子 -->
				<mm_col>
					<!-- 热点文章 —— 图片轮播 -->
					<mm_block>
						<mm_body>
							<mm_swiper_img :list="list_img" />
						</mm_body>
					</mm_block>
				</mm_col>
				<!-- 文章筛选面板 -->
				<!-- 文章排序条件 -->
				<!-- 格子 -->
				<mm_col>
					<!-- 文章列表 -->
					<mm_block>
						<mm_body class="lr">
							<mm_list_article :list="list" class="big" id="mm_list_article"></mm_list_article>
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
				url_get_list: "~/paper/grouping/paper",
				query: {
					index: 0,
					size: 10,
					grouping: "培训"
				},
				vm: {
					title: "title",
					desc: "description",
					createTime: "time",
					icon: "icon",
					url: "url"
				}
			}
		},
		methods: {
			get_list_after(json, status) {
				if (json) {
					var lt = json.content;
					if (lt) {
						this.list.clear();
						for (var i = 0; i < lt.length; i++) {
							var o = lt[i];
							o.url = '/pages/home/article_view?id=' + o.id;
							this.list.push(o);
						}
					}
				}
			}
		}
	}
</script>

<style>

</style>
