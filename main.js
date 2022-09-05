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

//Creo un array vacio con las distintas alternativas de inversión
let listaInversion = [];

const registrarInversion = () => {
    let tipoDeInversion = prompt('Ingrese \n 1 Plazo Fijo \n 2 Prestamo')
    let importeInversion = Number(prompt('Ingrese importe que desea invertir o solicitar prestado'));

    let inversion ={
        tipo: tipoDeInversion,
        importe: importeInversion
    }
    
    if (inversion.tipo === 1){
        inversion.tipo = 'Plazo Fijo';
    }else if(inversion.tipo === 2){
        inversion.tipo = 'Prestamo';
    }
    
    listaInversion.push(inversion);

    alert('Tipo de inversión ' +inversion.tipo+ ' importe ' +inversion.importe);
}

registrarInversion();