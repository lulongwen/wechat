Page({
  data: {
    nodes: [
      {
        name: 'div',
        attrs: {
          class: 'box',
          style: 'line-height: 60px; color: red; padding: 10rpx; border: 1px solid #ddd'
        },
        children: [
          {
            type: 'text',
            text: 'Hello&nbsp; World!'
          }
        ]
      }
    ],
    nodes2: [
      {
        name: 'h2',
        attrs: {
          style: 'color: green'
        },
        children: [
          {
            type: 'text',
            text: '使用微信&nbsp;小程序'
          }
        ]
      }
    ]
  },
  tap() {
    console.log('tap')
  },
  touchstart() {
    console.log('touchstart')
  },
  touchmove(ev) {
    console.log('touchmove', ev)
  },
  touchcancel() {
    console.log('touchcancel')
  },
  touchend() {
    console.log('touchend')
  },
  longtap() {
    console.log('longtap')
  }
})