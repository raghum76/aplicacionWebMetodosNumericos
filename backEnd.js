var x1 = parseInt(document.getElementById("x1").value);
var x2 = parseInt(document.getElementById("x2").value);
var x3 = parseInt(document.getElementById("x3").value);
var y1 = parseInt(document.getElementById("y1").value);
var y2 = parseInt(document.getElementById("y2").value);
var y3 = parseInt(document.getElementById("y3").value);
var z1 = parseInt(document.getElementById("z1").value);
var z2 = parseInt(document.getElementById("z2").value);
var z3 = parseInt(document.getElementById("z3").value);
var r1 = parseInt(document.getElementById("r1").value);
var r2 = parseInt(document.getElementById("r2").value);
var r3 = parseInt(document.getElementById("r3").value);
var resultado = 0;

function determinanteFunc(x1, x2, x3, y1, y2, y3, z1, z2, z3) {
    determinante = ((x1 * y2 * z3) + (x2 * y3 * z1) + (x3 * y1 * z2)) - ((x2 * y1 * z3) + (x1 * y3 * z2) + (x3 * y2 * z1)); //Determinante
    return determinante;
}

function resultadoX(y1, y2, y3, z1, z2, z3, r1, r2, r3) {
    resultado = ((r1 * y2 * z3) + (r2 * y3 * z1) + (r3 * y1 * z2)) - ((r2 * y1 * z3) + (r1 * y3 * z2) + (r3 * y2 * z1));
    resultadoX = resultado / determinanteFunc;
    return resultadoX;
}

function resultadoY(x1, x2, x3, z1, z2, z3, r1, r2, r3) {
    resultado = ((x1 * r2 * z3) + (x2 * r3 * z1) + (x3 * r1 * z2)) - ((x2 * r1 * z3) + (x1 * r3 * z2) + (x3 * r2 * z1));
    resultadoY = resultado / determinanteFunc;
    return resultadoY;
}

function resultadoZ(x1, x2, x3, y1, y2, y3, r1, r2, r3) {
    resultado = ((x1 * y2 * r3) + (x2 * y3 * r1) + (x3 * y1 * r2)) - ((x2 * y1 * r3) + (x1 * y3 * r2) + (x3 * y2 * r1));
    resultadoZ = resultado / determinanteFunc;
    return resultadoZ;
}
