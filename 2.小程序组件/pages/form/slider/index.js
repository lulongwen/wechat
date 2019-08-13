let obj = {};

for(let i=1; i<5; i++) {
	(function(index){
		obj['slider'+index+'change'] = function(ev) {
			console.log('slider change', index, 'value ', ev.detail.value)
		}
	})(i);
}

Page(obj);