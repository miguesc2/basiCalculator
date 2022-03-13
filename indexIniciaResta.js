var aSuma = document.getElementById("button")
var aResta = document.getElementById("button2")
var aMultiplicacion = document.getElementById("button3")
var aDivision = document.getElementById("button4")
var dobleClick = 0

aSuma.addEventListener("click", suma)
aResta.addEventListener("click", resta)
aMultiplicacion.addEventListener("click", multiplicacion)
aDivision.addEventListener("click", division)
document.getElementById("display").value = 0;

var displayActual = "";
var totalDisplay = 0;
var sumar = false;
var restar = false;
var multiplicar = false
var dividir = false
var primerOperacion = true;

function dNumbers(numeroPulsado) {
  displayActual = (document.getElementById("display").value = displayActual + numeroPulsado);
  dobleClick = 0
  aSuma.disabled = false
  aResta.disabled = false
  aMultiplicacion.disabled = false
  aDivision.disabled = false
}

//SUMA__________________________________________________________________________
function suma() {
  if(dobleClick === 0) {
    if (restar) {
      totalDisplay = totalDisplay - parseInt(displayActual);
      document.getElementById("display").value = totalDisplay;
    } else if(multiplicar) {
      if(displayActual !==0) {
        totalDisplay = totalDisplay * parseInt(displayActual);
        document.getElementById("display").value = totalDisplay;
      } else {
        totalDisplay = totalDisplay
        document.getElementById("display").value = totalDisplay;
      }
    } else if(dividir) {
        if(displayActual !== 0) {
          totalDisplay = totalDisplay / parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;
        } else {
          totalDisplay = totalDisplay;
          document.getElementById("display").value = totalDisplay;
        }
    } else {
      totalDisplay = totalDisplay + parseInt(displayActual);
      document.getElementById("display").value = totalDisplay;
    }

    dobleClick = 1
    aSuma.disabled = true
  }
  
  displayActual = "";
  sumar = true;
  restar = false;
  multiplicar = false
  dividir = false
  primerOperacion = false;
}

//RESTA_________________________________________________________________________
function resta() {
  if(dobleClick === 0) {
    if (primerOperacion == false) {
      if (sumar) {
        totalDisplay = totalDisplay + parseInt(displayActual);
        document.getElementById("display").value = totalDisplay;
      } else if(multiplicar) {
        if(displayActual !== 0) {
          totalDisplay = totalDisplay * parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;
        } else {
          totalDisplay = totalDisplay
          document.getElementById("display").value = totalDisplay;
        }
      } else if(dividir) {
        if(displayActual !== 0) {
          totalDisplay = totalDisplay / parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;  
        } else {
          totalDisplay = totalDisplay;
          document.getElementById("display").value = totalDisplay;
        }
      } else {
        if(displayActual !== 0) {
          totalDisplay = totalDisplay - parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;  
        } else {
          totalDisplay = totalDisplay;
          document.getElementById("display").value = totalDisplay;
        }
      }
    } else {
      totalDisplay = parseInt(displayActual);
      primerOperacion = false;
    }

    dobleClick = 1
    aResta.disabled = true
  }
  
  displayActual = "";
  sumar = false;
  restar = true;
  multiplicar = false
  dividir = false
}

//MULTIPLICAR___________________________________________________________________
function multiplicacion() {
  if(dobleClick === 0) {
    if (primerOperacion == false) {
      if (sumar) {
        totalDisplay = totalDisplay + parseInt(displayActual);
        document.getElementById("display").value = totalDisplay;
      } else if(restar) {
        totalDisplay = totalDisplay - parseInt(displayActual);
        document.getElementById("display").value = totalDisplay;
      } else if(dividir) {
        if(displayActual !== 0) {
          totalDisplay = totalDisplay / parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;
        } else {
          totalDisplay = totalDisplay;
          document.getElementById("display").value = totalDisplay;
        }
      } else {
        if(displayActual !== 0) {
          totalDisplay = totalDisplay * parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;
        } else {
          totalDisplay = totalDisplay;
          document.getElementById("display").value = totalDisplay;
        }
      }
    } else {
      totalDisplay = parseInt(displayActual)
      primerOperacion = false
    }

    dobleClick = 1
    aMultiplicacion.disabled = true
  }

  displayActual = ""
  sumar = false;
  restar = false;
  multiplicar = true
  dividir = false
}

//DIVIDIR_______________________________________________________________________
function division() {
  if(dobleClick === 0) {
    if (primerOperacion == false) {
      if (sumar) {
        totalDisplay = totalDisplay + parseInt(displayActual);
        document.getElementById("display").value = totalDisplay;
      } else if(restar) {
        totalDisplay = totalDisplay - parseInt(displayActual);
        document.getElementById("display").value = totalDisplay;
      } else if(multiplicar) {
        if(displayActual !==0) {
          totalDisplay = totalDisplay * parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;
        } else {
          totalDisplay = totalDisplay;
          document.getElementById("display").value = totalDisplay;
        }
      } else {
        if(displayActual !== 0) {
          totalDisplay = totalDisplay / parseInt(displayActual);
          document.getElementById("display").value = totalDisplay;
        } else {
          totalDisplay = totalDisplay;
          document.getElementById("display").value = totalDisplay;
        }
      }
    } else {
      totalDisplay = parseInt(displayActual)
      primerOperacion = false
    }

    dobleClick = 1
    aDivision.disabled = true
  }

  displayActual = ""
  sumar = false;
  restar = false;
  multiplicar = false
  dividir = true
}

//TOTAL______________________________________________________________________
function resultado() {
  if (sumar) {
    document.getElementById("display").value = totalDisplay + parseInt(displayActual);
    
  } else if (restar) {
    document.getElementById("display").value = totalDisplay - parseInt(displayActual);
    
  } else if (multiplicar) {
    document.getElementById("display").value = totalDisplay * parseInt(displayActual);
    
  } else if (dividir) {
    document.getElementById("display").value = totalDisplay / parseInt(displayActual);
    
  }
  totalDisplay = parseInt(document.getElementById("display").value);
  displayActual = 0;
}
