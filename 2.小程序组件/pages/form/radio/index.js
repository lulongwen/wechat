Page({
	data: {
		items: [
			{value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'}
		]
	},

	radioChange(ev) {
		console.log('radio change', ev.detail.value)

		let items = this.data.items;
		for(let i=0, len=items.length; i<len; i++) {
			items[i].checked = items[i].value === ev.detail.value;
		}

		this.setData({
			items
		})
	}
})