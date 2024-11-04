let peliculas = ["Turno de dia","30 noches con mi ex","Bestia","El monte","Top gun maverick","Elvis","Thor: amor y trueno"]
let ultimaPelicula = peliculas.pop()
peliculas.unshift(ultimaPelicula.toUpperCase())
console.log(peliculas)

let estrenos = ["Counter-Strike","NOP","Vertigo","Nick","Avatar"]
cadenaEstrenos = estrenos.join(" ")
console.log(cadenaEstrenos)

todasPeliculas = peliculas.concat(estrenos)
console.log(todasPeliculas)