
let electrodomesticos = ["heladera","freezer","microondas","lavaplatos","cocina","horno"]
console.log("-----A-----")
console.log(electrodomesticos[2])

console.log("-----B-----")
let elementoExtraido = electrodomesticos.shift()
electrodomesticos.push(elementoExtraido)
console.log(electrodomesticos)

console.log("-----C-----")
let elemento1 = "lavarropas"
let elemento2 = "televisor"
electrodomesticos.push(elemento1,elemento2)
console.log(electrodomesticos)

console.log("-----D-----")
console.log(electrodomesticos.length)

console.log("-----E-----")
let productoBuscado = "Microondas".toLowerCase() //+simulo un prompt.
if (electrodomesticos.includes(productoBuscado)){
    console.log("Producto encontrado.")
}else{
    console.log("El producto no existe.")
}

console.log("-----F-----")
let cadena = electrodomesticos.join(" ")
console.log(cadena)

console.log("-----G-----")
console.log("Cantidad de caracteres: " + cadena.length) //entendi que es cantidad de palabras, pero por las dudas dejo caracteres tambien.
let cadenaPalabras = cadena.split(" ").length
console.log("Cantidad de palabras: " + cadenaPalabras)

console.log("-----H-----")
electrodomesticos[2] = "ventilador"
console.log(electrodomesticos)

console.log("-----I-----")
let nuevoArray = electrodomesticos.join(", ").split(", ")
console.log(nuevoArray)
