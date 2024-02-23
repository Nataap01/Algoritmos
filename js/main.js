function suma() {


    // explicacion de algoritmo
    alert("algoritmo que realiza una suma entre 2 valores que ingresa el usuario");
    // declaracion de variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    // captamos datos
    A= parseInt(prompt("ingrese el pirmero numero"));
    B= parseInt(prompt("ingrese el segundo numero"));
    // realizamos la operacion
    S= A + B;
    R= A - B;
    M= A * B;
    D= A / B;
    // damos el resultado o respuesta
    alert("el resultado de la suma es " +S)
    
}

function operaciones() {

    alert ("Algoritmo que realiza las tres operaciones basicas entre 2 valores que ingresa el usario");
    
    // declaracion de variables necesarias
    let A = 0;
    let B = 0;

    // captamos datos
    A= parseInt(prompt("ingrese el pirmero numero"));
    B= parseInt(prompt("ingrese el segundo numero"));
    // realizamos la operacion
    R= A - B;
    M= A * B;
    D= A / B;

    alert ("el resultado de la resta es " + R +" el resultado de la multiplicación es " + M +" el resultado de la divición es " + D  );

}


function nCuadrado(){

    //explicacion del algoritmo 
    alert("algoritmo para multiplicar por el cuadrado del numero");
    //declaracion de varibles 
    let N,a=0;
    a=parseInt(prompt("ingrese el numero")); 
    //mostramos la operacion 
    N=a*a
    //mostrados el resultado 
    alert ("El resultado de la operacion es "+ N); 
}   

function nTriangulo(){
    //explicacion del algoritmo
    alert ("Algoritmo para saber el area de un trinagulo");
    //declaracion de variables 
     let A =0;
     let H =0;
     let T =0;
     //captamos Datos
     A=parseInt(prompt("ingrese la base"));
     H=parseInt(prompt("Ingrese la Altura"));
     //mostramos la operacion 

     T= (A*H)/2;
     //mostramos el resultado
     alert("el area del triangulo es" + T)
}

    function conversion(){
        //explicacion 
        alert ("algoritmo para covertir medidas");
        //declaracion de variables 
        let M,Pg,K,Mmi=0;
        //captamos datos 

        M=parseInt(prompt("Ingrese el valor en Metros"));
        //Realizamos operacion
        Pg=39.3*M;
        K=M/1000;
        Mmi=1000*M;
         //Mostramos resultados
        alert ("La conversion de " + M + " metros a kilometros es: " + K + ", a pulgadas es: " + Pg + "y a milimetros es: " + Mmi); 
    }

function numeroMayor(){
    //explicacion 
    alert("algoritmo que determina numero mayor")
    //declaracion de variables
    let J1,J2 =0;
    //capturamos datos
    J1=parseInt(prompt("ingrese el primer numero"));
    J2=parseInt(prompt("Ingrese el segundo numero"));
    //realizamos operacion 
    if (J1==J2) {
        alert ("los valores ingresados son iguales");
    }else if(J1>J2){
        alert ("el numero uno" + J1 + "es maypr que" + J2);
    }else {
        alert ("el numero dos" + J2 + "es mayor que" + J1); 
    }
}

function numeroMenor(){
     //explicacion 
     alert("algoritmo para calcular el numero menor de tres valores");
     //declaracion de variables
     let  N1,N2,N3 = 0;
    //Capturanos los datos 
    N1=parseInt(prompt("INGRESE EL PRIMER NUMERO"));
    N2=parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));
    N3=parseInt(prompt("INGRESE EL TERCER NUMERO"));
    //Realizar operacion
    if((N1==N2) && (N1==N3)){
        alert ("Los valores ingresados son iguales");

    }else if ((N1<N2) && (N1<N3)) { 
        alert (N1 + " Es menor que " + N2 + " "  + N3 );
    }else if ((N2<N1) && (N2<N3)){
        alert(N2 + " Es menor que " + N1 + N3);
    }else if ((N3<N1) && (N3<N2)){
        alert(N3 + " Es menor que " + N1 + N2);
}
}

function promedio(){
    //Explicacion
    alert (" Algortimo para determinar si aprobo o no aprobo"); 
    //declaracion de variables 
    let n1,n2,n3,n4,n5,n6,n7=0;
    //capturamos datos
    n1=parseInt(prompt("ingrese la primera nota"));
    n2=parseInt(prompt("ingrese la segunda nota"));
    n3=parseInt(prompt("ingrese la tercera nota"));
    n4=parseInt(prompt("ingrese la cuarta nota"));
    n5=parseInt(prompt("ingrese la quinta nota"));
    n6=parseInt(prompt("ingrese la sexta nota"));
    n7=parseInt(prompt("ingrese la septima nota"));
    //Realizamos operacion
    P=(n1+n2+n3+n4+n5+n6+n7)/7;
    //Mostramos resultados
    if(P>=6.1){ 
        alert("¡¡¡¡¡Felicitades APROBASTE!!!!!" + P);
    } else{
        alert("¡¡¡¡¡DESAPROBASTE!!!!!");
    }
}

    function Dcompras(){
    //explicacion 
    alert ("Algoritmo para saber el descuento de compras"); 
    alert ("el precio por kilo es de 5000");
    // declaracion de variables 
    let Ck ;
    // capturamos datos
    Ck=parseInt(prompt("ingrese la cantidad de kilos"));
    // realizamos operacion 
    p=Ck*5000;
    descuento0=(P);
    descuento1=(10/100)*p;
    descuento2=(p*15)/100;
    descuento3=(p*20)/100;
    // mostramos resultados 
    if (Ck<=2){
        alert ("Lo siento, no tienes descuento. Debes pagar:" + descuento0);
    }else if(Ck>=3 <6){
        alert("tienes un 10% de descuento, debes pagar:" + descuento1);
    }else if(Ck>=6 <=10){
        alert("tienes un 15% de descuento, debes pagar:" + descuento2); 
    }else {
        alert("Tienes un 20% de descuento, debes pagar" + descuento3); 
    }

    }

   function Ssemanal(){
    const salarioPorHoraNormal = 12500;
        const salarioPorHoraExtra = 18000;
        const horasNormales = 40;
    
        let horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));
    
        let salarioSemana = 0;
    
        if (horasTrabajadas <= horasNormales) {
            salarioSemana = horasTrabajadas * salarioPorHoraNormal;
        } else {
            let horasExtra = horasTrabajadas - horasNormales;
            salarioSemana = (horasNormales * salarioPorHoraNormal) + (horasExtra * salarioPorHoraExtra);
        }
    
        alert("El salario semanal del obrero es: $" + salarioSemana);
    }
  
   

