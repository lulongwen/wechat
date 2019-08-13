function getRandomColor() {
  const rgb = [];

  for(let i=0; i<3;++i) {
    let color = Math.floor( Math.random()*256 ).toString(16);
    
    color = color.length===1 ? '0'+ color : color;
    rgb.push(color);
  }
  return '#'+ rgb.join('')
}

Page({
  data: {
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ],
  },
  inputValue: '',
  onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  bindInputBlur(ev) {
    this.inputValue = ev.detail.value;
  },

  bindButtonTap(ev) {
    let self = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        self.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  videoErrorCallback(ev) {
    console.log('视频错误', ev.detail.errMsg);
  }
  
})