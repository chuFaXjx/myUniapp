<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar fixed height="80px" title="杨继洲医生集团" class="back">
			<view class="u-nav-slot" slot="left">杨继洲医生集团</view>
			<view class="u-nav-slot1" slot="right" @click="handleModle">
				<text>医生集团</text>
				<view><u-picker :show="showpicker" :columns="columns" @confirm="confirm" @cancel="cancel"></u-picker></view>
			</view>
		</u-navbar>
		<!-- 轮播图 -->
		<view class="u-demo-block">
			<u-swiper :list="list5" @change="e => (current = e.current)" :autoplay="true" @click="handleSwap">
				<view v-for="item in list5" key="{item.id}"><img src="{item.avatar}" alt="" /></view>
			</u-swiper>
			<view>
				<u-modal :show="show" :title="title" showCancelButton confirmColor="#ADB3AB" @confirm="confirm" @cancel="cancel">
					<view class="slot-content"><rich-text :nodes="content"></rich-text></view>
				</u-modal>
			</view>
		</view>
		<!-- 网格布局 -->
		<view class="grid">
			<u-grid :border="false" col="3">
				<u-grid-item v-for="(listItem, listIndex) in list" :key="listItem.id">
					<navigator :url="`/pages${listItem.url}${listItem.url}`" hover-class="navigator-hover">
						<view class="imgbox"><image :src="listItem.describe" alt="" :customStyle="{ paddingTop: 10 + 'rpx' }" class="imgdec"></image></view>
						<text class="grid-text">{{ listItem.text }}</text>
					</navigator>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
		<view class="font"><text class="workspace">名医工作室</text></view>
		<view class="u-demo-block1">
			<!-- 轮播图 -->
			<navigator url="/pages/doctormain/doctormain" hover-class="navigator-hover">
				<u-swiper :list="list3" previousMargin="30" nextMargin="30" circular :autoplay="true" radius="5" bgColor="#ffffff"></u-swiper>
			</navigator>
		</view>
		<view class="font1">
			<text class="workspace">资讯动态</text>
			<text class="more">查看更多</text>
			<u-icon name="arrow-right" color="#999" size="18" class="arrow"></u-icon>
		</view>
		<view class="word">
			<view>
				<navigator url="/pages/wellknow/wellknow" hover-class="navigator-hover">
					<view v-for="item in zixunlist" :key="item.id">
						<text class="text">{{ item.title }}</text>
						<text class="add">{{ item.time }}</text>
					</view>
					<hr />
				</navigator>
			</view>
		</view>
		<view class="font2">
			<text class="workspace">合作单位</text>
			<navigator url="/pages/lookmore/lookmore" hover-class="navigator-hover"><text class="more2">查看更多</text></navigator>
			<u-icon name="arrow-right" color="#999" size="18" class="arrow"></u-icon>
		</view>
		<!-- 合作单位 -->
		<navigator url="/pages/workspace/workspace" hover-class="navigator-hover">
			<view class="photo" v-for="imgitem in citylist" :key="imgitem.id">
				<view class="imagebox1"><image :src="imgitem.cooperimg" @click="click" alt=""></image></view>
				<view class="right">
					<text class="p1">{{ imgitem.title}}</text>
					<br />
					<text class="p2">{{ imgitem.text }}</text>
					<br />
					<u-button text="三级甲等" class="btn1"></u-button>
					<navigator url="/pages/detail/detail" hover-class="navigator-hover"><text class="detail">详情 >></text></navigator>
				</view>
			</view>
		</navigator>

		<view class="connect"><text class="workspace1">联系方式</text></view>
		<view class="bg">
			<view class="tele"><img src="../../static/phone.png" alt="" /></view>
			<view class="rightfont"><text>0571-89938120</text></view>
			<br />
		</view>
		<view class="bg"> 
			<view class="tele"><img src="../../static/computer.png" alt="" /></view>
			<view class="rightfont"><text>http://www.8111.cn/</text></view>
		</view>
		<view class="bg">
			<view class="tele"><img src="../../static/ding.png" alt="" /></view>
			<view class="rightfont"><text>浙江省杭州市浙江大学国家科技大学园A东325室</text></view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			current: 0,
			show: false,
			showpicker: false,
			title: '即将打开小程序',
			content: '',
			columns: [],
			list: [],
			url:'',
			zixunlist: [],
			citylist: [],

			list5: [],
			selectIndex: 0,
			dataArr: this.getData(),
			onReady() {
				uni.setNavigationBarTitle({
					title: this.title
				});
			},
			list3: [],
			areaShow: false,
			areaTxt: ''
		};
	},
	// 请求轮播图数据
	created() {
		uni.request({
			// 跨域访问出现 request:fail invalid url是什么原因
			/*#ifdef H5*/
			url: '/api/getdoctorbanner',
			/*#endif*/
			/*#ifndef H5*/
			url: 'http://localhost:3000/getdoctorbanner',
			/*#endif*/
			success: res => {
				console.log('@', res.data.data);
				res.data.data.forEach((item, index) => {
					this.list5.push(item.avatar);
				});
			}
		});
		// 医生集团
		uni.request({
			/*#ifdef H5*/
			url: '/api/doctcompany',
			/*#endif*/
			/*#ifndef H5*/
			url: 'http://localhost:3000/doctcompany',
			/*#endif*/
			success: res => {
				console.log('@@', res.data.data);
				res.data.data.forEach((item, index) => {
					this.columns.push(item.companyname);
				});
			}
		});
		// 名医工作室
		uni.request({
			/*#ifdef H5*/
			url: '/api/getteambanner',
			/*#endif*/
			/*#ifndef H5*/
			url: 'http://localhost:3000/getteambanner',
			/*#endif*/
			success: res => {
				console.log('@', res.data.data);
				res.data.data.forEach((item, index) => {
					this.list3.push(item.gridimg);
				});
			}
		});
		// 网格数据渲染
		uni.request({
			/*#ifdef H5*/
			url: '/api/gridlist',
			/*#endif*/
			/*#ifndef H5*/
			url: 'http://localhost:3000/gridlist',
			/*#endif*/
			success: res => {
				res.data.data.forEach((item, index) => {
					this.list.push(item);
					console.log('qqqq',item.url);
					console.log('11',this.list);
				});
			}
		});
		// 资讯动态
		uni.request({
			/*#ifdef H5*/
			url: '/api/getzixunlist',
			/*#endif*/
			/*#ifndef H5*/
			url: 'http://localhost:3000/getzixunlist',
			/*#endif*/
			success: res => {
				res.data.data.forEach((item, index) => {
					this.zixunlist.push(item);
				});
			}
		});
		// 合作单位
		uni.request({
			/*#ifdef H5*/
			url: '/api/getCooperatelist',
			/*#endif*/
			/*#ifndef H5*/
			url: 'http://localhost:3000/getCooperatelist',
			/*#endif*/
			success: res => {
				res.data.data.forEach((item, index) => {
					this.citylist.push(item);
				});
			}
		});
	},
	methods: {
		onClickItem(item, index) {
			this.selectIndex = index;
		},
		handleSwap() {
			this.show = true;
		},
		getData() {
			let dataArr = [];
			for (let index = 0; index < 6; index++) {
				dataArr.push({
					text: '英才学术' + index,
					url: 'url'
				});
			}
			return dataArr;
		},
		click() {},
		cancelAdd() {
			this.areaShow = false;
		},
		confirmAdd() {
			this.areaShow = false;
		},

		handleModle() {
			this.showpicker = true;
		},
		confirm(e) {
			console.log('confirm', e);
			this.showpicker = false;
			this.show = false;
		},
		cancel() {
			this.showpicker = false;
			this.show = false;
		},
		change(e) {
			console.log('change', e);
		}
	}
};
</script>

