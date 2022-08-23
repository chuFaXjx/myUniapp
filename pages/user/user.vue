<template>
	<view class="">
		<view class="header" v-if="isLogin">
			<view class="top">
				<view class="left"><u-avatar src="../../static/touxiang.jpg" size="55"></u-avatar></view>
				<view class="middle">
					<view class="name">X</view>
					<text class="tel">18749531254</text>
				</view>
				<view class="right"><u-button shape="circle" size="mini" type="primary" :plain="true" text="编辑资料"></u-button></view>
			</view>
			<view class="foot">
				<view class="foot_left">
					<view>0</view>
					<view>我的医生</view>
				</view>
				<view class="foot_left">
					<view>0</view>
					<view>我的圈子</view>
				</view>
				<view class="foot_left">
					<view>0.00</view>
					<view>积分兑换</view>
				</view>
			</view>
		</view>
		<view class="header" v-else>
			<navigator url="/pages/wxlogin/wxlogin"><u-icon name="account-fill" size="50px" space="10px" labelSize="20px" label="登录/注册"></u-icon></navigator>
		</view>
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
			<view v-if="isLogin">
				<u-divider></u-divider>
				<u-icon name="account" size="20px" space="10px" labelSize="20px" label="团友订单"></u-icon>
			</view>
		</view>
		<u-button type="primary" size="large" text="退出登录"></u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isLogin: true
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.header {
	width: 100vw;
	background-color: #fff;
	margin-bottom: 10px;
	padding: 15px 0 15px 15px;
	.top {
		display: flex;
		.middle {
			margin-left: 20px;
			.name {
				font-size: 20px;
				margin-bottom: 10px;
			}
			.tel {
				font-size: 16px;
			}
		}
		.right {
			margin-left: 100px;
		}
	}
	.foot {
		display: flex;
		justify-content: space-between;
		padding: 0 15px;
		margin-top: 10px;
		font-size: 17px;
		.foot_left{
			text-align: center;
		}
	}
}
.main {
	background-color: #fff;
	padding: 15px 0 15px 15px;
	margin-bottom: 10px;
}
</style>
