valor1=Number(prompt("ingresa el primer valor: "));
valor2=Number(prompt("ingresa e segundo valor: "));
class Calculadora {
    areacuadrado(valor1, valor2){
        return "el area del cuadrado es : "+ (valor1 * valor2);
    }
    areaRectangulo(valor1, valor2){
        return "el area del rectangulo :" + (valor1 * valor2);
    }
    areaTriangulo(valor1,valor2){
        return "el area del triangulo :"+((valor1 * valor2)/2);
    }
    
ejecutar(valor1, valor2, opcion) {
    let resultado = "";
    switch (opcion) {
        case "areaCuadrado":
            resultado=this.areacuadrado(valor1,valor2);
            break;
        case "areaRectangulo":
        resultado =this.areaRectangulo(valor1,valor2);
            break;
            case "areaTriangulo":
                resultado=this.areaTriangulo(valor1, valor2);
                break;
        default:
            break;
        }

        console.log(resultado);
    }
}
let ObjCalculadora=new Calculadora();
ObjCalculadora.ejecutar(valor1,valor2,"areaCuadrado");
ObjCalculadora.ejecutar(valor1,valor2,"areaRectangulo");
ObjCalculadora.ejecutar(valor1,valor2,"areaTriangulo");
