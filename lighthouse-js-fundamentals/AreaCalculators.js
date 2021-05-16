function calculateRectangleArea(length,width){
  if(length > 0 && width > 0){
  return length * width
  }
}

function calculateTriangleArea(base,height) { 
  if(base > 0 && height > 0){
  return base*height*0.5
  }
}

function calculateCircleArea(radius) {
  if(radius > 0){
  return Math.PI * radius * radius
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined