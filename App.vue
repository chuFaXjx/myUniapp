<script>
export default {
	
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import '@/uni_modules/uview-ui/index.scss';
@import 'colorui/main.css';
@import 'colorui/icon.css';
/* 下边可以引入你的项目css */

</style>
