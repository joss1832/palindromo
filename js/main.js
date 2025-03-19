function palindromo (palabra){
     palabra = palabra.toLowerCase()
    return palabra === palabra.split('').reverse().join('');
}

console.log(palindromo('josue'))




function palindromo_for (palabra){
    palabra= palabra.toLowerCase()
    invertido=''
    for (let i=palabra.length -1; i>=0; i-- ){
        invertido+=palabra[i];
    }
    return invertido===palabra;
}

console.log(palindromo_for('ana'))