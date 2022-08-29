<template>
	<view>
		<view class='total' v-for='item in list' :key='item.id'>
			<view class='left'>
				<view class='imgbox'>
					<image :src='item.imgUrl' alt=''></image>
				</view>
			</view>
			<view class='right'>
				<view>
					{{item.drugName}}
				</view>
				<view>服务周期{{item.cycle}}</view>
				<view>{{item.effect}}</view>
				<view>￥{{item.price}}元</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		created(){
			uni.request({
				/*#ifdef H5*/
				url: '/api/getprescriptionAll',
				/*#endif*/
				/*#ifndef H5*/
				url: 'http://localhost:3000/getprescriptionAll',
				/*#endif*/
				success: res => {
					res.data.data.forEach((item, index) => {
						this.list.push(item);
						
					});
				}
			});
		},
		
		methods: {
			
		}
	}
</script>

<style  lang="scss">
.total{
	display:flex;
	background:#fff;
	justify-content: space-between;
	
}
.left{
	margin-left:10px;
	flex:1;
	margin-bottom:20px;
}
.right{
	margin-left:10px;
	flex:3;
}
.imgbox {
	width: 80px;
	height: 80px;
	margin-left: 10px;
}

.imgbox image {
	margin-top: 10px;
	max-width: 100%;
	width: 80px;
	height: 80px;
	position: relative;
	z-index: 0;
}
</style>
