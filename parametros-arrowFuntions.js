// Cómo pasarle parámetros a una Arrow Function


// Función de Expresión, se crea como una varible
const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

// Devuelve: Aprendiendo JavaScript y Node.Js
aprendiendo('JavaScript', 'Node.Js');




// Arrow Function
// Cuando le pasas solo un parámetro los paréntesis son opcionales

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

// Devuelve: Aprendiendo JavaScript
console.log(aprendiendo2('JavaScript', 'Node.Js'));