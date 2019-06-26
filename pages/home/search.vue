<template>
	<!-- 门户搜索页面 -->
	<view class="page_home" id="home_search">
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
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 搜索栏 -->
						<mm_block class="bg_no">
							<mm_body class="lr">
								<mm_main class="search_main">
									<mm_div class="search_div">
										<input v-model="form.keywords" desc="search_input" class="mm_col_100" placeholder="搜索" @input="input"></input>
										<mm_icon src="/static/img/cancel.png" class="cancel_icon" @click="clear" v-show="!showList"></mm_icon>
									</mm_div>
									<mm_desc class="ptb"><text class="font_primary">取消</text></mm_desc>
								</mm_main>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col v-show="showList">
						<mm_block class="bg_no">
							<mm_body class="center">
								<mm_desc class="ptb">搜索指定内容</mm_desc>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="font_primary" v-show="showList">
						<mm_block class="bg_no">
							<mm_body class="center">
								<mm_div class="mm_col_33">朋友圈</mm_div>
								<mm_div class="mm_col_33">文章</mm_div>
								<mm_div class="mm_col_33">公众号</mm_div>
								<mm_div class="mm_col_33">小程序</mm_div>
								<mm_div class="mm_col_33">音乐</mm_div>
								<mm_div class="mm_col_33">表情</mm_div>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 搜索页面列表部分，输入文字显示 -->
					<mm_col v-show="!showList" class="search_list_col">
						<mm_block class="bg_no">
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item class="bg_white">
										<mm_main class="search_item">
											<mm_title>搜索结果</mm_title>
											<mm_desc><mm_icon src="/static/img/arrow-up-left.png"></mm_icon></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="bg_white">
										<mm_main class="search_item">
											<mm_title>搜索结果1</mm_title>
											<mm_desc><mm_icon src="/static/img/arrow-up-left.png"></mm_icon></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="bg_white">
										<mm_main class="search_item">
											<mm_title>搜索结果2</mm_title>
											<mm_desc><mm_icon src="/static/img/arrow-up-left.png"></mm_icon></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="bg_white">
										<mm_main class="search_item">
											<mm_title>搜索结果3</mm_title>
											<mm_desc><mm_icon src="/static/img/arrow-up-left.png"></mm_icon></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 搜索栏-->

		<!-- 热门搜索 -->

		<!-- 搜索记录-->

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
				url: "~/home/article?"
			}
		}
	}
</script>

<style>
</style>
