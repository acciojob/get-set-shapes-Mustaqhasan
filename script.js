//complete this code
class Rectangle {
	constructor(width, height){
		this.width=width;
		this.height=height;
	}

	get width(){
		return this.width;
	}

	get height(){
		return this.height;
	}

	getArea(){
		let area=this.width * this.height;
		return area;
	}
}

class Square extends Rectangle {
	constructor(side){
		super();
		this.side=side;
		this.width=side;
		this.height=side;
	}
	getPerimeter(){
		let perimeter=4*this.side;
		return perimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
