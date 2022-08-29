<template>
	<view class="main">
		<view class="mainForm">
			<u--form :model="form" ref="uForm ">
				<u-form-item label="姓名" prop="name" borderBottom><u-input v-model="form.name" border="none" placeholder="请输入真实姓名" /></u-form-item>
				<u-form-item label="电话" prop="tel" borderBottom><u-input v-model="form.phone" border="none" placeholder="请输入电话" /></u-form-item>
				<u-form-item label="地址" prop="tel" borderBottom><u-input v-model="form.adress" border="none" placeholder="请输入地址" /></u-form-item>
				<u-form-item label="详细地址" prop="tel" borderBottom><u-input v-model="form.moreAdress" border="none" placeholder="请输入详细地址" /></u-form-item>
			</u--form>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				phone: '',
				adress: '',
				moreAdress: '',
			},
			adressInfo: '',
			columns: [['中国', '美国'], ['深圳', '厦门', '上海', '拉萨']],
			columnData: [['深圳', '厦门', '上海', '拉萨'], ['得州', '华盛顿', '纽约', '阿拉斯加']]
		};
	},
	onLoad: function(data) {
		const { id } = data;
		uni.request({
			method: 'GET',
			url: `http://localhost:3000/getoneAdress?id=${id}`,
			success: res => {
				const {
					data: { data }
				} = res;
				this.form = data[0];
			}
		});
	},
	methods: {
		// 地址多列联动
		changeHandler(e) {
			const {
				columnIndex,
				value,
				values, // values为当前变化列的数组内容
				index,
				// 微信小程序无法将picker实例传出来，只能通过ref操作
				picker = this.$refs.uPicker
			} = e;
			// 当第一列值发生变化时，变化第二列(后一列)对应的选项
			if (columnIndex === 0) {
				// picker为选择器this实例，变化第二列对应的选项
				picker.setColumnValues(1, this.columnData[index]);
			}
		},
		// 回调参数为包含columnIndex、value、values
		confirm(e) {
			console.log(e.value);
			this.show = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.main {
	background-color: #fff;
	width: 100%;
	height: 100vh;
}
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
</style>
