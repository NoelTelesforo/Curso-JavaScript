

// Se ejecuta al menos una vez y no importa si se cumple o no la condición


let i = 1; // Inicio

do {
    if(i % 15 === 0) {
        console.log(`${i} FIZZ BUZZ`);
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`);
    }

    i++; // Incremento
} while (i < 100); // Condición