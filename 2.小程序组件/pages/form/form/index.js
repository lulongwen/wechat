Page({
	data: {
		pickerHidden: true,
		chosen: ''	
	},
	pickerConfirm(ev) {
		this.setData({
			pickerHidden: true
		});

		this.setData({
			chosen: ev.detail.value
		});
	},

	pickerCancel(ev) {
		this.setData({
			pickerHidden: true
		});
	},

	pickerShow(ev) {
		this.setData({
			pickerHidden: false
		});
	},

	formSubmit(ev) {
		console.log('form submit', ev.detail.value)
	},

	formReset(ev) {
		console.log('form reset', ev.detail.value);

		this.setData({
			chosen: ''
		});
	}
})