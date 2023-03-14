function join(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      str += arr[i];
      if (i !== arr.length - 1) {
        str += ' ';
      }
    }
    return str;
  }
  console.log(join(['Hola', 'soy', 'Luis', 'Alzate'])); // => 'Hola soy Luis Alzate' 