<template>
  <view>
    <!-- 导航栏 -->
    <u-navbar fixed height="80px" title="杨继洲医生集团" class="back">
      <view class="u-nav-slot" slot="left"> 杨继洲医生集团 </view>
      <view class="u-nav-slot1" slot="right" @click="handleModle">
        <text>医生集团</text>
        <view>
          <u-picker
            :show="showpicker"
            :columns="columns"
            @confirm="confirm"
            @cancel="cancel"
          ></u-picker>
        </view>
      </view>
    </u-navbar>
    <!-- 轮播图 -->

    <view class="u-demo-block">
      <u-swiper
        :list="list5"
        @change="(e) => (current = e.current)"
        :autoplay="true"
        @click="handleSwap"
      >
        <view slot="indicator" class="indicator">
          <view
            class="indicator__dot"
            v-for="(item, index) in list5"
            :key="index"
            :class="[index === current && 'indicator__dot--active']"
          >
          </view>
        </view>
      </u-swiper>
      <view>
        <u-modal
          :show="show"
          :title="title"
          showCancelButton
          confirmColor="#ADB3AB"
          @confirm="confirm"
          @cancel="cancel"
        >
          <view class="slot-content">
            <rich-text :nodes="content"></rich-text>
          </view>
        </u-modal>
      </view>
      <!-- <u-gap bgColor="transparent" height="15"></u-gap> -->
    </view>
    <!-- 网格布局 -->
    <view class="grid">
      <u-grid :border="false" col="3">
        <u-grid-item v-for="listItem in list" :key="listItem.id">
          <u-icon
            :customStyle="{ paddingTop: 20 + 'rpx' }"
            :name="listItem.name"
            :size="22"
          ></u-icon>

          <navigator :url="listItem.path" hover-class="navigator-hover">
            <text class="grid-text">{{ listItem.title }}</text>
          </navigator>
        </u-grid-item>
      </u-grid>
      <u-toast ref="uToast" />
    </view>
    <view class="font">
      <text class="workspace">名医工作室</text>
    </view>
    <view class="u-demo-block1">
      <!-- 轮播图 -->
      <navigator
        url="/pages/doctormain/doctormain"
        hover-class="navigator-hover"
      >
        <u-swiper
          :list="list3"
          previousMargin="30"
          nextMargin="30"
          circular
          :autoplay="true"
          radius="5"
          bgColor="#ffffff"
        >
        </u-swiper>
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
          <text class="text">科普动画 二孩妈妈的焦虑</text>
          <text class="add">2022-5-29</text>
        </navigator>
      </view>
      <hr />
      <view>
        <text class="text">科普动画1 二孩妈妈的焦虑</text>
        <text class="add">2022-5-29</text>
      </view>
      <hr />
      <view>
        <text class="text">科普动画2 二孩妈妈的焦虑</text>
        <text class="add">2022-5-29</text>
      </view>
    </view>
    <view class="font2">
      <text class="workspace">合作单位</text>
      <navigator url="/pages/lookmore/lookmore" hover-class="navigator-hover">
        <text class="more2">查看更多</text>
      </navigator>
      <u-icon name="arrow-right" color="#999" size="18" class="arrow"></u-icon>
    </view>
    <view class="photo">
      <view class="imagebox">
        <img src="../../static/5.png" @click="click" alt="" />
      </view>
      <view class="right">
        <text class="p1">浙江大学附属第一医院</text>
        <br />
        <text class="p2">杭州市庆春路79号</text>
        <br />
        <u-button text="三级甲等" class="btn1" size="large"></u-button>
        <navigator url="/pages/detail/detail" hover-class="navigator-hover">
          <text class="detail">详情 >> </text>
        </navigator>
      </view>
    </view>
    <hr />
    <navigator url="/pages/workspace/workspace" hover-class="navigator-hover">
      <view class="photo">
        <view class="imagebox">
          <img src="../../static/6.png" @click="click" alt="" />
        </view>
        <view class="right">
          <text class="p1">浙江大学附属第一医院</text>
          <br />
          <text class="p2">杭州市庆春路79号</text>
          <br />
          <u-button text="三级甲等" class="btn1"></u-button>
          <navigator url="/pages/detail/detail" hover-class="navigator-hover">
            <text class="detail">详情 >> </text>
          </navigator>
        </view>
      </view>
    </navigator>

    <view class="connect">
      <text class="workspace1">联系方式</text>
    </view>
    <view class="bg">
      <view class="tele">
        <img src="../../static/phone.png" alt="" />
      </view>
      <view class="rightfont">
        <text>0571-89938120</text>
      </view>
      <br />
    </view>
    <view class="bg">
      <view class="tele">
        <img src="../../static/computer.png" alt="" />
      </view>
      <view class="rightfont">
        <text>http://www.8111.cn/</text>
      </view>
    </view>
    <view class="bg">
      <view class="tele">
        <img src="../../static/ding.png" alt="" />
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
      current: 0,
      show: false,
      showpicker: false,
      title: "即将打开小程序",
      content: "",
      columns: [["医生集团", "司空监管", "后台平台"]],
      list: [
        {
          id: 0,
          name: "photo",
          title: "英才学术",
          path: "/pages/fit/photo",
        },
        {
          id: 1,
          name: "lock",
          title: "公益健康",
          path: "/pages/fit/fit",
        },
        {
          id: 2,
          name: "star",
          title: "医生集团",
          path: "/pages/fit/group",
        },
        {
          id: 3,
          name: "hourglass",
          title: "健康处方",
          path: "/pages/fit/hourglass",
        },
        {
          id: 4,
          name: "home",
          title: "名医在线",
          path: "/pages/fit/doctor",
        },
        {
          id: 5,
          name: "star",
          title: "积分兑换",
          path: "/pages/fit/star",
        },
      ],

      list5: [
        // `<img src='../../static/1.png' alt=''>`,
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],

      selectIndex: 0,
      dataArr: this.getData(),
      onReady() {
        uni.setNavigationBarTitle({
          title: this.title,
        });
      },
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],
      areaShow: false,
      areaTxt: "",
    };
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
          text: "英才学术" + index,
          url: "url",
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
      console.log("confirm", e);
      this.showpicker = false;
      this.show = false;
    },
    cancel() {
      this.showpicker = false;
      this.show = false;
    },
    change(e) {
      console.log("change", e);
    },
  },
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
}

.add {
  margin-bottom: 10px;
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

image {
  max-width: 100%;
  width: 140px;
  height: 140px;
  // inline-block: ;
  position: relative;
  z-index: 0;
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
</style>
