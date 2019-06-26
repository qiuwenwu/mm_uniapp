<template>
	<!-- 修改头像页面 -->
	<view class="page_info" id="info_headimg">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<!-- 提示 -->
							<mm_head>
								<mm_title class="font_small"><text>头像</text></mm_title>
							</mm_head>
							<!-- 头像 -->
							<mm_body class="tb">
								<mm_item class="headimg">
									<mm_side>
										<mm_icon src="/static/img/headimg.jpg"></mm_icon>
									</mm_side>
									<mm_desc>
										<text class="font_small font_info">点击修改头像</text>
									</mm_desc>
								</mm_item>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full">保存</mm_btn>
						</mm_div>
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
				oauth: true
			}
		}
	}
</script>

<style>
	.headimg {
		padding: 2rem;
		float: none;
	}

	.headimg .mm_icon {
		width: 8rem;
		height: 8rem;
		border-radius: 1rem;
		margin: auto !important;
	}

	.headimg .mm_desc {
		clear: both;
		text-align: center;
	}
</style>
