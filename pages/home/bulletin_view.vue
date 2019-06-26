<template>
	<!-- 公告列表页面 -->
	<mm_page class="page_home" id="home_bulletin_list">
		<!-- 外套 -->
		<mm_warp>
			<!-- 栅格 -->
			<mm_grid col="1" class="space_big">
				<!-- 格子 -->
				<mm_col>
					<!-- 公告列表 -->
					<mm_block>
						<mm_title>{{ obj.title }}</mm_title>
						<mm_desc>{{ timeStr }}</mm_desc>
						<mm_div v-html="obj.content">
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
					time: "2019-06-14 15:01:16",
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
				if (json.code) {
					this.alert(json);
				} else if (json.data) {
					this.$obj.clear(this.obj);
					if (this.url_get_obj.indexOf('id') != -1) {
						this.$obj.push(this.obj, json.data);
					}
					else if(json.data.length > 0) {
						this.$obj.push(this.obj, json.data[0]);
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
	.hot_icon {
		padding-top: 0;
		padding-bottom: 0;
		height: 2.5rem;
		line-height: 2.5rem;
		color: #C60A0A;
	}

	#home_bulletin_list .mm_title {
		text-align: center;
		font-weight: 600;
	}

	#home_bulletin_list .mm_desc {
		text-align: center;
		padding-top: .25rem;
		padding-bottom: .5rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin-bottom: 1rem;
	}

	#home_bulletin_list .mm_block {
		padding: 1.5rem 1rem;
	}
</style>
