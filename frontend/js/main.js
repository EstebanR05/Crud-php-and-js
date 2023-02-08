var aplication = new function () {

  //variables
  this.url = "http://localhost/Crud%20php%20and%20js/backend/php/empleado";
  this.tableEmpleados = document.getElementById("empleados");

  //metodos
  this.seeDataTable= function(){
    var datos = "";
    datos = "<td>Esteban</td><td>e05072003@gmail.com</td><td>masculino</td><td>ventas</td><td>si</td><td></td><td></td>";

    // fetch(url).then(r => r.json()).then(
    //   (resp) => {
    //     console.log(resp);
    //   }
    // );

    return this.tableEmpleados.innerHTML = datos;
  }

}

//ejecutar
aplication.seeDataTable();