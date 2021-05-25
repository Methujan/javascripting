const x = process.argv.slice(2);

const reverse = function() {
  let string = '';

  for (let i = 0; i < x.length; i++) {

    for (let j = x[i].length - 1; j >= 0; j--) {
      string += x[i][j];
    }
    string = string + '\n';
  }
  console.log(string);
};

reverse();