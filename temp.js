const rectangle = { 
	length: 25, 
	width: 20, 
	area: function () { 
		return this.length * this.width 
	} 
} 
const square = new Object(); 
square.side = 10; 
square.area = function () { 
	return this.side * this.side 
}; 
square.side = 20; 
console.log(rectangle, "area: " + rectangle.area()); 
console.log(square, "area: " + square.area());
