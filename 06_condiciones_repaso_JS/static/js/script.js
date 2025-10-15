console.log("conexion correcta");

/* 1️⃣ Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.


Si tiene entre 13 y 17 → “Eres adolescente”.


Si tiene 18 o más → “Eres adulto”.


📘 Práctica: uso de rangos con if, else if, else.
*/

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad < 13) {
        alert("Eres un niño");
    } else if (edad >= 13 && edad < 18) {
        alert("Eres un Adolecente")
    } else if (edad >= 18)
        alert("Eres un Adulto")
}



/*2️⃣ Validar contraseña exacta
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.


Si no, muestra “Acceso denegado”.


📘 Práctica: comparación exacta (===). */

function validarContraseña() {
    let Contraseña = prompt("Ingresar Contraseña");
    if (Contraseña == 12345) {
        alert("Acceso Permitido");
    } else
        alert("Acceso Denegado")
}



/*3️⃣ Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.


Si no → “No contiene la letra E”. */

function verificarLetra() {
    let palabra = prompt("Ingresar Palabra")
    if (palabra.toLowerCase().includes('e')) {
        alert("La palabra Contiene la letra e.")
    } else {
        alert("La palabra no contiene la letra e.")
    }
}


/*4️⃣ Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.

Si el segundo es mayor → “El segundo número es mayor”.

Si son iguales → “Son iguales”.*/

function compararNumeros() {
    let num1 = parseInt(prompt("ingrese el primer numero"));
    let num2 = parseInt(prompt("ingrese el segundo numero"));
    if (num1 > num2) {
        alert("el primer numero es mayor")
    } else if (num1 < num2) {
        alert("el segundo numero es mayor")
    }else if (num1 == num2) {
        alert("Ambos son iguales")
    }
}


/*5️⃣ Determinar si el número es par o impar
Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.

Si no → “Número impar”.

📘 Práctica: uso del operador módulo %.*/


function parImpar() {
    let par = parseInt(prompt("Ingresar numero")); {
        if (par % 2 == 0) {
            alert("tu numero es par")
        } else {
            alert("tu numero es impar")
        }
    }
}

/*6️⃣ Revisar palabra inicial
Pide una palabra.
Si empieza con la letra “A” o “a” → “Empieza con A”.

Si no → “No empieza con A”.

💡 Puedes usar:
if (palabra[0].toLowerCase() === 'a') { ... }*/

function palabraInicial() {
    let palabra = prompt("Ingresar Palabra")
    if (palabra[0].toLowerCase().includes('a')) {    /*toLowerCase hace las letras en minusculas*/
        alert("La palabra empieza con la letra a.")
    } else {
        alert("La palabra no empieza con la letra a.")
    }
}

/*7️⃣ Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.

Si es entre 10 y 25 → “Clima templado”.

Si es mayor o igual a 26 → “Hace calor”.

📘 Práctica: comparaciones encadenadas.*/


function temperaturaAmbiente() {
    let temperatura = parseInt(prompt("ingresar temperatura actual"));
    if (temperatura < 10) {
        alert("hace frío")
    } else if (temperatura >= 10 && temperatura <= 25) {
        alert("esta fresco")
    } else if (temperatura >= 26) {
        alert("hace calor")
    }
}

/*8️⃣ Nombre reconocido
Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.

Si el nombre es “Ely” → “Hola, mamá 🌷”.

En cualquier otro caso → “Hola, visitante”.

📘 Práctica: varias condiciones exclusivas. */


function nombreReconocido() {
    let nombre = prompt("ingresar nombre");
    if (nombre == "dany") {
        alert("Hola Profesor")
    }
    else if (nombre == "Ely") {
        alert("Hola Mamá")
    }
    else {
        alert("Hola, visitante")
    }

}


/*9️⃣ Nota de evaluación
Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.

Si es menor que 4 → “Reprobado”.

Si está fuera del rango 1–7 → “Nota inválida”.

📘 Práctica: validaciones con límites.*/

function notaEvaluacion() {
    let nota = parseInt(prompt("Ingresar nota"));
    if (nota >= 1 && nota < 4) {
        alert("Reprobaste")
    }
    else if (nota >= 4 && nota <= 7) {
        alert("Aprobado")
    }
    else {
        alert("Nota invalida")
    }
}


/*🔟 Verificar si contiene una palabra clave
Pide una frase.
Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.

Si no → “No contiene la palabra clave”.

💡 Usa:
if (frase.toLowerCase().includes('jesús')) { ... }*/

function palabraClave() {
    let palabra = prompt("Ingresar palabra");
    if (palabra.toLowerCase().includes('jesus')) {
        alert("contiene la palabra clave")
    } else {
        alert("no contiene la palabra clave")
    }
}
