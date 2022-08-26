<template>
	<view class="">
		<view class="mainForm">
			<u--form :model="form" ref="uForm">
				<u-form-item labelWidth="80px" label="姓名" prop="name" borderBottom><u-input v-model="form.realName" border="none" placeholder="请输入您的姓名" /></u-form-item>
				<u-form-item labelWidth="80px" label="联系方式" prop="name" borderBottom>
					<u-input v-model="form.phone" border="none" placeholder="请输入您的联系方式" />
				</u-form-item>
				<u-form-item labelWidth="80px" label="出生年月日" prop="name" borderBottom>
					<u-input v-model="form.birth" border="none" placeholder="请输入您的出生年月日" />
				</u-form-item>
				<u-form-item labelWidth="80px" label="性别" prop="name" borderBottom><u-input v-model="form.sex" border="none" placeholder="请输入您的性别" /></u-form-item>
				<u-form-item labelWidth="80px" label="地址" prop="name" borderBottom><u-input v-model="form.address" border="none" placeholder="请输入您的地址" /></u-form-item>
				<!-- <u-form-item borderBottom="false" labelWidth="70px" label="简介" prop="name"><u-textarea v-model="form.jianjie" placeholder="请输入内容" /></u-form-item> -->
			</u--form>
			<u-button class="submit" type="primary" text="提交" @click="submit"></u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				realName: '',
				sex: '',
				phone: '',
				birth: '',
				address: ''
			},
			rules: {
				name: {
					required: true,
					message: '内容不能为空',
					trigger: ['blur', 'change']
				}
			}
		};
	},
	methods: {
		submit() {
			uni.request({
				method: 'POST',
				url: 'http://localhost:3000/addBasicInformation',
				data: this.form,
				success: res => {
					// 将用户的编辑的资料存储到本地
					uni.setStorageSync('USER_INFO_NEW', JSON.stringify(this.form));
					uni.switchTab({
						url: `/pages/user/user`
					});
				},
				fail(err) {
					console.log(err);
				}
			});
		}
	}
};
</script>

<style lang="scss">
.mainForm {
	background-color: #fff;
	padding: 0 15rpx;
	width: 100%;
	height: 70vh;
}
.u-button--primary.data-v-2bf0e569 {
	margin-top: 50rpx !important;
}
</style>
