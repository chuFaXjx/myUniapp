<template>
	<view>
		<view class='top'>
			<view class='header'>
				<view class='left'>
					<text class='title'>裘维焰专家团队</text>
					<view class='leftbottom'>
						肿瘤科主任中医师
					</view>
					<view class='leftbottom'>
						浙江省立同德医院
					</view>
				</view>
				<view class='right'>
					<view class='imgbox'>
						<img src='../../static/doctor.png' alt=''>
					</view>
					<u-button type="primary" shape="circle" :text="flag" color='#FF8515' size='mini' @click='watch'></u-button>
				</view>
			</view>
			<view class='font'>
				<text>主任中医师，全国老中医专家赵树珍学术经验继承人，浙江省"151人才，浙江省中医药学会肿瘤专业委员会委员、浙江省抗癌协会康复与姑息专业委员会委员、浙江省抗癌协会传统医学专业委员会委员、浙江省中医药学会血液病分会委员。临床治疗专长于肺癌、肝癌、胃肠消化道癌、妇科恶性肿瘤的内科综合治疗，在中医养生、中西医结合肿瘤免疫疗法、癌症康复、药食调治.中晚期癌症的姑息治疗等方面积累了丰富的经验。共承担、参加、完成科研课题18项，其中国家级课题3项、省部级课题8项、厅局级课题7项。获国家科学技术进步奖兰等奖1项，中华中医药学会科学技术奖二等奖1项，浙江省科学技术进步奖二等奖l项，国家中医药管理局科学技术进步奖主等奖2项，浙江省科学技术进步奖三等奖2项。完成新药临床研究11项，在国家和省级学术刊物上发表学术论文31篇，出版著作2册。
				</text>
			</view>
			<view class='footer'>
				<text class='online'>在线时间：</text>
				<text class='time'>8:30 -- 17:30</text>
			</view>
		</view>
		<view class='bottom'>
			<u-tabs :list="list1" @click="click" lineWidth="50" lineColor="#FF8515" :activeStyle="{
            color: '#FF8515',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }" :inactiveStyle="{
            color: '#606266',
            transform: 'scale(1)'
        }"></u-tabs>
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
				 <u-button  text="在线聊天室" color='#FF8515'></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:'关注',
				list1: [{
					name: '帖子(0)',
				}, {
					name: '康友会(0)',
				}, {
					name: '评论(0)'
				}, ]
			};
		},
		methods:{
			click(){
				
			},
			watch(){
		     if(this.flag==='关注'){
				 this.flag='已关注'
			 }else if(this.flag==='已关注'){
					  this.flag='取消关注'
				 }
			}
		}
	}
</script>

<style lang="scss">
	.top {
		background-color: #fff;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.title {
		font-size: 22px;
		font-weight: 700;
		margin-left: 10px;
	}

	.leftbottom {
		font-size: 16px;
		color: #999;
		margin: 20px 10px;
	}

	.imgbox {
		width: 80px;
		height: 90px;
	}

	.imgbox img {
		width: 100%;
		height: 100%;
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
.font {
		margin-left: 10px;
		color: #999;
		font-size: 16px;

	}
.online {
		font-size: 16px;
		margin-left: 10px;
		color: #000;
	}

.time {
		color: #1D7BE9;
		margin-left: 20px;
		font-size: 14px;
	}

.footer {
		margin-bottom: 15px;
	}

.bottom {
		margin-top: 15px;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
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
