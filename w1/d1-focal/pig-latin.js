let words = process.argv.slice(2);

const pigLatin = function(){
  let string = '';
  for(let i = 0; i < words.length; i++){
    string = words[i].slice(1)+ words[i][0] + 'ay';
    console.log(string);
  }
};

pigLatin();
