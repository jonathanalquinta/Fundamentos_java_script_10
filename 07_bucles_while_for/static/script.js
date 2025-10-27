console.log("Conexion Exitosa...")

/*contar numeros del 10 al 1
*/

//creacion funcion bucle while
function ejecutarWhile() {
    let resultado = "El resultado es:";
    let count = 10;
    while (count > 0) {
        resultado += ` ${count}`;
        console.log(count);
        count--
    }
    alert(resultado);
}

function ejecutarFor() {
    let resultado = "el resultado es:";
    //inicio bucle
    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`;
    }
    alert(resultado);
}



//ejercicios 

/*1️⃣ Bucle while: Imprimir del 1 a n (n es ingresado por teclado).   alert(resultado);    let resultado = "El resultado es:";
Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.*/

function contarHastaN() {
    let resultado = "contamos:"
    let n = parseInt(prompt("ingresar numero"));
    let contador = 1;
    while (contador <= n) {
        console.log(contador)
        alert(contador)
        contador++;
    }
}

/*2️⃣ Bucle while: Cuenta regresiva del n al 1 (n es ingresado por teclado)
Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.*/

function cuentaRegresiva() {
    let contador = parseInt(prompt("Ingresar Numero"));
    let resultado = "contamos: "
    while (contador > 0 ) {
        resultado += ` ${contador}`;
        contador--;
    }
    alert(resultado)
}


/*3️⃣ Bucle while: Sumar los n primeros números
Usando un bucle for, calcula la suma de los números n primeros números  muestra el resultado en la consola.*/


function sumarNumeros() {
    let suma = 0;
    let numero = parseInt(prompt("Ingresar numero"));
    let contador = 1;
    let resultado = "Suma: 0";
    while (contador <= numero) {
        suma += contador;
        resultado += ` + ${contador}`;
        contador++
    }
    alert (` ${resultado} = ${suma}`);
}

/*4️⃣ Bucle while: Imprimir múltiplos de 2 del 1 al n (n es el límite de números a encontrar)
Escribe un programa que use un bucle for para imprimir los múltiplos de 2 que hay entre 1 y 10 (inclusive).*/

function imprimirMultiplos(){
    let numero = parseInt(prompt("Ingresar Numero"));
    let count = 1;
    let resultado = "El resultado es: "
    while (count <= numero) {
        count++

        if (count %2 == 0) {
            resultado += `${count}`
        }
    }
    alert(`${resultado}`)
}


/*5️⃣ Bucle for: Tabla de multiplicar
Pide un número al usuario e imprime su tabla de multiplicar del 1 al 10 en un solo alert.

Ejemplo de resultado:
Tabla del 5
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50*/

function tablasMultiplicar() {
    let numero = parseInt(prompt("Ingresar Numero"));
    let tablas = ` Tabla de ${numero}: ` ; 
    for(let i = 1; i <= 10; i++){
         tablas += `\n ${numero} x ${i} = ${numero * i}`
    }
    alert(tablas);
}