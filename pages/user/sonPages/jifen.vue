<template>
	<view>
		<view class="mainForm">
			<u--form :model="form" ref="uForm ">
				<u-form-item label="姓名" prop="name" borderBottom><u-input v-model="form.realName" border="none" placeholder="请输入真实姓名" /></u-form-item>
				<u-form-item label="电话" prop="tel" borderBottom><u-input v-model="form.phone" border="none" placeholder="请输入电话" /></u-form-item>
				<u-form-item label="微信号" prop="tel" borderBottom><u-input v-model="form.wxUser" border="none" placeholder="请输入微信号" /></u-form-item>
				<u-form-item label="支付宝号" prop="tel" borderBottom><u-input v-model="form.alipayUser" border="none" placeholder="请输入支付宝号" /></u-form-item>
				<u-form-item label="申请积分" prop="tel" borderBottom><u-input v-model="form.points" border="none" placeholder="请输入申请积分" /></u-form-item>
				<u-form-item label="备注" prop="tel" borderBottom><u-input v-model="form.description" border="none" placeholder="备注" /></u-form-item>
			</u--form>
		</view>
		<view class="agreement">
			<u-radio-group v-model="value"><u-radio shape="square" label="兑换协议"></u-radio></u-radio-group>
			<u-button type="primary" text="全部兑换" class="allpoints"></u-button>
			<u-button @click="submit" type="primary" text="提交申请" class="submitBtn"></u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 0,
			form: {
				realName: '',
				wxUser: '',
				phone: '',
				alipayUser: '',
				points: '',
				description: ''
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}
				]
			}
		};
	},
	methods: {
		submit() {
			uni.request({
				method: 'POST',
				url: 'http://localhost:3000/uploadExchange',
				data: this.form,
				success: res => {
					uni.switchTab({
						url: `/pages/user/user`
					});
				},
				fail(err) {
					console.log(err);
				},
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.mainForm {
	background-color: #fff;
	padding: 0 10px;
}

/deep/ .u-form-item__body__left__content__label {
	font-size: 12px;
	width: 100px;
}

/deep/ .u-input {
	margin-left: 40px;
	font-size: 12px;
}

.agreement {
	padding: 10px 10px;
	margin: 10px 0;

	.allpoints {
		margin: 10px 0;
	}

	.u-button--primary.data-v-2bf0e569 {
		margin-top: 30rpx !important;
	}
}
</style>
