var go = {};

go.draw = function() {
  var projects = "";

  return {
      projectsDetail : function(info) {
      var data = JSON.parse(info.responseText);
      var container = document.getElementById("latest-projects");

      for (var i = 0; i < data.projects.length; i++) {
        projects += (
          "<div class='project'>" +
          "<a href='#"+ data.projects[i].modal +"'><img class='image-responsive' src='" + data.projects[i].img + "' alt='" + data.projects[i].title + "'/></a>" +
          "<h3 class='title'>" + data.projects[i].title + "</h3>" +
          "<p class='project-info'>" + data.projects[i].content + "</p>" +
          "</div>"
        );
      }
      container.innerHTML = container.innerHTML + projects;
      }
    }
}();

go.validate = function() {
    
  return {
    fields : function() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var tel = Number(phone);
      var message = document.getElementById("message").value;
      var failureField = document.getElementsByClassName("error");
      var simbols = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);

      if (name < 4 || name.search("[^A-Z a-z]") >= 0) {
        failureField[0].innerHTML = "Ingresa tu nombre y apellido sin caracteres especiales.";
        setTimeout( function() { failureField[0].innerHTML = ""; }, 3000);

      }else if(simbols.test(email) == false){
        failureField[1].innerHTML = "El correo debe llevar el simbolo de '@' y '.com' al final.";
        setTimeout( function() { failureField[1].innerHTML = ""; }, 3000);

      }else if(tel.length < 8) {
        failureField[2].innerHTML = "Solo se admiten Numeros en este campo y con un minimo de 8 dijitos";
        setTimeout( function() { failureField[2].innerHTML = ""; }, 3000);
        console.log(tel);

      }else if(message.length < 10) {
        failureField[3].innerHTML = "Manda un mensaje asi será mas facil contactarte";
        setTimeout( function() { failureField[3].innerHTML = ""; }, 3000);

      }else if (name == null || name.length == 0 || email == null || email.length == 0 || phone == null || phone.length == 0 || message == null || message.length == 0) {
          window.alert("Es necesario que completes los espacios en blanco para continuar verifica que todo esta en su lugar n.n.");
      }
      else{
        alert("Gracias! Su informacion a sido enviada le contactare lo mas pronto posible");
        document.getElementById("contactForm").submit();
      }
    }
  }
}();
  
function ajaxRequest(){
  var xmlhttp;

  if (window.XMLHttpRequest) { // request for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else {// request for  IE5, IE6+
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 &&  xmlhttp.status == 200) {  
        go.draw.projectsDetail(xmlhttp);
      }
    }
    xmlhttp.open("GET", "js/projects.json", true);
    xmlhttp.send();
  }
ajaxRequest();