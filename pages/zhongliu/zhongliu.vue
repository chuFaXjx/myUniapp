<template>
	<view class='bg'>
		<view class="uni-padding-wrap uni-common-mt" v-for='item in list' :key='item.id'>
			<view>
			
				<video id="myVideo" :src="item.video" class='viedo2' @error="videoErrorCallback" show-center-play-btn
			      controls>
				</video>
			</view>
		</view>
		<view class='title'>
			{{desc}}
		</view>
		<view class='font'>
			{{timedata}}
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
				<u-button text="健康聊天室" color='#FF8515'></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				timedata: '',
				desc: '',
				list:[],

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
		onLoad: function(option) {
			console.log(option.timedata, option.desc);
			this.timedata = option.timedata;
			this.desc = option.desc;

		},

		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		
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
	.bg{
		background:#fff;
	}
	.video2 {
		width: 100%;
	}

	.title {
		font-size: 20px;
		font-weight: 700;
		margin-left: 20px;
		margin-bottom: 15px;
	}

	.font {
		font-size: 16px;
		color: #999;
		margin-left: 20px;
	}

	.phoneimg {
		width: 30px;
		height: 30px;
		margin-top: 5px;
	}

	.phoneimg img {
		width: 100%;
		height: 100%;
	}

	.foo {
		background-color: #fff;
		height: 50px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 30px;

	}

	.leftsection {
		flex-direction: column;
		position: fixed;
		left: 10px;
		bottom: 0;
		margin-right: 10px;

	}

	.rightinp {
		width: 80%;
		height: 40px;
		background-color: #FF8515;
		color: #fff;
		font-size: 18px;
		text-align: center;
		line-height: 40px;
		position: fixed;
		bottom: 0;
		right: 10px;
	}

	.zixun {
		font-size: 14px;
	}
</style>
