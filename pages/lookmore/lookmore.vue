<template>
	<view class='tbody'>
		<view class="city">城市：杭州市</view>
		<view class='lay'>
			<view class='imgbox'>
				<img src='../../static/city1.png' alt=''>
			</view>
			<view class='right'>
				<view class='title'>浙江省中医院</view>
				<view class="font">杭州市上城区邮电路54号</view>
				<view>
					<u-button type="plain" :plain="true" text="三级甲等" size="mini" class='btn'></u-button>
				</view>
				<navigator url="/pages/hdetail/hdetail" hover-class="navigator-hover">
				<view class='det'>详情</view>
				</navigator>
			</view>
		</view>
		<view class="border">
		</view>
	
		<view class='lay'>
			<view class='imgbox'>
				<img src='../../static/city2.png' alt=''>
			</view>
			<view class='right'>
				<view class='title'>杭州市第一人民医院</view>
				<view class="font">杭州市浣纱路261号</view>
				<view>
					<u-button type="plain" :plain="true" text="三级甲等" size="mini" class='btn'></u-button>
				</view>
				<view class='det'>详情</view>
			</view>
		</view>
		<view class="border">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.tbody{
	background-color: #fff;
}
.city{
	font-size: 18px;
	margin-left: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
}
.lay{
	display: flex;
	justify-content: left;
}
.imgbox{
	width: 100px;
	height: 100px;
	margin-left: 10px;
}
.imgbox img{
	width: 100%;
	height: 100%;
}
.right{
	flex-direction: column;
	margin-left: 10px;
	text-align: left;
}
.title{
	font-size: 20px;
	margin-left: 8px;
}
.font{
	font-size: 16px;
	margin-left: 8px;
}
.det{
	font-size:16px;
	color:#FF8515;
	margin-left: 8px;
}
.btn{
	width: 100px;
	height: 30px;
	border:1px solid #999;
	margin-top: 8px;
	margin-left: 8px;
}
.border{
		border-bottom: 1px solid #999;
		width: 100%;
		margin-top: 8px;
	}
</style>
