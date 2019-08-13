Page({
  data: {
    latitude: 22.540822,
    longitude: 113.934457,
    scale: 16,
    markers: [
      {
        latitude: 22.540822, 
        longitude: 113.934457,
        name: '腾讯大厦',
        callout: {
          content: '气泡气泡气泡气泡气泡',
          color: '#fff',
          fontSize: 15,
          borderRadius: 10,
          bgColor: '#000',
          display: 'ALWAYS'
        },
        label: {
          content: '这是腾讯大厦',
          color: '#333',
          x: 4,
          y: 0,
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 5,
          bgColor: '#fff',
          padding: 2,
          textAlign: 'center'
        }
      }
    ],
    controls: [
      {
        id: 1,
        position: {
          left: 10,
          top: 20,
          width: 30,
          height: 30
        },
        iconPath: "/images/pic/plus.png",
        clickable: true
      },
      {
        id: 2,
        position: {
          left: 10,
          top: 55,
          width: 30,
          height: 30
        },
        iconPath: "/images/pic/minus.png",
        clickable: true
      }
    ]
  },

  tapControl(ev) {
    // 缩放范围
    const scaleLevel = this.data.scale;

    // 放大
    if(ev.controlId ===1) {
      this.setData({
        scale: scaleLevel < 20 ? scaleLevel+1 : 20 
      })
    }
    // 缩小
    else {
      this.setData({
        scale: scaleLevel > 5 ? scaleLevel-1 : 5
      })
    }
  },

  regionChange(ev) {
    console.log('视野变化', ev)
  }
  
})