<style lang="scss">
.back {
	background-color: #ffffff;
	height: 100px;
}

.grid {
	background-color: #ffffff;
	margin-top: -14px;
}

.grid-text {
	font-size: 14px;
	color: #909399;
	padding: 10rpx 0 20rpx 0rpx;
	/* #ifndef APP-PLUS */
	box-sizing: border-box;
	/* #endif */
}

.u-nav-slot {
	font-size: 22px;
	font-weight: 400;
	color: #fe902b;
	margin-top: 50px;
}

.u-nav-slot1 {
	font-size: 18px;
	color: #fe902b;
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
		color: #ffffff;
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

.imgbox {
	width: 20px;
	height: 20px;
}

.imgdec {
	width: 100%;
	height: 100%;
}

.image {
	margin-top: 10px;
	background: #fff3e9;
	width: 60px;
	border: 1px solid transparent;
	border-radius: 50%;
	height: 60px;
}

.u-navbar__content__title.data-v-95dec1ae {
	margin-top: -17px;
}

.u-navbar__content__title.data-v-95dec1ae {
	width: 100px;
	height: 44px;
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
	background-color: #ffffff;
}

.font1 {
	display: flex;
	width: 100%;
	background-color: #ffffff;
	margin-top: 10px;
}

.font2 {
	display: flex;
	width: 100%;
	background-color: #ffffff;
	margin-top: 10px;
	// margin-left: 10px;
}

.workspace {
	text-align: center;
	font-size: 20px;
	color: #fe902b;
	margin: 20px auto;
}

.more {
	font-size: unset;
	color: #000;
	margin-top: 27px;
}

.more2 {
	font-size: unset;
	color: #000;
	margin-top: 30px;
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
	margin-left: 10px;
}

.add {
	margin-bottom: 10px;
	margin-left: 10px;
}

.photo {
	display: flex;
	background-color: #ffffff;
}

.imagebox {
	width: 40px;
	height: 40px !important;
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
	color: #fe902b;
	font-size: 18px;
}

.btn1 {
	width: 60px;
	height: 30px;
	background-color: #ffffff;
}

.connect {
	margin-top: 10px;
	display: flex;
	background-color: #ffffff;
}

.workspace1 {
	text-align: center;
	font-size: 20px;
	color: #fe902b;
	margin: 20px auto;
}

.bg {
	background-color: #ffffff;
	display: flex;
}

.tele {
	flex: 1;
	width: 20px;
	height: 27px;
}

.tele img {
	width: 100%;
	height: 100%;
}

.rightfont {
	flex: 4;
	margin-left: 10px;
}

.u-button--large.data-v-2bf0e569 {
	/* width: 100%; */
	width: 100px;
	height: 50px;
	padding: 0 15px;
}

.u-button.data-v-2bf0e569 {
	width: 100px !important;
	height: 50px !important;
	margin-top: 20px;
}

.tele {
	flex: 1;
	width: 14px;
	height: 22px;
	font-size: 9px;
}

.u-grid-item.data-v-5b3a01af {
	margin-top: 20px !important;
}

image {
	margin-top: 10px;
	max-width: 100%;
	width: 60px;
	height: 60px;
	position: relative;
	z-index: 0;
}

.imgbox {
	width: 51px;
	height: 51px;
	margin-bottom: 10px;
}

.imagebox1 {
	width: 80px;
	height: 80px;
	margin-left: 10px;
}

.imagebox1 image {
	margin-top: 10px;
	max-width: 100%;
	width: 80px;
	height: 80px;
	position: relative;
	z-index: 0;
}
</style>
