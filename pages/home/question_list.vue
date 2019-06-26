<template>
	<!-- 问题列表页 -->
	<view class="page_home" id="home_question_list">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
<!-- 			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_search v-model="query.keyword" :list="list_word" :func="search_word"></mm_search>
					</mm_col>
				</mm_grid>
			</mm_warp> -->
		</mm_header>
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<!-- 问题列表 -->
								<mm_list_question :list="list"></mm_list_question>
							</mm_body>
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
				oauth: true,
				url_get_list: "~/paper/grouping/paper",
				query: {
					index: 0,
					size: 10,
					grouping: "问答"
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
							o.url = '/pages/home/question_view?id=' + o.id;
							this.list.push(o);
						}
					}
				}
			}
		}
	}
</script>

<style>
	.space-x {
		margin-top: 0.5rem;
	}

	#home_question_list .mm_bodyer {
		padding-top: 86upx;
	}
</style>
