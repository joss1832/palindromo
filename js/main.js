function palindromo (palabra){
     palabra = palabra.toLowerCase()
    return palabra === palabra.split('').reverse().join('');
}

console.log(palindromo('josue'))
