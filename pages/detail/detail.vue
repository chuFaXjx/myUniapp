<template>	<view>		<u-navbar title="详情" @rightClick="rightClick" :autoBack="true">		</u-navbar>		<view class='top'>			<text class='title'>浙江大学附属第一医院</text>
			<br/>
			<view class='font'>
				<text>杭州市庆春路79号</text>
				<br/>
				<text> 上午08:00-12:00 下午 14:00-17:30</text>
				<br/>
				<text>三级甲等</text>
			</view>
			<view>
				<text class='font1'>
					浙江大学附属第一医院是集医疗、教学、科研于一体的大型三级甲等综合医院，以综合实力雄厚，医疗质量过硬，学科特色鲜明享誉海内外;同时也是浙江省医疗、教学、科研指导中心。建院至今，形成了“以卓越的医疗品质促进人类健康”的使命和“成为国际一流的医学中心”的愿景，创立了“严谨求实”的核心价值观和“以严谨的教育培养为基石，创新的科学研究为引领，卓越的医疗技术为保障，一流的健康服务为目标，依托科学的规范化管理，实现员工自我价值，创建国际一流医学中心”的发展思路。
				</text>
				
			</view>		</view>					</view></template><script>	export default {		data() {			return {			};		},		methods: {			rightClick() {			 console.log('rightClick');			},			leftClick() {				console.log('leftClick');			}		}	}</script><style lang="scss">.title{	font-weight: 700;	font-size: 24px;}.font{	color:#999;	font-size: 16px;	margin-left: 10px;
	display: block;}
.top{
	margin-top: 65px;
	// margin-left: 10px;
	background-color: #fff;
	padding-left: 10px;
}
.up{
	margin-top: 20px;
}
.font1{
	font-size: 18px;
	margin-left: 20px;
}</style>