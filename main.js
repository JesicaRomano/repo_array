//Construyo a través de una class constructor un objeto vacio
class Cliente{
    constructor(nombre, apellido, edad, dni, esCliente){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = Number(edad);
        this.dni = Number(dni);
        this.esCliente = esCliente;
    }
}
//Creo un array vacio
const clientes = [];

//Agrego clientes a mi array
clientes.push(new Cliente("Ramon", "Sanchez", 35, 33256789,  true));
clientes.push(new Cliente("Maria", "Cruz", 42, 28555111, true));
clientes.push(new Cliente("Ana", "Silva", 38, 30111999, true));
clientes.unshift(new Cliente("Juan", "Perez", 25, 39111222, false));
clientes.push(new Cliente("Pedro", "Gomez", 62, 14789456, true));
clientes.push(new Cliente("Carlos", "Gonzalez", 51, 23123423, false));

//Consulto elemento de mi array
console.log(clientes.length);

//Elimino a los no clientes de mi array
clientes.pop();
clientes.shift();

//Recorro mi array de objetos
for(const cliente of clientes){
    console.log(cliente);
}

//Calculadora del interes que otorga un plazo fijo
function plazoFijo(monto, plazo){
    if((monto >30000 && monto <=50000) || (plazo >= 30 && plazo < 60 )){
        return monto*(Math.pow(1+(30/100), plazo/360)-1);
    }else if((monto >50000 && monto <=80000) || (plazo >= 60 && plazo < 90 )){
        return monto*(Math.pow(1+(35/100), plazo/360)-1);
    }
    else if((monto >80000 && monto <=100000) || (plazo >= 90 && plazo < 180 )){
        return monto*(Math.pow(1+(40/100), plazo/360)-1);
    }
    else if((monto >100000 && monto <=150000) || (plazo >= 180 && plazo < 360 )){
        return monto*(Math.pow(1+(45/100), plazo/360)-1);
    }
    else{
        return monto*(Math.pow(1+(50/100), plazo/360)-1);
    }
}
console.log(plazoFijo(35000, 50));
console.log(plazoFijo(35000, 100));
console.log(plazoFijo(85000, 50));
console.log(plazoFijo(35000, 180));
console.log(plazoFijo(100000, 50));
console.log(plazoFijo(150000, 90));
console.log(plazoFijo(35000, 361));
console.log(plazoFijo(180000, 300));