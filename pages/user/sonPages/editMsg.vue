<template>
	<view class="">
		<view class="mainForm">
			<u--form :model="form" ref="uForm">
				<u-form-item labelWidth="80px" label="姓名" prop="name" borderBottom><u-input v-model="form.realName" border="none" placeholder="请输入您的姓名" /></u-form-item>
				<u-form-item labelWidth="80px" label="联系方式" prop="name" borderBottom>
					<u-input v-model="form.phone" border="none" placeholder="请输入您的联系方式" />
				</u-form-item>
				<u-form-item labelWidth="80px" label="就职单位" prop="name" borderBottom>
					<u-input v-model="form.company" border="none" placeholder="请输入您的就职单位" />
				</u-form-item>
				<u-form-item labelWidth="80px" label="任职职务" prop="name" borderBottom><u-input v-model="form.position" border="none" placeholder="请输入您的单位职务" /></u-form-item>
				<u-form-item labelWidth="80px" label="其他" prop="name" borderBottom><u-input v-model="form.other" border="none" placeholder="其他" /></u-form-item>
				<u-form-item borderBottom="false" labelWidth="70px" label="简介" prop="name"><u-textarea v-model="form.description" placeholder="请输入内容" /></u-form-item>
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
				id:"1",
				realName: '',
				company: '',
				phone: '',
				position: '',
				other: '',
				description: ''
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
	onLoad: function() {
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
				this.form = data[0];
			}
		});
	},
	methods: {
		submit() {
			uni.request({
				method: 'POST',
				url: 'http://localhost:3000/BusinessCard',
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
