/*
clase = marco de trabajo 
objeto= acceso a metodos y atributos de una clase 
los atributos van fuera de los metodos
*/
class Calculadora {
    sumar(valor1, valor2){
        return "la suma es: "+ (valor1 + valor2);
    }
    restar(valor1, valor2){
        return "la resta es:" + (valor1 - valor2);
    }
    multiplicar(valor1,valor2){
        return "la multiplicacon es:"+(valor1 * valor2);
    }
    dividir(valor1, valor2){
        return "la division es:"+(valor1/valor2);
    }

ejecutar(valor1, valor2, opcion) {
    let resultado = "";
    switch (opcion) {
        case "sumar":
            resultado=this.sumar(valor1,valor2);
            break;
        case "restar":
        resultado =this.restar(valor1,valor2);
            break;
            case "multiplicar":
                resultado=this.multiplicar(valor1, valor2);
                break;
                case "dividir":
                    resultado=this.dividir(valor1, valor2);
                    break;
        default:
            break;
        }

        console.log(resultado);
    }
}
let ObjCalculadora=new Calculadora();
ObjCalculadora.ejecutar(8,2,"multiplicar");
ObjCalculadora.ejecutar(8,2,"dividir");
ObjCalculadora.ejecutar(8,2,"restar");
ObjCalculadora.ejecutar(8,2,"sumar");

