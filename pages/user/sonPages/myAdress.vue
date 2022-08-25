<template>
	<view class="main">
		<text>X：137896542665</text>
		<u-button class="add" type="primary" size="large" @click="handleClcik">新增地址</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	methods: {
		// 点击新增地址跳转页面
		handleClcik() {
			uni.$u.route('/pages/user/sonPages/addNewAdress');
		}
	}
};
</script>

<style lang="scss" scoped>
.main {
	width: 100vw;
	.add {
		position: fixed;
		bottom: 20px;
	}
}
</style>
