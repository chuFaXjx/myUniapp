<template>
	<view class='view'>
		<u-input v-model="name" type="select" @click="openCheckBox" />
		<u-popup v-model="checkBoxShow" mode="bottom" >
			<view class='check-view'>
				<view class='check-btn'>
					<span @click='checkBoxShow = false'>{{cancelText}}</span>
					<span @click='checkConfirm'>{{confirmText}}</span>
				</view>
				<scroll-view class='scroll-y' scroll-y="true">
					<view v-for='(item,index) in newList' :key='index'>
						<u-checkbox v-model="item.check">{{item[labName]}}</u-checkbox>
					</view>
				</scroll-view>
				
			</view>
		</u-popup>
	</view>
</template>

<script>
	/**
	     * checkbox 复选框
	     * list     {Array}          复选框数据数组
	     * value    {String,Number}  复选框绑定的值 v-model
	     * labName  {String}         自定义list数据的label属性名  
	     * valName  {String} 	       自定义list数据的value属性
			 * cancelText {String}			 取消按钮文字
			 * confirmText {String}			 确定按钮文字
	     * @confirm {Function}       选中之后回调函数
	*/
	export default {
		props:{
			cancelText:{ //取消按钮文字
				type:String,
				default:'取消'
			},
			confirmText:{ //确定按钮文字
				type:String,
				default:'确定'
			},
			value:{ //值
				type:[String,Number],
				default:''
			},
			list:{ //数据数组
				type:Array,
				default:() => {
					return []
				}
			},
			labName:{ //自定义list数据的label属性名
				type:String,
				default:'label'
			},
			valName:{ //自定义list数据的value属性
				type:String,
				default:'value'
			}
		},
		data() {
			return {
				name:'',
				checkBoxShow: false, //复选框控制显示
				newList:[]
			}
		},
		watch:{
			list:function(val) {
				this.init()
			}
		},
		mounted() {
			this.init()
		},
		methods:{
			init() {
				this.newList = JSON.parse(JSON.stringify(this.list));
				// 判断有没有传值，有传值要勾选复选框
				if(this.value!='') {
					let arr = this.value.split(',');
					console.log(arr)
					let labArr = []
					arr.forEach((val) => {
						this.newList.forEach((item) => {
							if(item[this.valName] == val) {
								this.$set(item,'check',true)
								// item.check = true;
								labArr.push(item[this.labName])
							}
						})
					})
					this.name = labArr.join()
				}else{
					this.newList.forEach((item) => {
						// item.checked = false;
						this.$set(item,'check',false)
					})
				}
			},
			openCheckBox() {
				this.checkBoxShow = true;
				this.init()
			},
			checkConfirm() {
				this.name = ''
				let arr = this.newList.filter((item) => {
					return item.check == true
				})
				let labArr = [];
				let valArr = []
				arr.forEach((item) => {
					labArr.push(item[this.labName])
					valArr.push(item[this.valName])
				})
				this.name = labArr.join();
				this.$emit('confirm',valArr.join())
				this.checkBoxShow = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.view{
		width: 100%;
	}
	.check-btn{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.check-view{
		padding: 10rpx 40rpx;
	}
	.scroll-y{
		height: 500rpx;
		overflow: auto;
		line-height: 50rpx;
	}
</style>
