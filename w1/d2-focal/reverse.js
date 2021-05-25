var input = process.argv[2];

function reverse(original) {
  return original.split('').reverse().join('');
}

if (input){
  console.log(reverse(input));
}