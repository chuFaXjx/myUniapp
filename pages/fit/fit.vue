<template>
	<view>
		<view class='total'>
			<view class="inp">
				<view class='length'>
					<u--input placeholder="请输入关键字" border="surround" v-model="value" @change="change"></u--input>
				</view>
				<view class='btn'>
					<u-button type="warning" text="搜索"></u-button>
				</view>
			</view>
			<view class='tabs'>
				<u-tabs :list="list1" @click="click" class='tab' lineWidth="100" :scrollable='flag' :activeStyle="{
            color: '#3399FF',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }" :inactiveStyle="{
		            color: '#606266',
		            transform: 'scale(1)'
		        }"></u-tabs>
			</view>
			</view>
			<view class='text' v-show="isShow">
				<text class='title'>
			 	新食品原料解读系利：改善记忆新原料--
				</text>
				<view class='detail'>
					<text>
						导语：2017年5月底，国家卫计委批准顺-15-24碳溪酸（神经酸）作为新食品原料，该原料有助于改.....
					</text>
				</view>
				<view>
					<text class="time">2021-12-20</text>
				</view>
				<view class='h'></view>
				<text class='title'>
				英才闹了简介--
				</text>
				<view class='detail'>
					<text>
					英才脑力顺15+24碳酸（神经酸）是由青岛国海生物制药有限公司生产的神经营养制，采用2017年.....
					</text>
				</view>
				<view>
					<text class="time">2021-12-20</text>
				</view>

			</view>
			<view class='text' v-show="isShow2">
				<text class='title'>
					神经酸文献资料
				</text>
				<view class='detail'>
					<text>
						2022-1-22
					</text>
				</view>

			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				flag: false,
				isShow: true,
				isShow2: false,
				list1: [{
					name: '产品简介',
				}, {
					name: '文献资料',
				}, ]
			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			click(item) {
				console.log('item', item);
				if (item.index === 1) {
					this.isShow = false
					this.isShow2 = true
				} else {
					this.isShow = true;
					this.isShow2 = false;
				}
			}
		}
	}
</script>

<style lang="scss">
	.total {
		background-color: #fff;
	}

	.inp {
		display: flex;
	}

	.length {
		width: 75%;
		margin-left: 10px;
	}

	.btn {
		width: 50px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin-left: 10px;
		color: #fff;
		background-color: orange;
		font-size: 18px;
	}

	.tabs {
		display: flex;
		justify-content: space-around;
	}

	.tab {
		width: 40%;
		font-size: 20px;
		padding-left: 20px;
		margin-bottom: 10px;
	}

	.text {
		margin-top: 8px;
		background-color: #fff;
	}
	.h{
		 border-bottom: 1px solid #ABADB3;
		 width: 100%;
		 margin:20px auto;
	}

	.title {
		font-size: 18px;
		color: #000;
		padding-left: 10px;
	}

	.detail {
		color: #999;
		font-size: 16px;
		padding-left: 10px;
	}

	.time {
		color: #999;
		font-size: 16px;
		padding-left: 10px;
	}
</style>
