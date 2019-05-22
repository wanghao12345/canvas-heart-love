class Love {
  constructor(canvas, point) {
    // 画布
    this.canvas = canvas
    // 位置
    this.point = point
  }

  /**
   * 绘制心形
   */
  draw () {
    if (this.canvas.getContext) {
      // 获取ctx
      let ctx = this.canvas.getContext('2d');
      // 开始路径
      ctx.beginPath();
      // 计算点的路径
      let point1 = [this.point[0], this.point[1] - 40];
      let point2 = [this.point[0] - 25, this.point[1] - 55];
      let point3 = [this.point[0] - 55, this.point[1] - 35];
      let point4 = [this.point[0], this.point[1] + 40];
      let point5 = [this.point[0] + 55, this.point[1] - 35];
      let point6 = [this.point[0] + 25, this.point[1] - 55];



      ctx.scale(5, 5);
      ctx.moveTo(75,40);
      ctx.bezierCurveTo(75,37,70,25,50,25);
      ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
      ctx.bezierCurveTo(20,80,40,102,75,120);
      ctx.bezierCurveTo(110,102,130,80,130,62.5);
      ctx.bezierCurveTo(130,62.5,130,25,100,25);
      ctx.bezierCurveTo(85,25,75,37,75,40);
      ctx.fillStyle = '#e37cab';
      ctx.globalAlpha = 0.8;

      ctx.fill();

    }
  }
}
