const fs = require('fs')
//const file = fs.createWriteStream("data.txt")

console.log("-------TP2------");

const array = [2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1,
"python", 12, "ruby", "php", false,]

let variable
function filtrarArray(array,condition) {
   let nuevoArray =[]
switch (condition) {
    case "number":
        variable = 0
       
        break;
    case "string":
            variable = ""
            
            break;
    case "boolean":
            variable = true
            
            break;
    default:
        throw new Error("Ingreso un valor no permitido.");
        break;
}
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] === typeof variable ){
            nuevoArray.push(array[index])
        }
    }
return typeof variable === 'number' ? nuevoArray.sort((a,b)=>a-b) :nuevoArray.sort()
}

try {
    //COMENTAR Y DESCOMENTAR PARA PROVAR LA FUNCION CON 'STRING','NUMBER' AND 'BOOLEAN

    const arrayNumbers = "["+filtrarArray(array,"number").join(" , ")+"]"
    fs.writeFileSync('array.txt', arrayNumbers);

    // const arrayStrings = "["+filtrarArray(array,"string").join(" , ")+"]"
    // fs.writeFileSync('array.txt', arrayStrings);

    // const arrayBooleans = "["+filtrarArray(array,"boolean").join(" , ")+"]"
    // fs.writeFileSync('array.txt', arrayBooleans);

} catch (error) {
console.log("Ocurrio un error, "+error);
}


