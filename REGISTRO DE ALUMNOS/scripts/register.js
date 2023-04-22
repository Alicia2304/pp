let estudiantes=[];
//crear constructor
let contador=0;
//Estudiante nombre, correo, genero, matricula,  campus, calificacion A, calificacion B, calificacion C
function Estudiante(nombre, correo, genero, matricula, campus, califA, califB, califC){
    this.nombre = nombre;
    this.correo = correo;
    this.genero = genero;
    this.matricula = matricula;
    this.campus = campus;
    this.califA=califA;
    this.califB=califB;
    this.califC=califC;
    this.id=contador++;
}
//valores de inputs
function registrar (){
    console.log("Registrando nuevo alumno");
let nombre = document.getElementById("txtnombre").value="";
let correo = document.getElementById("txtcorreo").value="";
let genero = document. getElementById ("txtgenero").value="";
let matricula = document. getElementById("txtmatricula").value="";
let campus = document.getElementById("txtcampus").value="";
let califA = document.getElementById("txtcalifA").value="";
let califB = document.getElementById("txtcalifB").value="";
let califC = document.getElementById("txtcalifC").value="";

 // crear objeto nuevo alumno

    console.log("Registrar alumno");
    let nuevoalumno= new Estudiante(nombre,correo,genero, matricula, campus, califA, califB, califC);
    console.log(nuevoalumno);
    Estudiante.push(nuevoalumno);
    imprimirAlumnos();
    limpiar();
}

function imprimirAlumnos(){
    let row="";
    for(let i=0;i<estudiantes.length; i++){
        let estudiante= estudiantes [i];
        let suma =Number(estudiante.califA)+Number(estudiante.califB)+Number(estudiante.califC);
        row += `
        <tr id="${Estudiante.id}">
            <td>${Estudiante.nombre}</td>
            <td>${Estudiante.califA}</td>
            <td>${Estudiante.califB}</td>
            <td>${Estudiante.califC}</td>
            <td>${(suma/3) .toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="borraralumno(${Estudiante.id});">Borrar</button></td>
        </tr>
        `;
    }
    document.getElementByid("alumnosTabla").innerHTML= row;
}
function limpiar (){
document.getElementById("txtnombre").value="";
document.getElementById("txtcorreo").value="";
document.getElementById("califA").value="";
document.getElementById("califB").value="";
document.getElementById("califC").value="";
}

function borraralumno(identificador){
    document.getElementById(identificador).remove();
    estudiantes.splice(identificador,1); //borrado del arreglo
}

//crear funcion init
function init(){
    //crear tres estudiantes //nombre, correo, genero, matricula,  campus, calificacion A, calificacion B, calificacion C
    let alumno = new Estudiante("Anabel","anabelalvarezn@gmail.com", "Female", "230487","Ensenada",90,70,80);
    estudiantes.push(alumno);  //empuja el elemento
    imprimirAlumnos();
}
//ejecutar funcion init- ejecucion cuando renderiza el HTML
window.onload = init;


