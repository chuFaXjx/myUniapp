<template>
	<view class="">
		<view class="header" v-if="token && token !== ''">
			<view class="top">
				<view class="left"><u-avatar :src="avatarUrl" size="55"></u-avatar></view>
				<view class="middle">
					<view class="name">{{ useInfo.realName }}</view>
					<text class="tel">{{ useInfo.phone }}</text>
					<text class="tel1">职位：{{ useInfo.position }}</text>
				</view>
				<view class="right"><u-button @click="editMsg" shape="circle" size="mini" type="primary" :plain="true" text="编辑资料"></u-button></view>
			</view>
			<view class="foot">
				<view class="foot_left">
					<navigator url="/pages/user/sonPages/mydoctor">
						<view>0</view>
						<view>我的医生</view>
					</navigator>
				</view>
				<view class="foot_left">
					<navigator url="/pages/user/sonPages/joinKangyouhui">
						<view>0</view>
						<view>我的圈子</view>
					</navigator>
				</view>
				<view class="foot_left">
					<navigator url="/pages/user/sonPages/jifen">
						<view>0.00</view>
						<view>积分兑换</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="header" v-else>
			<navigator url="/pages/wxlogin/wxlogin"><u-icon name="account-fill" size="50" space="10" labelSize="20" label="登录/注册"></u-icon></navigator>
		</view>
		<view class="main">
			<u-toast ref="uToast"></u-toast>
			<u-icon @click="goChuFang" name="file-text" size="50rpx" space="30rpx" labelSize="50rpx" label="我的处方"></u-icon>
			<u-divider></u-divider>
			<u-icon @click="goDiZhi" name="map" size="50rpx" space="30rpx" labelSize="50rpx" label="地址管理"></u-icon>
			<u-divider></u-divider>
			<u-icon @click="goJianKang" name="file-text" size="50rpx" space="30rpx" labelSize="50rpx" label="健康档案"></u-icon>
			<u-divider></u-divider>
			<u-icon @click="goMyCard" name="order" size="50rpx" space="30rpx" labelSize="50rpx" label="我的名片"></u-icon>
			<u-divider></u-divider>
			<u-icon @click="goZhuanJia" name="account" size="50rpx" space="30rpx" labelSize="50rpx" label="我的专家"></u-icon>
		</view>
		<u-button v-if="token && token !== ''" @click="logOut" type="primary" size="large" text="退出登录"></u-button>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			isLogin: false,
			token: '',
			useInfo: ''
		};
	},
	onShow: function() {
		this.token = uni.getStorageSync('WX_TOKEN_KEY');
		// this.nickName = this.$store.state.userInfo.nickName;
		// this.realName = this.$store.state.userInfo.realName;
		// console.log(this.nickName, this.realName);
		// console.log(this.$store.state.userInfo);
		uni.request({
			method: 'GET',
			url: 'http://localhost:3000/getBusinessCard',
			data: {
				id: '1'
			},
			success: res => {
				const {
					data: { data }
				} = res;
				this.useInfo = data[0];
				console.log(this.useInfo);
			}
		});
	},
	computed: {
		// nickName() {
		// 	return JSON.parse(uni.getStorageSync('USER_INFO')).nickName;
		// },
		avatarUrl() {
			return JSON.parse(uni.getStorageSync('USER_INFO')).avatarUrl;
		}
	},
	methods: {
		//  登录校验，未登录不进行跳转
		goChuFang() {
			if (this.token && this.token !== '') {
				uni.navigateTo({
					url: '/pages/user/sonPages/myChuFang'
				});
			} else {
				this.$refs.uToast.show({
					position: 'top',
					type: 'error',
					icon: false,
					title: '失败主题',
					message: '请登录后再试',
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
				});
			}
		},
		goDiZhi() {
			if (this.token && this.token !== '') {
				uni.navigateTo({
					url: '/pages/user/sonPages/myAdress'
				});
			} else {
				this.$refs.uToast.show({
					position: 'top',
					type: 'error',
					icon: false,
					title: '失败主题',
					message: '请登录后再试',
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
				});
			}
		},
		goJianKang() {
			if (this.token && this.token !== '') {
				uni.navigateTo({
					url: '/pages/user/sonPages/jiankanglist'
				});
			} else {
				this.$refs.uToast.show({
					position: 'top',
					type: 'error',
					icon: false,
					title: '失败主题',
					message: '请登录后再试',
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
				});
			}
		},
		goMyCard() {
			if (this.token && this.token !== '') {
				uni.navigateTo({
					url: '/pages/user/sonPages/myChuFang'
				});
			} else {
				this.$refs.uToast.show({
					position: 'top',
					type: 'error',
					icon: false,
					title: '失败主题',
					message: '请登录后再试',
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
				});
			}
		},
		goZhuanJia() {
			if (this.token && this.token !== '') {
				uni.navigateTo({
					url: '/pages/user/sonPages/myChuFang'
				});
			} else {
				this.$refs.uToast.show({
					position: 'top',
					type: 'error',
					icon: false,
					title: '失败主题',
					message: '请登录后再试',
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
				});
			}
		},
		// 退出登录
		logOut() {
			// 清除本地存储的token
			uni.removeStorageSync('WX_TOKEN_KEY');
			// 清除vuex中的token
			this.$store.commit('setToken', '');
			this.token = '';
			// 提示退出登录成功
			this.$refs.uToast.show({
				position: 'top',
				type: 'success',
				icon: false,
				title: '成功主题',
				message: '已退出登录',
				iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
			});
			// 刷新页面
			uni.switchTab({
				url: '/pages/user/user'
			});
		},
		// 编辑资料
		editMsg() {
			uni.navigateTo({
				url: '/pages/user/sonPages/editMsg'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	width: 100vw;
	background-color: #fff;
	margin-bottom: 10rpx * 2;
	padding: 15rpx 0 15rpx 15rpx;
	.top {
		display: flex;
		.middle {
			margin-left: 20rpx * 2;
			.name {
				font-size: 20rpx * 2;
				margin-bottom: 10rpx * 2;
			}
			.tel {
				font-size: 16rpx * 2;
				width: 60rpx;
			}
			.tel1 {
				margin-left: 10rpx;
			}
		}
		.right {
			margin-left: 100rpx;
		}
	}
	.foot {
		display: flex;
		justify-content: space-between;
		padding: 0 15rpx * 2;
		margin-top: 10rpx * 2;
		font-size: 17rpx * 2;
		.foot_left {
			text-align: center;
		}
	}
}
.main {
	background-color: #fff;
	padding: 15rpx * 2 0 15rpx * 2 15rpx * 2;
	margin-bottom: 10rpx * 2;
}
</style>
