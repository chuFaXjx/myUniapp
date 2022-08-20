<template>
	<view style="padding: 20px;">
		<!-- cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">导航栏</block>
		</cu-custom -->
		<br />
		<u-button type="primary" text="确定"></u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			disabled: true
		};
	}
};
</script>
