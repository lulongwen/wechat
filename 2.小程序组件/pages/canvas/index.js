Page({
  errorCallback(ev) {
    console.log('id error', ev.detail.errMsg);
  },
  onReady(ev) {
    // wx.createContext 获取绘图上下文
    const ctx = wx.createCanvasContext('canvas01');

    // 设置要绘制的图形边框颜色
    ctx.setStrokeStyle("#00ff00");

    // 设置绘制图形的线条宽度
    ctx.setLineWidth(5);

    // 绘制一个宽高为200px的矩形
    ctx.rect(0, 0, 200, 200);

    // 勾勒画出边框
    ctx.stroke();

    // 再重新设置即将要绘制的图形边框颜色
    ctx.setStrokeStyle("#ff0000");

    // 同样，重新设置绘制图形的线条宽度
    ctx.setLineWidth(2);

    // 将路径移动到画布中的指定点(160, 100)
    ctx.moveTo(160, 100);

    // 在坐标为点(100, 100)处，顺时针画一个半径为60px的圆
    ctx.arc(100, 100, 60, 0, 2 * Math.PI, true);

    // 将路径移动到画布中的指定点(140, 100)
    ctx.moveTo(140, 100);

    // 在坐标为点(100, 100)处，顺时针画一个半径为40px的半圆
    ctx.arc(100, 100, 40, 0, Math.PI, false);

    // 将路径移动到画布中的指定点(85, 80)
    ctx.moveTo(85, 80);

    // 在坐标为点(80, 80)处，顺时针画一个半径为5px的圆
    ctx.arc(80, 80, 5, 0, 2 * Math.PI, true);

    // 将路径移动到画布中的指定点(125, 80)
    ctx.moveTo(125, 80);

    // 在坐标为点(120, 80)处，顺时针画一个半径为5px的圆
    ctx.arc(120, 80, 5, 0, 2 * Math.PI, true);

    // 勾勒出之前的图形路径
    ctx.stroke();

    // 将前面所有绘制的动作描述画到canvas画布上
    ctx.draw();
  }
})