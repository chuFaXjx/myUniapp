<template>
	<view class='total'>
		<view v-for='item in list' :key='item.id' class='sectotal'>
			<view class='left'>
				<view class='title'>
					{{item.title}}
				</view>
				<view class='font'>
					{{item.desc}}
				</view>
				<view v-for="item in list2" :key='item.id'>
					<text class='desc' @click='handlelook'>查看 ></text>
					<u-modal :show="show" :title="item.title" :content='item.content' @confirm="confirm" @cancel='cancel' width="400px" showCancelButton>
					</u-modal>
				
				</view>
				<view>
					<text class='guanzhu'>{{count}}人关注</text>
				</view>
				<view class='btnlayout'>
					<view class='btn'>
						<u-button :text="text" type="warning" @click='handleguanzhu'></u-button>
					</view>
					<navigator url="/pages/publish/publish" hover-class="navigator-hover">
						<view class='btn1'>
							<u-button type="primary" text="发帖" ></u-button>
						</view>
					</navigator>
					

				</view>
			</view>
			<view class='right'>
				<view class='imgbox'>
					<image :src='item.img' alt=''></image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				list2:[],
				show: false,
				title: '',
				content: '',
				text:'关注',
				count:0,
			

			};
		},
		created() {
			uni.request({
				/*#ifdef H5*/
				url: '/api/getluntandesc',
				/*#endif*/
				/*#ifndef H5*/
				url: 'http://localhost:3000/getluntandesc',
				/*#endif*/
				success: res => {
					res.data.data.forEach((item, index) => {
						this.list.push(item);
					});
				}
			});
			uni.request({
				/*#ifdef H5*/
				url: '/api/getDesc',
				/*#endif*/
				/*#ifndef H5*/
				url: 'http://localhost:3000/getDesc',
				/*#endif*/
				success: res => {
					res.data.data.forEach((item, index) => {
						this.list2.push(item);
					});
				}
			});
		},
		methods: {
			handlelook() {
              this.show=true;
			},
			confirm(){
				  this.show=false;
			},
			cancel(){
				this.show=false;
			},
			handleguanzhu(){
				// this.text= '关注' ? '取消关注' || `${this.count -1}`: '关注' || `${this.count +1}`;
				if(this.text=== '关注' ){
					this.text='取消关注'
					this.count --;
				}else{
					this.text='关注'
					this.count ++;
				}
			},
			// handlepublish(){
				
			// }
		}
	}
</script>

<style lang="scss">
	.total {
		background-color: #fff;
	}

	.sectotal {
		display: flex;
		justify-content: space-around;
		margin-left: 10px;
		background-color: #fff;
	}

	.left {
		flex-direction: column;
		margin-left: 50px;
		margin-right: 10px;

	}

	.right {
		margin-right: 10px;
	}

	.imgbox {
		width: 100px;
		height: 100px;
	}

	image {
		width: 100%;
		height: 100%;
		margin-left: -40px;
	}

	.title {
		font-size: 20px;
		margin-bottom: 10px;
		margin-left: 30px;
	}

	.font {
		font-size: 16px;
		color: #999;
		margin-left: 30px;
	}

	.desc {
		font-size: 16px;
		color: #999;
		margin-left: 30px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.guanzhu {
		color: #FF8515;
		font-size: 16px;
		margin-left: 30px;
		margin-top: 10px;
	}

	.btnlayout {
		display: flex;
		justify-content: space-around;
		margin-left: 10px;
		background-color: #fff;
		margin-top: 10px;
	}

	.btn {
		color: #FF8515;
		width: 150px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		font-size: 18px;
		margin-left: 30px;
		margin-right: 15px;
	}

	.btn1 {
		color: #1D7BE9;
		width: 150px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		font-size: 18px;
	}
</style>
