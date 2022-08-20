<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar fixed height='80px' title="杨继洲医生集团" class='back'>
			<view class="u-nav-slot" slot="left">
				杨继洲医生集团
			</view>
			<view class="u-nav-slot1" slot="right" @click='handleModle'>
				医生集团
			</view>
		</u-navbar>
		<!-- 轮播图 -->
		<!--  <view>
			<u-modal v-if="areaShow" title="新增空间" confirm-text="保存" cancel-text="取消" @cancel="cancelAdd" @confirm="confirmAdd">
			<input type="text" v-model="areaTxt" placeholder="限填5个字" class="intxt" maxlength="5" />
			</u-modal>
		</view> -->
		<view class="u-demo-block">
			<u-swiper :list="list5" @change="e => current = e.current" :autoplay="true">
				<view slot="indicator" class="indicator">
					<view class="indicator__dot" v-for="(item, index) in list5" :key="index"
		 			:class="[index === current && 'indicator__dot--active']">
					</view>
				</view>
			</u-swiper>
			<u-gap bgColor="transparent" height="15"></u-gap>
		</view>
		<!-- 网格布局 -->
		<view>
			<view class="grid-bg">
				<view class='grid-item-bg' v-for="(item, index) in dataArr" :key="index"
					@click="onClickItem(item, index)">
					<view class="image">{{item.img}}</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
		</view>
		<view class="font">
			<text class='workspace'>名医工作室</text>
		</view>
		<view class="u-demo-block1">
			<!-- 轮播图 -->
			<u-swiper :list="list3" previousMargin="30" nextMargin="30" circular :autoplay="true" radius="5"
				bgColor="#ffffff"></u-swiper>
		</view>
		<view class="font1">
			<text class='workspace'>资讯动态</text>
			<text class='more'>查看更多</text>
			<u-icon name="arrow-right" color="#999" size="18" class='arrow'></u-icon>
		</view>
		<view class='word'>
			<view>
				<text class='text'>科普动画 二孩妈妈的焦虑</text>
				<text class='add'>2022-5-29</text>
			</view>
			<hr />
			<view>
				<text class='text'>科普动画1 二孩妈妈的焦虑</text>
				<text class='add'>2022-5-29</text>
			</view>
			<hr />
			<view>
				<text class='text'>科普动画2 二孩妈妈的焦虑</text>
				<text class='add'>2022-5-29</text>
			</view>
		</view>
		<view class="font2">
			<text class='workspace'>合作单位</text>
			<text class='more'>查看更多</text>
			<u-icon name="arrow-right" color="#999" size="18" class='arrow'></u-icon>
		</view>
		<view class='photo'>
			<view class='imagebox'>
				<img src="../../static/5.png" @click="click" alt=''>
			</view>
			<view class='right'>
				<text class='p1'>浙江大学附属第一医院</text>
				<br />
				<text class='p2'>杭州市庆春路79号</text>
				<br />
				<u-button text="三级甲等" class='btn1' size='large'></u-button>
				<text class='detail'>详情 >> </text>
			</view>
		</view>
		<hr />
		<view class='photo'>
			<view class='imagebox'>
				<img src="../../static/6.png" @click="click" alt=''>
			</view>
			<view class='right'>
				<text class='p1'>浙江大学附属第一医院</text>
				<br />
				<text class='p2'>杭州市庆春路79号</text>
				<br />
				<u-button text="三级甲等" class='btn1'></u-button>
				<navigator url="/pages/detail/detail" hover-class="navigator-hover">
					<text class='detail'>详情 >> </text>
				</navigator>
				
			</view>
		</view>
		<view class='connect'>
			<text class='workspace1'>联系方式</text>
		</view>
		<view class='bg'>
			<view class='tele'>
				<img src='../../static/phone.png' alt=''>
			</view>
			<view class="rightfont">
				<text>0571-89938120</text>
			</view>
			<br />
		</view>
		<view class='bg'>
			<view class='tele'>
				<img src='../../static/computer.png' alt=''>
			</view>
			<view class="rightfont">
				<text>http://www.8111.cn/</text>
			</view>
		</view>
		<view class='bg'>
			<view class='tele'>
				<img src='../../static/ding.png' alt=''>
			</view>
			<view class="rightfont">
				<text>浙江省杭州市浙江大学国家科技大学园A东325室</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list5: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				title: "GridView3",
				selectIndex: 0,
				dataArr: this.getData(),
				onReady() {
					uni.setNavigationBarTitle({
						title: this.title
					})
				},
				list3: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				areaShow: false,
				areaTxt: '',



			};
		},
		methods: {
			onClickItem(item, index) {
				this.selectIndex = index

			},
			getData() {
				let dataArr = []
				for (let index = 0; index < 6; index++) {
					dataArr.push({
						text: "英才学术" + index,
						url: "url"
					})
				}
				return dataArr
			},
			click() {

			},
			cancelAdd() {
				this.areaShow = false
			},
			confirmAdd() {
				this.areaShow = false
			},

			handleModle() {
				console.log(2);
				// this.areaShow = true;
				uni.showModal({
					title: '提示',
					content: '内容',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			change(e) {
				console.log('change', e);
			},
			detail(){
				console.log(2222);
				// uni.navigateTo({
				// 		url: 'detail',
				// 		fail: (res) => {
				// 			console.log(res)
				// 			}
				// 		})
					
			}
			
		}
	}
</script>

<style lang="scss">
	.back {
		background-color: #FFFFFF;
		height: 100px;

	}

	.u-nav-slot {
		font-size: 22px;
		font-weight: 400;
		color: #FE902B;
		margin-top: 50px;

	}

	.u-nav-slot1 {
		font-size: 18px;
		color: #FE902B;
		margin-top: 50px;

	}

	.u-demo-block {
		margin-top: 100px;
	}

	.u-demo-block1 {
		margin-top: 0px;
	}

	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}

	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 35px;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}

	.grid-bg {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		background: white;
		width: 100%;
		margin-top: -15px;
		border-left: $grid-boder-width solid $grid-border-color;
		border-top: $grid-boder-width solid $grid-border-color;
	}

	.grid-item-bg {
		@include grid-column(3);
		padding: 5px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: space-between;
		border-right: $grid-boder-width solid $grid-border-color;
		border-bottom: $grid-boder-width solid $grid-border-color;
		border: none;
	}

	.image {
		margin-top: 10px;
		background: #FFF3E9;
		width: 60px;
		border: 1px solid transparent;
		border-radius: 50%;
		height: 60px;
	}

	.text {
		margin-top: 10px;
		display: block;
		text-align: center;
		color: #000;
		font-size: 14px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.font {
		display: flex;
		width: 100%;
		background-color: #FFFFFF;

	}

	.font1 {
		display: flex;
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 10px;
	}

	.font2 {
		display: flex;
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 10px;

	}

	.workspace {
		text-align: center;
		font-size: 20px;
		color: #FE902B;
		margin: 20px auto;
	}

	.more {
		font-size: unset;
		color: #000;
		margin-top: 22px;
	}

	.banner1 {
		background-color: #ffffff;
		width: 90%;
		display: flex;
		border: 1px solid #eee;
		border-radius: 10px;
	}

	.banner1::before {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: 1px solid #eee;
	}

	.word {
		background-color: #ffffff;
		display: block;
		text-align: left;
		margin-top: -10px;
	}

	.text {
		margin-bottom: 20px;
		text-align: left;
		font-size: 20px;
		width: 100%;
	}

	.add {
		margin-bottom: 10px;
	}

	.photo {
		display: flex;
		background-color: #FFFFFF;
	}

	.imagebox {
		width: 40px;
		height: 40px;
		flex: 1;
	}

	.leftimg img {
		width: 100%;
		height: 100%;
	}

	.right {
		flex: 3;
		margin-left: 10px;
	}

	.p1 {
		font-size: 22px;

	}

	.p2 {
		font-size: 20px;
		// text-align: left;
	}

	.detail {
		color: #FE902B;
		font-size: 18px;
	}

	.btn1 {
		width: 60px;
		height: 30px;
		background-color: #FFFFFF;
	}

	.connect {
		margin-top: 10px;
		display: flex;
		background-color: #FFFFFF;
	}

	.workspace1 {
		text-align: center;
		font-size: 20px;
		color: #FE902B;
		margin: 20px auto;
	}

	.bg {
		background-color: #FFFFFF;
		display: flex;

	}

	.tele {
		flex: 1;
		width: 20px;
		height: 20px;
	}

	.tele img {
		width: 100%;
		height: 100%;
	}

	.rightfont {
		flex: 4;
		margin-left: 10px;
	}
</style>
