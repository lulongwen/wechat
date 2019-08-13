Page({
  data: {
    x: 0,
    y: 0
  },
  tap(ev) {
    console.log('tap', this)
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange(ev) {
    console.log('this is touch change', ev.detail)
  },
  onScale(ev) {
    console.log('this is scale change', ev.detail)
  }
})