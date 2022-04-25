
//Problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar) // Imprime en consola la primera posicion del arreglo (Testla)
console.log(otherRandomCar) // Imprime en consola la segunda posicion del arreglo (Mercedes)

//Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//console.log(name); Dara un error ya que la variable nombre no esta definida
console.log(otherName); // Imprime en consola el valor en el atributo name (Elon)

//Problema 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);// Imprime en consola el valor de la variable password (12345)
console.log(hashedPassword); // Imprime en consola undefined ya que en el objeto person no existe un atributo password 

//Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first == second);// Imprime en consola el valor el valor flase (2 == 5) -> falso
console.log(first == third);// Imprime en consola el valor el valor true (2 == 2) -> verdadero

//Problema 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; 
const { secondKey } = lastTest; 
const [ ,willThisWork] = secondKey;
console.log(key); // Imprime en consola el valor en el atributo key (value)
console.log(secondKey);// Imprime en consola el valor en el atributo secondKey ([1,5,1,8,3,3])
console.log(secondKey[0]);// Imprime en consola el primer valor del atributo secondKey (1)
console.log(willThisWork);// Imprime en consola el segundo valor del atributo secondKey (5)