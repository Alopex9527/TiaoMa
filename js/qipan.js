var object = {
	//初始化
	init: function() {
		//棋盘外框
		var canvas1 = document.getElementById("canvas1");
		this.ctx = canvas1.getContext("2d");
		this.ctx.lineWidth = 5;
		this.ctx.strokeStyle = "brown";
		this.ctx.strokeRect(3, 3, 800, 900);

		this.row();
		this.cols();
		this.drawFont();
		//中心点一（100,200）
		this.center(100, 200);
		//中心点二（700,200）
		this.center(700, 200);
		//中心点三（5,300）
		this.center(5, 300);
		//中心点四（200,300）
		this.center(200, 300);
		//中心点五（400,300）
		this.center(400, 300);
		//中心点六（600,300）
		this.center(600, 300);
		//中心点七（800,300）
		this.center(800, 300);
		//中心点八（800,600）
		this.center(800, 600);
		//中心点九（600,600）
		this.center(600, 600);
		//中心点十（400,600）
		this.center(400, 600);
		//中心点十一（200,600）
		this.center(200, 600);
		//中心点十二（5,600）
		this.center(5, 600);
		//中心点十三（700,700）
		this.center(700, 700);
		//中心点十四（100,700）
		this.center(100, 700);
		
	},
	
		
	//此方法用来画棋盘线
	LineDrawing: function(mx, my, lx, ly) {
		this.ctx.beginPath();
		this.ctx.moveTo(mx, my);
		this.ctx.lineTo(lx, ly);
		this.ctx.stroke();
	},
	//棋盘行
	row: function() {
		for(var i = 100; i <= 800; i += 100) {
			this.ctx.beginPath();
			this.ctx.moveTo(5, i);
			this.ctx.lineTo(800, i);
			this.ctx.stroke();
		}
	},
	//棋盘列
	cols: function() {
		for(var i = 100; i <= 700; i += 100) {
			this.ctx.beginPath();
			this.ctx.moveTo(i, 5);
			this.ctx.lineTo(i, 900);
			this.ctx.stroke();
		}
		//清除指定的矩形区域
		this.ctx.clearRect(5, 402, 795, 95);
		//斜线
		this.LineDrawing(300, 5, 500, 200);
		this.LineDrawing(300, 705, 500, 900);
		//反斜线
		this.LineDrawing(500, 5, 300, 200);
		this.LineDrawing(500, 705, 300, 900);
	},
	//坐标的中心点
	center: function(x, y) {
		this.ctx.lineWidth = 5;
		//中心点一（100,200）
		//左上
		this.LineDrawing(x - 10, y - 30, x - 10, y - 10);
		this.LineDrawing(x - 10, y - 10, x - 30, y - 10);
		//右上
		this.LineDrawing(x + 10, y - 30, x + 10, y - 10);
		this.LineDrawing(x + 10, y - 10, x + 30, y - 10);
		//左下
		this.LineDrawing(x - 10, y + 30, x - 10, y + 10);
		this.LineDrawing(x - 10, y + 10, x - 30, y + 10);
		//右下
		this.LineDrawing(x + 10, y + 30, x + 10, y + 10);
		this.LineDrawing(x + 10, y + 10, x + 30, y + 10);
	},
	drawFont: function() {
		this.ctx.lineWidth = 1;
		//绘制文字
		this.ctx.font = "60px microsoft yahei";
		this.ctx.save(); //保存点
		//将坐标中心作为起启点
		this.ctx.translate(canvas1.width / 2, canvas1.height / 2);
		var radian = Math.PI / 2; // 弧度制 Math.PI=π
		this.ctx.rotate(radian); // 旋转画布绘制刻度
		//填充

		this.ctx.fillText("楚", -30, -270);
		this.ctx.fillText("河", -30, -150);
		this.ctx.restore(); //恢复到保存点
		this.ctx.save();
		//将坐标中心作为起启点
		this.ctx.translate(canvas1.width / 2, canvas1.height / 2);
		var radian = Math.PI / -2;
		this.ctx.rotate(radian);
		this.ctx.fillText("汉", -30, -270);
		this.ctx.fillText("界", -30, -150);
		this.ctx.restore();
	}

};


object.init();
