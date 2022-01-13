//01. Función siempre hambriento
function siempreHambriento(arreglo){
    let count = 0;
    for ( let i = 0; i < arreglo.length; i++){
        if ( arreglo[i] == "comida"){
            count++;
            console.log("Delicioso");
        }
    }
    if (count == 0){
    console.log("Tengo Hambre");
    }
}
//let alwaysHungry =  [3.14,"comida", "paste",true, "comida"];
let alwaysHungry = [4,1,5,7,2];
let resultado = siempreHambriento(alwaysHungry);
console.log(resultado);

//02.Filtro paso a paso
function highPass(arr, cutoff){
    let filteredArr = [];
    for (let i = 0; i< arr.length; i++ ){
        if (cutoff < arr[i]){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
let resultado2 = highPass([6,8,3,10,-2,5,9],5);
console.log(resultado2);

//03. Mejor que el promedio
function betterThanAverage(arr) {
    let sum = 0;
    let prom = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i] ;
    }
    prom = sum / arr.length;
    console.log("El promedio es: " + parseInt(prom));
    var count = 0
    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= prom){
            count++;
        }
    }
    return count;
}
var resultado3 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(resultado3);

//04. Arreglo invertido
function reverse(arr) {
    arr.reverse();
    return arr;
}

let resultado4 = reverse(["a", "b", "c", "d", "e"]);
console.log(resultado4);

//05. Arreglo de Fibonacci
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [0, 1];
    let i = 0;
    let num = 0;
    //n-2 por que ya hay 2 valores en el fibArray
    while ( i < n-2){
        num = fibArr[i] + fibArr[i+1];
        fibArr.push(num);
        console.log(num);
        i++;
    }
    return fibArr;
}
let resultado5 = fibonacciArray(10);
console.log(resultado5); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]