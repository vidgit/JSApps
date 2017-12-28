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

class Square{
  constructor(a){
    super(a,a);
  }
}
