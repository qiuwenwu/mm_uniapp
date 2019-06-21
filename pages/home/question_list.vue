<template>
	<!-- 问题列表页 -->
	<view class="page_home" id="home_question_list">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_search v-model="query.keyword" :list="list_word" :func="search_word"></mm_search>
					</mm_col>
				</mm_grid>
			</mm_warp>
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
				oauth: false,
				query:{
					keyword: ""
				},
				list: [{
					"title": "猪是怎么养成的？",
					"desc": "吃喝拉撒睡养成的"
				}, {
					"title": "先有鸡还是先有蛋？",
					"desc": "鸡蛋、鸡蛋，鸡在前当然是先有鸡再有蛋啦"
				}],
				list_word:[]
			}
		},
		methods: {
			search_word(word){
				this.list_word.clear();
				if(word !== '')
				{
					this.list_word.push(
					{
						title: word,
						url: "./question_list?keyword=" + word
					});
				}
			}
		}
	}
</script>

<style>
	.space-x { margin-top: 0.5rem; }
	#home_question_list .mm_bodyer { padding-top: 86upx; }
</style>
