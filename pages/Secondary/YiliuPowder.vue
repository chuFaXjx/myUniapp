<!-- 杨继洲 抑瘤散 -->
<template>
	<view>
		<!-- 视频 -->
		<view>
			<video id="myVideo" style="width: 100%;"
				src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
				@error="videoErrorCallback" :danmu-list="danmuList"></video>
		</view>
		<!-- 标题 -->
		<view class="YiliuPowder-h1">杨继洲清补抑瘤散</view>
		<!-- 时间 -->
		<view class="YiliuPowder-date">
			<u--text mode="date" text="1612959739"></u--text>
		</view>
		<!-- 内容 -->
		<view>
			<!-- 功能主治 -->
			<view class="YiliuPowder-Indications">
				<u--text bold text="功能主治"></u--text>
			</view>
			<view class="YiliuPowder-Indications-num" v-for="(item,i) in  IndicationsList" :key="i">
				<u--text :text="i+1+'、'+item"></u--text>
			</view>
			<!-- 适用人群 -->
			<view class="YiliuPowder-intended">
				<u--text bold text="适用人群:"></u--text>
				<u--text text="早期、中期和晚期的肿瘤病患者。"></u--text>
			</view>
			<!-- 疗法组成 -->
			<view class="YiliuPowder-Therapeutic">
				<u--text bold text="疗法组成:"></u--text>
			</view>
			<view class="YiliuPowder-Therapeutics" v-for="(therapeutic,therapeuticIndex) in TherapeuticList"
				:key="therapeuticIndex">
				<u--text :text="therapeuticIndex+1+'、'+therapeutic"></u--text>
			</view>
			<!-- 用法用量 -->
			<view class="YiliuPowder-Dosage">
				<u--text bold text="用法用量(特别提醒:具体体质可由中医或根据中医体质测定程序确定) :">
				</u--text>
			</view>
			<view class="YiliuPowder-Dosages" v-for="(Dosage,DosageIndex) in DosageList" :key="DosageIndex">
				<u--text :text="DosageIndex+1+'、'+Dosage"></u--text>
			</view>
			<!-- 注意事项: -->
			<view class="YiliuPowder-Attention">
				<u--text bold text="注意事项: "></u--text>
			</view>
			<view class="YiliuPowder-Attentions" v-for="(Attention,AttentionIndex) in AttentionList"
				:key="AttentionIndex">
				<u--text :text="AttentionIndex+1+'、'+ Attention"></u--text>
			</view>
			<!-- 规格: -->
			<view class="YiliuPowder-Specification">
				<u--text bold text="规格: "></u--text>
			</view>
			<view class="YiliuPowder-Specifications" v-for="(Specification,SpecificationIndex) in SpecificationList"
				:key="SpecificationIndex">
				<u--text :text="SpecificationIndex+1+'、'+ Specification"></u--text>
			</view>
			<view class="YiliuPowder-Src" v-for="(srcItem,srcIndex) in src" :key="srcIndex">
				<image
				  :src="srcItem"
				  @error="imageError"
				></image>
			</view>
			<!-- 底部 -->
			<view class="lungCancer-footer">
				<view class="lungCancer-footer-image-phone">
					<u-icon name="phone-fill" color="#2979ff" size="28"></u-icon>
					<view>电话咨询</view>
				</view>
				<view class="lungCancer-footer-It" style="width: 60%">
					<u-button type="primary" text="健康聊天室" openType="contact"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				IndicationsList: [
					'祛正扶邪',
					'提升免疫力',
					'抑制肿瘤',
					'预防复发',
					'提升白细胞',
					'改善肿瘤患者的恶液质',
				],
				TherapeuticList: [
					'清补抑瘤散',
					'宜利治',
					'破壁灵芝孢子粉(品牌:杨继洲)',
				],
				DosageList: [
					'散剂1包/天，温水100ml调服，早晚均可服用:早. 上适散剂1包/天，温水100 ml调服，早晚均可服用:早上适合在饭后口服;晚上适合在睡前服用。连服10天;合在饭后口服；晚上适合在睡前服用.连服10天；',
					'破壁灵芝孢子粉:每日两次，每次2-4包， 早上、晚上、饭前半小时或者睡前半小时温水冲服;',
					'宜利治160mg， 每日1片，连服10天，饭后30分钟内服用;',
					'根据患者的检验结果及体质:如体质、状况有改善，则可采取服用30天，间隔2周再服用的方式;',
					'三个疗程服用完成后(30天)，可酌情进行临床检验，根据临床报告、体质不同，可在专家指导下调整服用型号，继续服用;',
					'请在临床专家指导下使用。'
				],
				AttentionList: [
					'启封后-次服用完毕,放置冰箱冷藏;',
					'本品性状发生改变时禁用; ',
					'过敏体质者慎用;',
					'请将本品放置在儿童不宜接触的地方;',
					'非患者本人禁止使用;',
					'必须使用矿泉水，掌握操作水温，禁用自来水。',
				],
				SpecificationList: [
					'15g/包，10包/盒，10天为一个疗程。',
					'本散剂由赛卡乐杰医疗科技、杨继洲中医药研究中心、百本散剂由赛卡乐杰医疗科技、杨继洲中医药研究中心、百年老字号“王德裕堂国药号 联合研制，精选古法传承炮制,年老字号“王德裕堂国药号”联合研制，精选古法传承炮制，品质精纯',
					'全国统-零售价: 868元/盒 .全国统-零售价：868元/盒.',
				],
				src:[
					'../../static/imges/zcYiliuPowdera.jpg',
					'../../static/imges/zcYiliuPowderb.jpg',
					'../../static/imges/zcYiliuPowderc.jpg',
				],
				
			}
		}
	}
</script>

<style>
	.YiliuPowder-h1 {
		font-size: 20px;
		font-weight: 600;
		margin: 20rpx 0 20rpx 20rpx;
	}

	.YiliuPowder-date {
		color: #bbb6b6;
		margin: 0 0 20rpx 20rpx;
	}

	.YiliuPowder-Indications {
		text-indent: 2em !important;
		margin: 20rpx 0 0 20rpx;
	}

	.YiliuPowder-Indications-num {
		text-indent: 2em;
		margin: 0 0 0 20rpx;
	}

	.YiliuPowder-intended,
	.YiliuPowder-Therapeutic,
	.YiliuPowder-Dosage,
	.YiliuPowder-Attention,
	.YiliuPowder-Specification {
		text-indent: 2em;
		margin-left: 10px;
		margin-top: 10px;
	}

	.YiliuPowder-Therapeutics,
	.YiliuPowder-Dosages,
	.YiliuPowder-Attentions,
	.YiliuPowder-Specifications {
		text-indent: 2em;
		margin-left: 10px;
		margin-right: 10px;
	}
	
	.YiliuPowder-Src{
		width: 95%;
		margin: auto;
		margin-top: 20px;
	}
	/* 底部 */
	.lungCancer-footer {
		width: 100%;
		display: flex;
		position: fixed;
		bottom: 0px;
		background-color: #fff;
	}

	.lungCancer-footer-viewImage {
		width: 30%;
	}

	.lungCancer-footer-image-phone {
		width: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.lungCancer-footer-It .u-button {
		background-color: #ff8515 !important;
		border: none !important;
	}
</style>
