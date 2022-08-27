<template>
	<view class="main">
		<view class="name">
			<text class="xingming">姓名:</text>
			<u--input class="inp" placeholder="请输入姓名" v-model="value" @change="change"></u--input>
		</view>
		<view class="name">
			<text class="xingming">手机号：</text>
			<u--input placeholder="请输入内容" v-model="value" @change="change"></u--input>
		</view>
		<view class="name">
			<text class="xingming">地区：</text>
			<u-cell-group><u-cell icon="map" @click="() => (show = true)" :title="adress" arrow-direction="right"></u-cell></u-cell-group>
		</view>
		<view class="name"><u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler" @cancel="() => (show = false)"></u-picker></view>
		<view class="name">
			<text class="xingming">详细地址：</text>
			<u--input placeholder="请输入详细地址" v-model="value" @change="change"></u--input>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			show: false,
			adress: '',
			columns: [['中国', '美国'], ['深圳', '厦门', '上海', '拉萨']],
			columnData: [['深圳', '厦门', '上海', '拉萨'], ['得州', '华盛顿', '纽约', '阿拉斯加']]
		};
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
.name {
	display: flex;
	justify-content: space-between;

	line-height: 40px;
	font-size: 18px;
	padding: 5px 5px;
	.xingming {
		width: 90px;
		text-align: center;
	}
}
</style>
