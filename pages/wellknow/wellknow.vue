<template>
	<view>
		<!-- https://www.bilibili.com/video/av713793703/?t=17.0 -->
		<video id="myVideo" src="https://www.bilibili.com/video/av713793703/?t=17.0 " @error="videoErrorCallback"
			show-center-play-btn show-loading controls>
		</video>
		<view class='animaton'>
			<view>
				<text class="font">科普动画 我老年痴呆了吗》》</text>
			</view>
			<view class="time">
				<text class='time2'>2022-03-28</text>
				<view class='btn'>
					<u-button type="primary" text="购买同款商品"></u-button>
				</view>
			</view>
		</view>
		<view class='imgbox'>
			<view>
				<img src='../../static/img.jpg' alt=''>
			</view>
			<view>
				<img src='../../static/img1.jpg' alt=''>
			</view>
			<view>
				<img src='../../static/img2.jpg' alt=''>
			</view>
		</view>
		<view>
			<navigator url="/pages/shop/shop" hover-class="navigator-hover">
			<u-link href="https://uviewui.com/" text="英才瑙乐 (3g *15袋)" color="#FF8515" line-color="#FF8515"></u-link>
			</navigator>
		</view>
		<view class='foo'>
			<view class="leftsection">
				<view class='phoneimg'>
					<img src='../../static/conduct.png' alt=''>
				</view>
				<view>
					<text class='zixun'>电话咨询</text>
				</view>
			</view>
			<view class='rightinp'>
				 <u-button  text="健康聊天室" color='#FF8515'></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
			};
		},
		// onReady: function(res) {
		//         // #ifndef MP-ALIPAY
		//         this.videoContext = uni.createVideoContext('myVideo')
		//         // #endif
		//     },
		methods: {
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
		}
	}
</script>

<style lang="scss">
	.animaton {
		background-color: #fff;
	}

	.font {
		color: #000;
		font-size: 22px;
		margin-left: 10px;
		margin-bottom: 10px;
	}

	.time {
		color: #333;
		font-size: 14px;
		display: flex;
		margin-left: 10px;
		margin-top: 15px;
	}

	.btn {
		margin-left: 15px;
	}

	.time2 {
		margin-top: 15px;
	}
	.imgbox{
		width: 100%;
	}
	.imgbox img{
		width: 100%;
	}
	.phoneimg{
		width: 30px;
		height: 30px;
		margin-top: 5px;
	}
	.phoneimg img{
		width: 100%;
		height: 100%;
	}
	.foo{
			background-color: #fff;
			height:50px;
			width: 100%;
			display:flex;
			justify-content: space-around;
			margin-top: 30px;
		   
		}
		.leftsection{
			flex-direction: column;
			position: fixed;
			left:10px;
			bottom: 0;
			margin-right: 10px;
			
		}
		.rightinp{
			width: 80%;
			height: 40px;
			background-color:#FF8515;
			color: #fff;
			font-size: 18px;
			text-align: center;
			line-height: 40px;
			position: fixed;
			bottom: 0;
			right:10px;
		}
		.zixun{
			font-size: 14px;
		}
</style>
