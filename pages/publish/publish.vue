<template>
	<view>
		<view>
			<u--input placeholder="请输入标题"  v-model="value" @change="change" border='bottom'></u--input>
		</view>
		<view class='inp'>
			<u--input placeholder="选择产品"  v-model="value" @change="change"  border='bottom'>
				<!-- suffixIcon='arrow-right' -->
			</u--input>
			<view class='icon'>
			<u-icon name="arrow-right" @click='handleclick' label='请选择'></u-icon>	
			</view>
			<u-picker :show="show" :columns="columns"  @confirm="confirm" @cancel='cancel'></u-picker>
		</view> 
		<view>
			<u--textarea v-model="value1" placeholder="请输入内容" height='200px'></u--textarea>
		</view>
		<view class='btn'>
		  <u-button type="primary" text="提交"></u-button>
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
					['中国', '美国', '日本']
				],
				value1: '',

			};
		},
		created() {},
		methods: {
			change(e) {
				console.log('change', e);
			},
			handleclick(){
				this.show=true;
			},
			confirm(){
				this.show=false;
			},
			cancel(){
				this.show=false;
			}
		}
	}
</script>

<style lang="scss">
.inp{
	position: relative;
	margin-top: 10px;
}

.icon{
	position: absolute;
	size:20px;
	right:10px;
	top:25%;
}
.btn{
	width:90%;
	margin-top: 20px;
	margin:20px auto 0px;
	
}

</style>
