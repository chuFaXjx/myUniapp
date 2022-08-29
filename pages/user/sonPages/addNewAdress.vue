<template>
	<view class="main">
		<view class="name">
			<text class="xingming">地区：</text>
			<u-cell-group><u-cell icon="map" @click="() => (show = true)" :title="adress" arrow-direction="right"></u-cell></u-cell-group>
		</view>
		<view class="name">
			<u-picker
				defaultIndex="[4]"
				:loading="loading"
				keyName="region_name"
				:show="show"
				ref="uPicker"
				:columns="columns"
				@confirm="confirm"
				@change="changeHandler"
				@cancel="() => (show = false)"
			></u-picker>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			loading: false,
			adress: '哈哈哈哈哈',
			sheng: [],
			shi: [],
			xian: [],
			columns: [],
			columnData: [['深圳', '厦门', '上海', '拉萨'], ['得州', '华盛顿', '纽约', '阿拉斯加']]
		};
	},
	onLoad: function() {
		uni.request({
			method: 'GET',
			url: 'http://localhost:3000/getSheng',
			success: res => {
				const {
					data: { data }
				} = res;
				data.forEach(item => {
					this.sheng.push(item);
				});
				this.defaultIndex = this.sheng;
				this.columns.push(this.sheng);
				// this.adressList = data;
			},
			fail(err) {
				console.log(err);
			}
		});
		uni.request({
			method: 'GET',
			url: 'http://localhost:3000/getShengShi?id=1000003',
			success: res => {
				const {
					data: { data }
				} = res;
				data.forEach(item => {
					this.shi.push(item);
				});
				this.columns.push(this.shi);
				// this.adressList = data;
			},
			fail(err) {
				console.log(err);
			}
		});
		uni.request({
			method: 'GET',
			url: 'http://localhost:3000/getShengShiXian?id=1000245',
			success: res => {
				const {
					data: { data }
				} = res;
				console.log(data);
				data.forEach(item => {
					this.xian.push(item);
				});
				this.columns.push(this.xian);
				console.log(this.columns);
				// this.adressList = data;
			},
			fail(err) {
				console.log(err);
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
			console.log('！！！', e);
			if (columnIndex === 0) {
				this.loading = true;
				// 模拟网络请求
				uni.request({
					method: 'GET',
					url: `http://localhost:3000/getShengShi?id=${e.region_id}`,
					success: res => {
						const {
							data: { data }
						} = res;
						data.forEach(item => {
							this.shi.push(item);
						});
						this.columns[1] = this.shi;
						this.loading = false;
						// picker.setColumnValues(1, this.columns[1]);
						// this.columns[2]=this.shi
					},
					fail(err) {
						console.log(err);
					}
				});
			}
		},
		// 回调参数为包含columnIndex、value、values
		confirm(e) {
			console.log(111);
			console.log(e.region_id);
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
