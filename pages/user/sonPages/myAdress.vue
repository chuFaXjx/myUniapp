<template>
	<view class="main">
		<u-swipe-action>
			<u-swipe-action-item :options="options2">
				<view class="dizhi" v-for="(item, idx) in adressList" :key="idx">
					<text class="">{{ item.name }}</text>
					<text class="">{{ item.phone }}</text>
					<text class="">{{ item.adress }}{{ item.moreAdress }}</text>
				</view>
			</u-swipe-action-item>
		</u-swipe-action>
		<u-button class="add" type="primary" size="large" @click="handleClcik">新增地址</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			adressList: [],
			options2: [
				{
					text: '编辑',
					style: {
						backgroundColor: '#3c9cff'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}
			]
		};
	},
	onShow: function() {
		uni.request({
			method: 'GET',
			url: 'http://localhost:3000/getAdress',
			success: res => {
				const {
					data: { data }
				} = res;
				console.log(data);
				this.adressList = data;
			}
		});
	},
	methods: {
		// 点击新增地址跳转页面
		handleClcik() {
			uni.$u.route('/pages/user/sonPages/addNewAdress');
		}
	}
};
</script>

<style lang="scss" scoped>
.main {
	width: 100vw;
	/deep/.u-button--primary.data-v-2bf0e569 {
		position: fixed !important;
		bottom: 20px !important;
	}
	.dizhi {
		width: 100%;
		height: 60rpx;
	}
}
</style>
