const finalPosition = function(moves){
  let x = 0;
  let y = 0;

  for(let i=0; i < moves.length; i++){
    
    if(moves[i]==='north'){
      y++;
    } else if(moves[i]==='south'){
      y--;
    } else if(moves[i]==='west'){
      x--;
    } else if(moves[i]==='east'){
      x++;
    }
  }
  return [x, y];

  }

  console.log(finalPosition(input));