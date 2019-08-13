Page({
  takePhoto(ev) {
    const ctx = wx.createCameraContext();
    
    ctx.takePhoto({
      quality: 'high',
      success: res=> {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },

  error(ev) {
    console.log('error',ev.detail)
  }
})