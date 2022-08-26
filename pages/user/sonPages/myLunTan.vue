<template>
	<view>
		<text>我创建的论坛</text>
		<view class="">
			<u--image src="../../../static/1.png" width="80px" height="80px" @click="click"></u--image>
			<text>长风破浪会有时，直挂云帆济沧海</text>
		</view>
		<u--input class="input" border="surround" placeholder="请输入论坛名称" v-model="value" @change="change"></u--input>
		<u--textarea v-model="value1" placeholder="请输入论坛简介"></u--textarea>
		<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="10"></u-upload>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			value1: '',
			fileList1: []
		};
	},
	methods: {
		change(e) {
			console.log(e);
		},
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1);
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file);
			let fileListLen = this[`fileList${event.name}`].length;
			lists.map(item => {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				});
			});
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url);
				let item = this[`fileList${event.name}`][fileListLen];
				this[`fileList${event.name}`].splice(
					fileListLen,
					1,
					Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					})
				);
				fileListLen++;
			}
		},
		uploadFilePromise(url) {
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
					filePath: url,
					name: 'file',
					formData: {
						user: 'test'
					},
					success: res => {
						setTimeout(() => {
							resolve(res.data.data);
						}, 1000);
					}
				});
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.input {
	width: 100%;
	height: 30rpx;
	background-color: #fff !important;
}
</style>
