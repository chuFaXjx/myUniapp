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
			@click="click"
		></u-tabs>
	</view>
</template>

<script>
export default {
	data() {
		return {
			chuFangList: [{ name: '全部处方' }, { name: '进行中' }, { name: '已结束' }, { name: '待评价' }]
		};
	}
};
</script>

<style lang="scss">
.tab {
	display: flex;
	justify-content: space-between;
}
</style>
