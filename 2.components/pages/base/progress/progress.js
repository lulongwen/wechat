
Page({
  data: {
    percentValue: 0
  },
  onLoad() {
    let timer;
    timer = ()=> {
      setTimeout(()=> {
        const value = this.data.percentValue;

        this.setData({
          percentValue: value < 100 ? value+10 : value
        });
        console.log(value)

        if(value >= 100)
          clearInterval(timer)
        else
          timer(); // 递归
      }, 2000);
    }

    timer();
  }
})