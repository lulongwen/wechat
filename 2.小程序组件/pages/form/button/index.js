
var obj = {
	data: {
		defaultSize: 'default',
		primarySize: 'default',
		warnSize: 'default',
		disabled: false,
		plain: false,
		loading: false
	},
	setDisabled() {
		this.setData({
			disabled: !this.data.disabled
		})
	},
	setPlain() {
		this.setData({
			plain: !this.data.plain
		})
	},
	setLoading() {
		this.setData({
			loading: !this.data.loading
		})
	},
	getPhoneNumber(info) {
		console.log('getPhoneNumber', info)
	},
	getInfo(ev) {
		console.log('getInfo', ev)
	},
	getContactInfo(ev) {
		console.log('getContactInfo', ev);
	}
}


var types = ['default', 'primary', 'warn'];
for(let i=0; i< types.length; ++i) {
	let type = types[i];

	(function(type){
		// 箭头函数下使用 this.setData报错
		obj[type] = function() {
			let key = `${type}Size`;
			let changedData = {};
			changedData[key] = this.data[key] === 'default' ? 'mini' : 'default';
			// changedData  {primarySize: 'mini'}
			this.setData(changedData);
		}
	})(type);
}


Page(obj);