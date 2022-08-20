<template>
  <view>
    <view class="lungCancer-h1">肺癌患者，你吃对了吗?</view>
    <view class="lungCancer-date">
      <u--text mode="date" text="1612959739"></u--text>
    </view>
    <view class="lungCancer-title-color">
      <view class="">用膳食营养唤醒基因激发自愈</view>
    </view>
    <view class="lungCancer-context">
      <view style="text-indent: 2em">
        <u--text
          text="肺癌是我国第一大癌。2012年,全球180万患者被诊断为肺癌(Mannino, 2014),2019年国家癌症中心发布的全国癌症统计数据显示，在恶性肿瘤中，肺癌发病率和死亡率居第一位。2020年中国癌症新发病例457万例,肺癌仍占据第一位,癌症死亡人数为300万，因肺癌死亡的人占,癌症死亡总人数的23.8%。"
        >
        </u--text>
      </view>
      <view style="text-indent: 2em; margin-top: 30rpx">
        <u--text
          text="老烟枪和特殊工种是肺癌的高发群统但越来越多不抽烟的女性也莫名患癌。男性的肺癌死亡率要高于女性，不过这种差异正在慢缩小。"
        >
        </u--text>
      </view>
      <view class="lungCancer-imges">
        <image
          style="width: 100%"
          src="../../static/imges/zcfei.jpg"
          @error="imageError"
        ></image>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="营养不良与呼吸系统疾病之间的关系早已得到公认,如蛋白质和铁缺乏会削弱血液的携氧能力，钙镁磷钾水平。下降会削弱呼吸功能，低蛋白血症会加重肺水肿的发展,维生素C帮助合成肺胶原组织等等。"
        >
        </u--text>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="肺癌是营养不良发生率最高的肿瘤之一，呼吸困难，是最普遍、最影响正常生活的症状， 25%-40%的肺癌病人有呼吸困难的症状。随着病情的发展，营养不良损害到患者呼吸肌的收缩力、耐力和呼吸功能,伴随着体重的逐步下降。晚期肺癌患者中营养不良的发生率可以达到30%以上，体重随着营养不良程度的加深进一步下降,这也增加了患者的死亡发生率，体重减轻5%预示着预后不良。"
        >
        </u--text>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="目前肺癌治疗的方法包括放疗化疗以及手术,手术是肺癌患者常见的治疗手段之一。这些治疗方法都会在一定程度 上影响患者的营养状况，而术后营养状况的好坏也是决定疾病预后的重要因素之一。营养不足或有营养风险的患者在化疗中将可能面临更高的化疗风险，并导致更多的不良事件发生。"
        >
        </u--text>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="营养支持对于肺癌的治疗起着非常重要的作用。怎么吃?吃什么?才能改善身体体质，提高机体免疫力，尽可能的恢复机体的各项机能，接近术前的状态，是肺癌患者术后非常关注的问题之一。"
        >
        </u--text>
      </view>
      <view class="lungCancer-title-color">
        <view class="">肺癌的营养疗法</view>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="1.摄入适量的优质脂肪和蛋白质是重中之重。2.增加天然橙色蔬菜和水果的摄入绝对是有益处的。3.增加食药两用的植物性食物，无论在肺癌的发生、发展，以及治疗方面所起到的作用，都已在国际上受到了广泛的关注。4.给予高营养密度的食物不失为一个良方。"
        >
        </u--text>
      </view>
      <view class="lungCancer-imges">
        <image
          style="width: 100%"
          src="../../static/imges/zcsg.jpg"
          @error="imageError"
        ></image>
      </view>
      <view class="lungCancer-title-color">
        <view>01优质脂肪和蛋白质</view>
      </view>
      <view>
        <u--text text="摄入适量的优质脂肪和蛋白质是重中之重。"></u--text>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="1.富含w-3脂肪酸和抗氧化剂的高脂膳食，能够降低炎性细胞因子(如IL-1, IL-6和IL-8)水平、下调炎症反 应的作用，改善呼吸道炎症。"
        >
        </u--text>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="2.优质脂肪的氧化呼吸商较低，有助于减少C02量的产生，减轻肺部的工作量，还能增加维生素D的吸收率，间接提免疫力，预防感染。"
        >
        </u--text>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="3.支链氨基酸能够促进患者的蛋白质代谢，从食物中获得支链氨基酸对于患者来说尤为重要,研究显示每天摄入6.2克支链氨基酸可以获得对术后恢复的益处。支链氨基酸含量丰富的食物包括鸡蛋白、鸡胸肉、金枪鱼、鲑鱼、牛肉、罗非鱼、火鸡、干烤花生等。过量的蛋白质摄入会刺激呼吸驱动力而导致呼吸肌的疲劳。"
        >
        </u--text>
      </view>
      <view style="text-indent: 2em">
        <u--text
          text="4.优质脂肪和蛋白质食物的来源:油脂鱼、深海虾、发酵奶制品、芽菜、牛油果、粗榨橄榄油、种子、坚果、海洋中的植物等。"
        >
        </u--text>
      </view>
      <view class="lungCancer-imges">
        <image
          style="width: 100%"
          src="../../static/imges/zccz.jpg"
          @error="imageError"
        ></image>
      </view>
      <view>vsdfbdfbfsvaaaaaaaaaaaaaaaaa</view>
    </view>
    <!-- 底部 -->
    <view class="lungCancer-footer">
      <view class="lungCancer-footer-image-phone">
        <u-icon name="phone-fill" color="#2979ff" size="28"></u-icon>
        <view>电话咨询</view>
      </view>
      <view class="lungCancer-footer-It" style="width: 60%">
        <u-button
          type="primary"
          text="健康聊天室"
          openType="contact"
        ></u-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // value6: 0,
    };
  },
  methods: {},
};
</script>

<style>
.lungCancer-h1 {
  font-size: 20px;
  font-weight: 600;
  margin: 20rpx 0 20rpx 20rpx;
}

.lungCancer-date {
  color: #bbb6b6;
  margin: 0 0 20rpx 20rpx;
}

.lungCancer-title-color {
  /* width: 1%; */
  text-align: center;
  margin: 40rpx 80rpx 40rpx 80rpx;
  background-color: #ffacaa;
  color: #fff;
}

/* .lungCancer-title-color-view {
		background-color: #FFACAA;
	} */

.lungCancer-context {
  margin: auto;
  margin: 50rpx 20rpx 20rpx 20rpx;
}

.lungCancer-imges {
  width: 100%;
  margin: 40rpx auto;
}

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
