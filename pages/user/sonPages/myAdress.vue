<template>
	<view class="main">
		<u-toast ref="uToast"></u-toast>
		<u-swipe-action>
			<u-swipe-action-item
				v-for="(item, idx) in adressList"
				:key="item.id"
				@click="
					name => {
						edit(name, item.id);
					}
				"
				:options="options2"
			>
				<view class="dizhi">
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
				this.adressList = data;
			}
		});
	},
	methods: {
		// 点击新增地址跳转页面
		handleClcik() {
			uni.$u.route('/pages/user/sonPages/addNewAdress');
		},
		edit(name, id) {
			console.log(name, id);
			// 编辑
			if (name.index == 0) {
				uni.navigateTo({
					url:`/pages/user/sonPages/editAdress?id=${id}`,
				})
			} else {
				uni.request({
					method: 'DELETE',
					url: `http://localhost:3000/delAdress?id=${id}`,
					success: res => {
						this.$refs.uToast.show({
							position: 'top',
							type: 'success',
							title: '成功主题',
							message: '删除成功',
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
						});
						uni.request({
							method: 'GET',
							url: 'http://localhost:3000/getAdress',
							success: res => {
								const {
									data: { data }
								} = res;
								this.adressList = data;
							}
						});
					}
				});
			}
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
		height: 120rpx;
		font-size: 35rpx;
		line-height: 120rpx;
	}
}
</style>
