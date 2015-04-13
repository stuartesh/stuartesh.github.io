$("document").ready(function () {
  $.ajax({
    url: "js/json/projects.json",
    beforeSend: function (xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    },
    dataType: 'json',
    type : "GET",
    success: function (data) {
      drawPojectsContent(data.projects);
    },
    error: function (jqXHR, text, error) {
      console.log("Text Status" + text + "\nError: " + error);
    }
  });

  function drawPojectsContent(info) {
    var content = "";
    for (var i = 0; i < info.length; i++) {
      content += (
        "<div class=''>" +
        "<img class='image-responsive' src='" + info[i].img + "' alt='" + info[i].title + "'/>" +
        "<h3 class='title'>" + info[i].title + "</h3>" +
        "<p class='info'>" + info[i].content + "</p>" +
        "</div>"
      );
    };
    console.log(content);
    document.getElementById("latest-projects").innerHTML = content;
  };
})

function checkform() {
  var error = 0;
  var fallos = [];
  var nombre = document.getElementById("name").value;
  var tel = document.getElementById("phone").value;
  var phone = Number(tel);
  var mail = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if(nombre === "" || typeof nombre === "number" ) {
    error = error+(1);
    fallos.push("El campo de nombre no puede estar vacio ni contener números");
  }
  if(typeof phone !== "number" || phone == "") {
    error = error+(1);
    fallos.push("El campo del telefono debe contener solamente numeros");
  }
  if(typeof mail !== "string" || mail == "") {
    error = error+(1);
    fallos.push("El campo de correo debe contener el simbolo '@'");
  }
  if(typeof message !== "string" || message.length < 10 ) {
    error = error+(1);
    fallos.push("Enviame un mensaje asi tendre mas detalle del contacto n.n");
  }
  if(error !== 0) {
    window.alert(fallos.join("\n"));
  } else  {
    window.alert("Gracias por contactarme respondere lo antes posible n.n");
  };
}