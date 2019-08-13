Page({
	data: {
		checkboxItems: [
			{name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'}
		],
		radioItems: [
			{name: 'USA', value: '美国', checked: 'true'},
      {name: 'CHN', value: '中国'}
		],
		hidden: false
	},
	checkboxChange(ev) {
		let checked = ev.detail.value;
		let changed = {};

		for(let i=0, len= this.data.checkboxItems.length; i<len; i++) {
			if( checked.indexOf( this.data.checkboxItems[i].name ) !== -1 ) {
				changed['checkboxItems['+i+'].checked'] = true;
			}
			else {
				changed['checkboxItems['+i+'].checked'] = false;
			}
		}
		
		this.setData(changed);
	},

	radioChange(ev) {
		let checkd = ev.detail.value;
		let changed = {};
		let item = this.data.radioItems;

		for(let i=0, len= item.length; i<len; i++) {
			if( checkd.indexOf(item[i].name) !== -1 ){
				changed['radioItems['+i+'].checked'] = true;
			}
			else {
				changed['radioItems['+i+'].checked'] = false;
			}
		}
		
		this.setData(changed);
	},

	tapEvent(ev) {
		console.log('Button clickd', ev)
	}
})