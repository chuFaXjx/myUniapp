<template>
	<view>
		<view class="total">
			<view class="inp">
				<view class="length"><u--input placeholder="请输入关键字" border="surround" v-model="value" @change="change"></u--input></view>
				<view class="btn"><u-button type="warning" text="搜索"></u-button></view>
			</view>
			<view class="tabs">
				<u-tabs
					:list="list1"
					@click="click"
					class="tab"
					lineWidth="100"
					:scrollable="flag"
					:activeStyle="{
						color: '#3399FF',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}"
					:inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}"
				></u-tabs>
			</view>
		</view>
		<navigator url="/pages/luntanmain/luntanmain" hover-class="navigator-hover">
			<view class="text" v-show="isShow" v-for="item in list" :key='item.id'>
				<view class='left'>
					<view class="imgbox">
						<image :src='item.bodyimg' alt=''></image>
					</view>
				</view>
				<view class='right'>
					<text class="title">{{item.title}}</text>
					<view class="detail"><text>{{item.text}}</text></view>
				</view>
			
			</view>
			
		</navigator>
		
		<view class="text" v-show="isShow2">
			<text class="title">神经酸文献资料</text>
			<view class="detail"><text>2022-1-22</text></view>
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
			list:[],
			list1: [
				{
					name: '医生论坛'
				},
				{
					name: '康友圈'
				}
			]
		};
	},
	created(){
		uni.request({
			/*#ifdef H5*/
			url: '/api/getkangdetails',
			/*#endif*/
			/*#ifndef H5*/
			url: 'http://localhost:3000/getkangdetails',
			/*#endif*/
			success: res => {
				res.data.data.forEach((item, index) => {
					this.list.push(item);
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
			if (item.index === 1) {
				this.isShow = false;
				this.isShow2 = true;
			} else {
				this.isShow = true;
				this.isShow2 = false;
			}
		}
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
	width: 50%;
	font-size: 20px;
	padding-left: 20px;
	margin-bottom: 10px;
}

.text {
	margin-top: 8px;
	background-color: #fff;
	display: flex;
	justify-content: space-around;
}
.left{
	margin-left: 10px;
	margin-right: 15px;
}
.imgbox{
	width:100px;
	height: 100px;
}
image{
	width:100%;
	height: 100%;
}
.right{
	margin-left: 5px;
}
.h {
	border-bottom: 1px solid #abadb3;
	width: 100%;
	margin: 20px auto;
}

.title {
	font-size: 22px;
	color: #000;
	padding-left: 10px;
	font-weight: 700;
}

.detail {
	font-size: 16px;
	padding-left: 10px;
}

.time {
	color: #999;
	font-size: 16px;
	padding-left: 10px;
}
</style>
