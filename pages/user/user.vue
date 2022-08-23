<template>
	<view class="">
		<view class="header"><u-icon name="account-fill" size="50px" space="10px" labelSize="20px" label="登录/注册"></u-icon></view>
		<view class="main">
			<navigator url="/pages/user/sonPages/myLunTan" hover-class="navigator-hover">
				<u-icon name="chat" size="20px" space="10px" labelSize="20px" label="我的论坛"></u-icon>
			</navigator>
			<u-divider></u-divider>
			<navigator url="/pages/user/sonPages/myChuFang" hover-class="navigator-hover">
				<u-icon name="file-text" size="20px" space="10px" labelSize="20px" label="我的处方"></u-icon>
			</navigator>
			<u-divider></u-divider>
			<u-icon name="map" size="20px" space="10px" labelSize="20px" label="地址管理"></u-icon>
			<u-divider></u-divider>
			<u-icon name="file-text" size="20px" space="10px" labelSize="20px" label="健康档案"></u-icon>
			<u-divider></u-divider>
			<u-icon name="order" size="20px" space="10px" labelSize="20px" label="我的名片"></u-icon>
			<u-divider></u-divider>
			<u-icon name="account" size="20px" space="10px" labelSize="20px" label="我的专家"></u-icon>
		</view>
		<u-button type="primary" size="large" text="退出登录"></u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goLunTan() {
			console.log(11);
		}
	}
};
</script>

<style lang="scss">
.header {
	background-color: #fff;
	padding: 15px 0 15px 15px;
	margin-bottom: 10px;
}
.main {
	background-color: #fff;
	padding: 15px 0 15px 15px;
	margin-bottom: 20px;
}
</style>
