<template>
	<view>
		<u-tabs
			class="tab"
			:activeStyle="{
				color: '#303133',
				fontWeight: 'bold',
				transform: 'scale(1.05)'
			}"
			:list="chuFangList"
			@click="changeTab"
		></u-tabs>
		<view class="" v-if="current == 0">全部处方</view>
		<view class="" v-if="current == 1">进行中</view>
		<view class="" v-if="current == 2">已结束</view>
		<view class="" v-if="current == 3">待评价</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			chuFangList: [{ name: '全部处方' }, { name: '进行中' }, { name: '已结束' }, { name: '待评价' }],
			current: 0 //切换tabs内容
		};
	},
	methods: {
		changeTab(index) {
			this.current = index.index;
		}
	}
};
</script>

<style lang="scss">
.tab {
	display: flex;
	justify-content: space-between;
}
</style>