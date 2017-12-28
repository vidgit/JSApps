var Polygon=function(sides){
    this.sides=sides;
    this.perimeter=function(){
        let perimeter = 0;
        for(var side of sides){
            perimeter+=side;
        }
        return perimeter;
    }
}

class Rectangle{
  constructor(l,b){
    this.l=l;
    this.b=b;
  }
}

Rectangle.prototype.area=function(){
  return this.l*this.b;
}

class Square extends Rectangle{
  constructor(a){
    super(a,a);
  }
}

console.log(new Square(5).area());
