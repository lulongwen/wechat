var order = ['red', 'yellow', 'blue', 'green', 'pink'];

Page({
  data: {
    toView: 'red',
    scrollTop: 0 // 初始的滚动条位置
  },

  // scroll-view api
  upper(ev) {
    console.log('upper', ev);
  },
  lower(ev) {
    console.log('lower', ev)
  },
  scroll(ev) {
    console.log('scroll', ev)
  },
  tap(ev) {
    for(var i=0, length=order.length; i<length; i++) {
      if(order[i] === this.data.toView) {
        this.setData({
          toView: order[i+1]
        });
        break;
      }
    }
  },
  tapMove(ev) {
    this.setData({
      scrollTop: this.data.scrollTop + 20
    })
  },
})