<template>
	<view>
		<view class="total">
			<view class="inp">
				<view class="length">
					<u--input placeholder="请输入关键字" border="surround" v-model="value" @change="change"></u--input>
				</view>
				<view class="btn">
					<u-button type="warning" text="搜索"></u-button>
				</view>
			</view>
			<view class="tabs">
				<u-tabs :list="list1" @click="click" class="tab" lineWidth="100" :scrollable="flag" :activeStyle="{
						color: '#3399FF',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}" :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}"></u-tabs>
			</view>
		</view>
<!-- -->
		<view class="text" v-show="isShow" v-for='item in list' :key="item.id">
			<navigator :url="`/pages${item.url}${item.url}?desc=${item.desc}&timedata=${item.timedata}`"
				hover-class="navigator-hover">
				<text class="title">{{item.desc}}</text>
				<view class="detail"><text>导语：2017年5月底，国家卫计委批准顺-15-24碳溪酸（神经酸）作为新食品原料，该原料有助于改.....</text></view>
				<view><text class="time">{{item.timedata}}</text></view>
				<view class="h"></view>
			</navigator>
		</view>
		
		<view class="text" v-show="isShow2"  v-for='item in list2' :key="item.id">
			<navigator :url="`/pages${item.url}${item.url}?text=${item.text}&timedet=${item.timedet}`"
				hover-class="navigator-hover">
				<text class="title">{{item.text}}</text>
				<view class="detail"><text>导语：2017年5月底，国家卫计委批准顺-15-24碳溪酸（神经酸）作为新食品原料，该原料有助于改.....</text></view>
				<view class="time"><text>{{item.timedet}}</text></view>
				<view class="h"></view>
			</navigator>
			
		</view>
		<view class="text" v-show="isShow3"  v-for='item in list3' :key="item.id">
			
			<navigator :url="`/pages${item.url}${item.url}?text=${item.text}&timedet=${item.timedet}&desc=${item.desc}`"
				hover-class="navigator-hover">
				<text class="title">{{item.text}}</text>
				<view class="detail"><text>导语：2017年5月底，国家卫计委批准顺-15-24碳溪酸（神经酸）作为新食品原料，该原料有助于改.....</text></view>
				<view class="time"><text>{{item.timedet}}</text></view>
				<view class="h"></view>
			</navigator>
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
				isShow3: false,
				list: [],
				list2:[],
				list3:[],
				list1: [{
						name: '科普视频'
					},
					{
						name: '放松训练'
					},
					{
						name: '学术进展'
					},

				]
			};
		},
		created() {
			uni.request({
				/*#ifdef H5*/
				url:'/api/getkepu',
				/*#endif*/
				/*#ifndef H5*/
				url: 'http://localhost:3000/getkepu',
				/*#endif*/
				success: res => {
					res.data.data.forEach((item, index) => {
						this.list.push(item);
						
					});
				}
			});
			uni.request({
				/*#ifdef H5*/
				url: '/api/getrelax',
				/*#endif*/
				/*#ifndef H5*/
				url: 'http://localhost:3000/getrelax',
				/*#endif*/
				success: res => {
					res.data.data.forEach((item, index) => {
						this.list2.push(item);
						
					});
				}
			});
			uni.request({
				/*#ifdef H5*/
				url: '/api/getxs',
				/*#endif*/
				/*#ifndef H5*/
				url: 'http://localhost:3000/getxs',
				/*#endif*/
				success: res => {
					res.data.data.forEach((item,index) => {
						this.list3.push(item);
						
					});
				}
			});
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			click(item) {
				console.log('item', item);
				if (item.index === 0) {
					this.isShow = true;
					this.isShow2 = false;
					this.isShow3 = false;

				} else if (item.index === 1) {
					this.isShow = false;
					this.isShow2 = true;
					this.isShow3 = false;
				} else {
					this.isShow = false;
					this.isShow2 = false;
					this.isShow3 = true;
				}
			},
			// handleClick(){
			// 	uni.navigateTo({
			// 		url: 'test?id=1&name=uniapp'
			// 	});
			// }
		}
	};
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

		font-size: 20px;
		padding-left: 20px;
		margin-bottom: 10px;
	}

	.text {
		margin-top: 8px;
		background-color: #fff;
	}

	.h {
		border-bottom: 1px solid #abadb3;
		width: 100%;
		margin: 20px auto;
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
