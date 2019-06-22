<style src="@/static/css/font-awesome.min.css"></style>
<style src="@/static/css/mm_layout.css"></style>
<style src="@/static/css/mm_component.css"></style>
<style src="@/static/css/mm_theme.css"></style>

<script>
	export default {
		onLaunch: function() {
			console.log('应用程序启动')
			this.$get_user();
		},
		onShow: function() {
			console.log('应用显示')
			
		},
		onHide: function() {
			console.log('应用隐藏')
		},
		onError: function(err) {
			console.log('应用错误:' + err)
		}
	}
</script>

<style>
	/* ===  每个页面公共css  === */
	.uni-page-head-btn {
		top: 50%;
		left: 0.5rem;
		line-height: 1;
		margin: 0;
		transform: translateY(-50%);
	}

	.navigator-hover {
		background: #e5e5e5;
		z-index: 2;
	}

	/* 页面通用 */
	#tabs {
		text-align: center;
		font-size: 0.875rem;
	}

	#tabs .active:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		border-bottom: 2px solid #317EF3;
	}

	.dbd .mm_icon {
		width: 5rem;
		height: 3.75rem;
	}

	.introduce .price:before {
		font-size: 0.75rem;
	}

	.introduce .days {
		float: right;
	}

	/* 模态窗 */
	.mm_modal .send_sms {
		top: initial;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		transform: translate(0, 100%);
		transition: all 0.5s ease-in-out;
		animation-delay: 5s;
	}

	.send_sms .mm_block {
		padding: 1rem;
		height: 12rem;
	}

	.show .send_sms {
		transform: translate(0, 0);
	}

	.send_sms .mm_title {
		text-align: center;
		font-size: 1.2rem;
		padding-bottom: .5rem;
		background: #FFFFFF;
	}

	.mm_modal .close {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		width: 1.5rem;
		height: 1.5rem;
		line-height: 1.5rem;
		text-align: center;
		background: rgba(0, 0, 0, 0.1);
		color: #fff;
		border-radius: 0.125rem;
		cursor: pointer;
	}


	.big .mm_icon {
		border-radius: 0.125rem;
	}

	.small .mm_icon {
		border-radius: 0.25rem;
	}

	.mini .mm_icon {
		border-radius: 0.25rem;
	}

	.uni-page-head-btn .uni-btn-icon {
		color: #FF5A6A !important;
	}

	.uni-page-wrapper {
		padding-bottom: 0.25rem;
	}

	.font_default,
	.mm_btn_default-x {
		color: #FF5A6A;
	}

	.mm_btn_default {
		background-color: #FF5A6A;
	}

	.font_default {
		color: #FF5A6A !important;
	}

	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		color: #FF5A6A !important;
	}

	#tabs .active:after {
		border-bottom-color: #FF5A6A;
	}

	#tabs .active {
		color: #FF5A6A;
	}

	.collect [class*=fa-heart]~text {
		margin-left: 0.25rem;
	}

	.collect [class*=fa-heart] {
		color: #F12F04;
		padding: 2px;
	}

	.vip {
		display: inline-block;
		position: relative;
		top: -1px;
		font-size: 0.5rem;
		height: 0.875rem;
		line-height: 1rem;
		padding: 0 0.25rem;
		border-radius: 0.125rem;
		color: #fff;
		background: -webkit-linear-gradient(180deg, #fccf31, #f55555, #fccf31);
		background: linear-gradient(270deg, #fccf31, #f55555, #fccf31);
	}

	/* .mm_head { background: #fff0f1; } */
	/* .mm_head { border-bottom: 1px solid rgba(255, 90, 106, 0.1); } */
	.pn-tb .mm_block,
	.pn-t .mm_block {
		border-top: none;
	}

	.uni-input {
		font-size: 0.875rem !important;
		line-height: 1.5 !important;
	}

	.dbd_item .price {
		font-size: 0.75rem;
	}

	text~.unit {
		margin-left: 0.25rem;
	}

	uni-page {
		height: initial;
		overflow-y: hidden;
		width: 100%;
	}
	
	uni-page-head .uni-page-head {
		padding-left: 0;
		padding-right: 0;
	}
	
	.mm_modal .mm_body { min-height: 3rem; }
	
	.desc_color { color: #ccc !important; }
</style>
