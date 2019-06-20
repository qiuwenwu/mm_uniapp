<template>
	<!-- 公告列表页面 -->
	<mm_page class="page_home" id="home_bulletin_list">
		<!-- 外套 -->
		<mm_warp>
			<!-- 栅格 -->
			<mm_grid col="1" class="space">
				<!-- 格子 -->
				<mm_col>
					<!-- 公告列表 -->
					<mm_block>
						<mm_title>关于币价上涨，引起的矿机限购的公告</mm_title>
						<mm_desc>2019年10月20日</mm_desc>
						<mm_div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
							sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
							magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
							tellus mollis orci, sed rhoncus sapien nunc eget.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
							sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
							magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
							tellus mollis orci, sed rhoncus sapien nunc eget.

							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
							sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
							magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
							tellus mollis orci, sed rhoncus sapien nunc eget.
						</mm_div>
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
				oauth: false,
				url: "~/paper/all",
				query: {
					aid: ""
				}
			}
		},
		methods: {
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
	
	#home_bulletin_list .mm_title{
		text-align: center;
		font-weight: 600;
	}
	#home_bulletin_list .mm_desc {
		text-align: center;
		padding-top: .25rem;
		padding-bottom: .5rem;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		margin-bottom: 1rem;
	}
	#home_bulletin_list .mm_block { padding: 1.5rem 1rem; }
</style>
