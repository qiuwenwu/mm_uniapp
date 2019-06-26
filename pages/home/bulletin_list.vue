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
				url_get_list: "~/paper/grouping/paper",
				query: {
					index: 0,
					size: 10,
					grouping: "公告"
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
							o.url = '/pages/home/bulletin_view?id=' + o.id;
							this.list.push(o);
						}
					}
				}
			}
		}
	}
</script>

<style>
	.hot_icon {
		padding-top: 0;
		padding-bottom: 0;
		height: 2.5rem;
		line-height: 2.5rem;
		color: #C60A0A;
	}
</style>
