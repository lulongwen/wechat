Page({
  data: {
    background: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    circular: false, // 衔接滑动
    duration: 300
  },

  // swiper api
  change(ev) {
    console.log('change', ev);
  },
  changeIndicatorDots(ev) {
    console.log(`切换指示点`);
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(ev) {
    console.log(`切换自动播放`);
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(ev) {
    console.log(`调整自动播放间隔为：${ev.detail.value} ms`);
    this.setData({
      interval: ev.detail.value
    })
  },
  durationChange(ev) {
    console.log(`调整幻灯片切换时长为：${ev.detail.value} ms`);
    this.setData({
      duration: ev.detail.value
    })
  },
  animationfinish(ev) {
    console.log('animationfinish', ev)
  }
})