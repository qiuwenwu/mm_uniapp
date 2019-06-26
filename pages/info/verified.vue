<template>
	<!-- 实名认证页面 -->
	<view class="page_info" id="info_verified">
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
								<mm_title class="font_small"><text class="font_danger">实名认证后不可更改，请勿使用别人的身份证</text></mm_title>
							</mm_head>
							<!-- 头像 -->
							<mm_body class="tb">
								<mm_item class="pic">
									<mm_side>
										<mm_icon src="/static/img/headimg.jpg"></mm_icon>
									</mm_side>
									<mm_desc>
										<text class="font_small">身份证正面</text>
									</mm_desc>
								</mm_item>
								<mm_item class="pic">
									<mm_side>
										<mm_icon src="/static/img/headimg.jpg"></mm_icon>
									</mm_side>
									<mm_desc>
										<text class="font_small">身份证反面</text>
									</mm_desc>
								</mm_item>
								<mm_item class="pic">
									<mm_side>
										<mm_icon src="/static/img/headimg.jpg"></mm_icon>
									</mm_side>
									<mm_desc>
										<text class="font_small">手持身份证</text>
									</mm_desc>
								</mm_item>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full">提交</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div class="approve">
							<checkbox-group>
								<label>
									<checkbox value="cb" checked="true" />同意
								</label>
								<navigator class="font_info" url="/pages/home/article_view?title=实名认证协议">《实名认证协议》</navigator>
							</checkbox-group>
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
	.approve {
		text-align: center;
		padding-bottom: 2rem;
		font-size: 0.75rem;
	}
	.approve navigator {
		display: inline-block;
	}

	.pic:active {
		background: none;
	}

	.pic {
		padding: 1.5rem 2rem;
		float: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.pic .mm_icon {
		height: 10rem;
		margin: auto !important;
		border-radius: 0.35rem;
	}

	.pic .mm_desc {
		clear: both;
		text-align: center;
	}
</style>
