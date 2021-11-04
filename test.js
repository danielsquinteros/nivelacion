// var nombre = 'daniel';
// console.log(nombre)

// var nombre = 'felipe';
// console.log(nombre)

// var nombre = "Jairo"
// console.log(nombre)

//INICIALIZAR = DECLARAR
// let sexo = "Masculino"
// console.log(sexo)

// //LET NO PUEDO INICIALIZAR PERO SI PUEDO DECLARAR y si puedo el tipo de variable
// sexo = 123
// console.log(sexo)

//INICIALIZAR = DECLARAR
// // NO SE PUEDE INICIALIZAR NO SE PUEDE DECLARAR DE NUEVO Y TAMPOCO SE PUEDE EL TIPO VARIABLE
// const sexo = "Masculino"
// console.log(sexo)

// const nombre = "Daniel"
// const apellido = "Quinteros"

// // let nombre_completo = nombre + ' ' + apellido 
// let nombre_completo = `el nombre es: ${nombre}, el apellido es: ${apellido}`
// console.log(nombre_completo)

// class Persona{
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }
//     obtenerNombre(){
//         return `La persona se llama ${this.nombre} ${this.apellido} y tiene la edad de ${this.edad}`
//     }
// }

// // const personaUno = new Persona("Mauricio","Ojeda", 13)

// // personaUno.name = "Wilson"

// // console.log(personaUno.obtenerNombre())

// class PersonaNacionalidad extends Persona{
//     constructor(nombre, apellido, edad, nacionalidad){
//         super(nombre, apellido, edad);
//         this.nacionalidad = nacionalidad
//     }
//     obtenerNacionalidad(){
//         return `${this.nombre} tiene nacionalidad ${this.nacionalidad} `
//     }
// }

// const daniel = new PersonaNacionalidad("Daniel", "Quinteros", "12" , "Chileno")

// console.log(daniel.obtenerNombre())

// function suma(a, b) {
//     const resultado = a + b;
//     return resultado
// }
// console.log(suma(2,5))

// const resta = (a, b) => {
//     const resultado = a - b;
//     return resultado;
// }
// console.log(resta(2,5))

const validar = (numero1, numero2) => {
    if(numero1 === numero2){
        return `EL ${numero1} es igual al ${numero2}`
    } else if (numero1 > numero2){
        return `EL ${numero1} es mayor al ${numero2}`
    } else {
        return `EL ${numero1} es menor al ${numero2}`
    }
}
// console.log(validar(3,4)) 
// 0 = false
// 1 = true
// existe = true

// const isMember = false;
// console.log("La Cuota es de:  " + (isMember ? "$2.00" : "$10.00"))

// const isMember = true;
// console.log("La Cuota es de:  " + (isMember && "$2.00"))

// const isMember = false;
// console.log("La Cuota es de:  " + (isMember ? "$2.00" : "$10.00"))

const findById = async (id) => {
    const professionaUserId = id
    try {
        const professionaTotalInformation = await findByIdMongoose(id)
        res.status(200).send({
            professionaTotalInformation
        })
    } catch (error) {
        console.log(error)
    }

} 

