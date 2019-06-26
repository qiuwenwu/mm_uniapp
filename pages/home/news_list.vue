<template>
	<!-- 新闻列表页 -->
	<view class="page_home" id="home_news_list">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 文章列表 -->
						<mm_block>
							<mm_body class="rl">
								<mm_list_news :list="list" class="big"></mm_list_news>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 新闻筛选面板 -->

		<!-- 新闻排序条件 -->

		<!-- 新闻列表 -->

	</view>
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
					grouping: "新闻"
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
			get_list_after(json, status)
			{
				if(json){
					var lt = json.content;
					if(lt){
						this.list.clear();
						for(var i = 0; i < lt.length; i++){
							var o = lt[i];
							o.url = '/pages/home/news_view?id=' + o.id;
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
