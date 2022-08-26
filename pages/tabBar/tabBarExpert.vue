<template>
	<view class="expert-body">
		<view class="expert-inp">
			<u--input placeholder="请输入搜索内容" border="surround" v-model="value" @change="change" clearable></u--input>
			<u-button type="primary" text="搜索"></u-button>
		</view>
		<view class="expert-tap">
			<view>
				<u-tabs :list="listTabs" @click="handleList" lineColor='#e0620d' lineWidth=40></u-tabs>
				<view class="kong"></view>
				<view class="view-context">
					<!-- 专家文章 -->
					<view v-if="context==0">
						<navigator url="/pages/Secondary/lungCancer" hover-class="navigator-hover">
							<view class="view-context-text">肺癌患者，你吃对了吗?</view>
							<u--text :lines="3" size=14 color="#bbb6b6"
								text='肺癌是我国第一大癌。2012年，全球180万患者被诊断为肺癌(Mannino，2014)。2019年国家癌症中心发布的全国癌症统计数据显示，在恶性肿瘤中，肺癌发病率和死亡率居第一位。2020年中国癌症新发病例457万例，肺癌仍占据第一位，癌症死亡人数为300万，因肺癌死亡的人占癌症死亡总人数的23.8%。'>
							</u--text>
							<view class="view-context-date">2021-11-15</view>
						</navigator>
						<u-divider text="分割线" :dot="true" lineColor="#ccc"></u-divider>
					</view>
					<!-- 疗法专栏 -->
					<view v-else>
						<navigator url="/pages/Secondary/YiliuPowder" hover-class="navigator-hover">
							<view class="view-context-text">杨继洲清补抑瘤散</view>
							<u--text :lines="3" size=14 color="#bbb6b6"
								text='功能与主治:1、祛正扶邪2、提升免疫力3、抑制肿瘤4、预防复发5、提升白细胞6、改善肿瘤患者的恶液质'>
							</u--text>
							<view class="view-context-date">2020-05-03</view>
						</navigator>
						<u-divider text="分割线" :dot="true" lineColor="#ccc"></u-divider>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				listTabs: [{
					name: '专家文章',
				}, {
					name: '疗法专栏',
				}],
				context: 0, //切换tabs内容
			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			handleList(item) {
				console.log('item', item);
				this.context = item.index;
			},

		}
	}
</script>

<style>
	.expert-body{
		background-color: #ffffff !important;
		margin-top: -8px !important;
	}
	.expert-inp {
		padding-top: 1px;
		display: flex;
		margin: 20rpx;
	}

	.expert-inp .u--input {
		width: 70% !important;
		border: 1px #ccc;
	}

	.expert-inp .u-button {
		width: 20% !important;
		background-color: #e0620d !important;
		border: none !important;
		margin-left: 20rpx;
	}

	.expert-tap .u-tabs {
		font-size: 16px;
		font-weight: 500;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.kong {
		width: 100%;
		height: 5px;
		background-color: #F1F1F1;
	}

	.view-context {
		margin: 0 25rpx 0 25rpx;
	}

	.view-context-text {
		font-size: 18px;
		font-weight: 600;
		margin: 20rpx 0 20rpx 0;
	}

	.view-context-date {
		margin-top: 20rpx;
		color: #666666;
	}
</style>
