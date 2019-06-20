<style src="@/static/css/font-awesome.min.css"></style>
<style src="@/static/css/mm_layout.css"></style>
<style src="@/static/css/mm_component.css"></style>
<style src="@/static/css/mm_theme.css"></style>

<script>
	export default {
		onLaunch: function() {
			console.log('应用程序启动')
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
	.uni-page-head-btn { top: 0.25rem }
	.navigator-hover { background: #e5e5e5; z-index:2; }
	
	/* 页面通用 */
	#tabs { text-align: center; font-size: 0.875rem;  }
	#tabs .active:after { position: absolute; bottom: 0; left: 0; right: 0; width: 100%; border-bottom: 2px solid #317EF3; }
	.dbd .mm_icon {width:5.625rem;height:4.625rem;}
	.introduce .mm_title {font-size:1.25rem;}
	.introduce .price {font-size:1rem;}
	.introduce .price:before {content:"￥";font-size:.75rem;}
	.introduce .days {float:right;}
	
	/* 模态窗 */
	.mm_modal .send_sms {top:initial;bottom:0;left:0;right:0;width:100%;transform:translate(0,100%);transition:all 0.5s ease-in-out; animation-delay: 2s; }
	.send_sms .mm_block {padding:1rem;height:12rem;}
	.show .send_sms { transform:translate(0,0); }
	.send_sms .mm_title {text-align:center;font-size:1.2rem;padding-bottom:.5rem;background:#FFFFFF;}
	.send_sms .close {position:absolute;right:0.5rem;top:0.5rem;width:1.5rem;height:1.5rem;line-height:1.5rem;text-align:center;background:rgba(0,0,0,0.1);color:#fff;border-radius:0.125rem;cursor:pointer;}

	.uni-page-wrapper { padding-bottom: 0.25rem; }
	.mm_head {  }
	.big .mm_icon { border-radius: 0.5rem; }
	.small .mm_icon { border-radius: 0.25rem; }
	.mini .mm_icon { border-radius: 0.25rem; }
</style>
