<template>
	<view style="background-color: white; height: calc(100vh - 44px)">
		<u-picker :show="show" :columns="columns" @confirm="confirm" @cancel="cancel"></u-picker>
		<view class="fontStyle" @click="show = true">{{ font }}</view>
		<view class="centFont">
			<text>{{ font }}</text>
		</view>

		<view class="BtnFlex"><button class="cu-btn round LoginBtn" @click="handleLogin">微信授权登录</button></view>

		<view class="User">
			<u-checkbox-group>
				<u-checkbox :checked="isLogin" @change="userChange"></u-checkbox>
				<navigator url="/pages/wxlogin/second/userAgreement"><text>用户协议</text></navigator>
			</u-checkbox-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			columns: [['医生集团', '稼禾名医在线', '司空见惯', '求实名医在线', '远志名医在线', '百薇名医在线', '枫荷名医在线', '吴氏免疫针灸']],
			font: '医生集团',
			isLogin: true,
			Code: ''
		};
	},
	methods: {
		confirm(e) {
			console.log(e);
			this.show = false;
			this.font = e.value[0];
		},
		cancel() {
			this.show = false;
		},
		userChange() {
			this.isLogin = !this.isLogin;
		},
		handleLogin() {
			uni.getUserProfile({
				desc: '获取您的名称、头像、地区',
				success: userInfo => {
					const { nickName, avatarUrl } = userInfo.userInfo;
					console.log(userInfo.userInfo);
					// 用户信息存储本地
					uni.setStorageSync('USER_INFO', JSON.stringify(userInfo.userInfo));
					this.$store.commit('setUserInfo', userInfo.userInfo);
					uni.login({
						success: r => {
							uni.request({
								url: 'http://localhost:3000/wxlogin',
								method: 'GET',
								data: {
									code: r.code
								},
								success: res => {
									console.log(res);
									// 将token存储到本地
									uni.setStorageSync('WX_TOKEN_KEY', res.data.data.session_key);
									// 将token存储到vuex中
									this.$store.commit('setToken', res.data.data.session_key);
									uni.switchTab({
										url: '/pages/home/home'
									});
								},
								fail: err => {
									console.log(err);
								}
							});
						},
						fail: error => {
							console.log(error);
						}
					});
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.fontStyle {
	font-size: 16px;
	color: orange;
	cursor: pointer;
}

.centFont {
	font-size: 30px;
	color: orange;
	margin-top: 30%;
	text-align: center;
}

.LoginBtn {
	width: 200px;
	margin-top: 30%;
	background-color: #85ffbd;
	background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
}

.text {
	font-size: 12px;
	color: #666;
	margin-top: 5px;
}

.BtnFlex {
	display: flex;
	justify-content: center;
}

.User {
	margin-top: 40%;
	display: flex;
	font-size: 15px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
}
</style>
