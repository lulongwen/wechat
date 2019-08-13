Page({
	data: {
		items: [
			{
				value: 'USA',
				name: '美国'
			},
			{value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'}
		]
	},
	checkboxChange(ev) {
		console.log('chekbox change, value= ', ev.detail.value);

		let items = this.data.items, values = ev.detail.value;
		for(let i=0, len= items.length; i<len; ++i) {
			items[i].checked = false;
			
			for(let j=0, len=values.length; j<len; ++j) {
				if(items[i].value === values[j]) {
					items[i].checked = true;
					break;
				}
			}
		}

		this.setData({
			items
		})
	}
})