Page({
	data: {
		focus: false
	},

	bindTextAreaBlur(ev) {
		console.log('textarea blur', ev.detail.value)
	}
})