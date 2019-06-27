<template>
	<!-- 专题页面 -->
	<view class="page_home" id="home_special">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space_big">
					<!-- 格子 -->
					<mm_col>
						<!-- 专题详情 -->
						<mm_block>
							<mm_body class="pa">
								<mm_div v-html="obj.content"></mm_div>
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
				url_get_obj: "~/paper/id",
				query: {
					id: "",
					title: ""
				},
				obj: {
					author: "",
					content: "",
					description: "",
					display: 0,
					grouping: "",
					id: 0,
					keyWords: [],
					state: 0,
					time: "1970-01-01 00:00:00",
					title: "",
					users: []
				}
			}
		},
		computed: {
			timeStr() {
				return new Date(this.obj.time).format('yyyy年MM月dd日')
			}
		},
		methods: {
			get_obj_after(json, status) {
				var d = json.data;
				if (json.code) {
					this.alert(json);
				} else if (json.data) {
					this.$obj.clear(this.obj);
					if (this.url_get_obj.indexOf('id') != -1) {
						if (!d.users) {
							d.users = [];
						}
						this.$obj.push(this.obj, d);
					} else if (json.data.length > 0) {
						var o = d[0];
						if (!o.users) {
							o.users = [];
						}
						this.$obj.push(this.obj, o);
					}
				}
			}
		},
		onLoad() {
			if (this.$route.query.title) {
				this.url_get_obj = this.url_get_obj.replace('id', 'title')
			}
			this.init();
		}
	}
</script>

<style>
.mm_body .mm_div { overflow: hidden; }
</style>
