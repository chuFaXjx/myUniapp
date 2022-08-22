<template>
	<view>
		<view class='inp'>
			<view class='left'>
				<u--input placeholder="请输入医生名称 ,医院 ,职位等" border="surround" v-model="value" @change="change"></u--input>
			</view>
			<view>
				<u-button type="warning" text="搜索"></u-button>
			</view>
		</view>
		<view class='select'>
			<view class="left2">
				<u-button type="primary" :plain="true" text="浙江省肿瘤医院"></u-button>
			</view>
			<view>
				<u-button type="primary" :plain="true" text="请选择科室" @click="handleSelect"></u-button>
				<u-picker :show="show" :columns="columns" @confirm='confirm' @cancel='cancel'></u-picker>
			</view>
		</view>
		<view class="border">
		</view>
		<view class='pro'>
			<view class='name'>刘碧霞</view> 
			<view class='detail'>
				腹部肿瘤内科副主任医师，二级医师，中国抗癌协会会员。长期从事各种恶性肿瘤的术后辅助治疗、晚期姑息性化...
			</view>
			<view class='detail'>2019-08-16</view>
		</view>
        <view class="border">
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: false,
				columns: [
					['请选择科室', '信息科', '肿瘤科']
				],
			};
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			handleSelect(){
				this.show=true;
			},
			confirm(e){
				console.log('confirm', e)
				this.show=false;
			},
			cancel(){
				this.show=false;
			}
		}
	}
</script>

<style lang="scss">
	.inp {
		display: flex;
	}

	.left {
		width: 80%;
		height: 50px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.select {
		display: flex;
		justify-content: space-around;
	}

	.border{
		border-bottom: 1px solid #999;
		width: 100%;
		margin-top: 8px;
	}
	.pro{
		flex-direction: column;
	}
	.name{
		font-size: 20px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-top: 10px;
	}
	.detail{
		margin-left: 10px;
		color: #999;
		font-size: 16px;
		margin-top: 10px;
	}
</style>
