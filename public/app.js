 var feeDb;
      $(document).ready( function (){
        var config = {
          apiKey: "AIzaSyChIQbw_7ULm55wqiLauek2SXDviUiHW-4",
          authDomain: "serviciosjuridicostijuan-22adb.firebaseapp.com",
          databaseURL: "https://serviciosjuridicostijuan-22adb.firebaseio.com",
          projectId: "serviciosjuridicostijuan-22adb",
          storageBucket: "serviciosjuridicostijuan-22adb.appspot.com",
          messagingSenderId: "979842342306"
        };
        firebase.initializeApp(config);
        var i6 = "https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto6?alt=media&token=1e325bfe-44f0-4a07-b2d8-5052cd24c14d";
        //addModal("titleModal6","catModal6","modalP6",i6);
        addModals();
        //feeDb = firebase.database().ref().child('Telefono');
        feeDb = firebase.database().ref('base');
        feeDb.on("child_added", datos);
        //feeDb.on("child_changed", updateBase);
        /*console.log("se configuro");
        $("#upTel").click(updateTel);
        $("#upCor").click(updateCor);
        $("#upDir").click(updateDir);*/
      }

    );

      function datos(dato){
        if(dato.key=="Telefono"){
        document.getElementById("telFire").innerHTML=dato.val().val;
      }
      if(dato.key=="Correo"){
        $("#corFire").append("<a href='mailto:"+dato.val().val+"'>"+dato.val().val+"</a>");
      }
      if(dato.key=="Direccion"){
        document.getElementById("dirFire").innerHTML=dato.val().val;
      }
      if(dato.key=="Proyecto1"){
        document.getElementById("catModal1").innerHTML=dato.val().Categoria;
        document.getElementById("titleModal1").innerHTML=dato.val().Titulo;
        document.getElementById("modalP1").innerHTML=dato.val().Descripcion;
      }
      if(dato.key=="Proyecto2"){
        document.getElementById("catModal2").innerHTML=dato.val().Categoria;
        document.getElementById("titleModal2").innerHTML=dato.val().Titulo;
        document.getElementById("modalP2").innerHTML=dato.val().Descripcion;
      }
      if(dato.key=="Proyecto3"){
        document.getElementById("catModal3").innerHTML=dato.val().Categoria;
        document.getElementById("titleModal3").innerHTML=dato.val().Titulo;
        document.getElementById("modalP3").innerHTML=dato.val().Descripcion;
      }
      if(dato.key=="Proyecto4"){
        document.getElementById("catModal4").innerHTML=dato.val().Categoria;
        document.getElementById("titleModal4").innerHTML=dato.val().Titulo;
        document.getElementById("modalP4").innerHTML=dato.val().Descripcion;
      }
      if(dato.key=="Proyecto5"){
        document.getElementById("catModal5").innerHTML=dato.val().Categoria;
        document.getElementById("titleModal5").innerHTML=dato.val().Titulo;
        document.getElementById("modalP5").innerHTML=dato.val().Descripcion;
      }
      if(dato.key=="Proyecto6"){
        document.getElementById("catModal6").innerHTML=dato.val().Categoria;
        document.getElementById("titleModal6").innerHTML=dato.val().Titulo;
        document.getElementById("modalP6").innerHTML=dato.val().Descripcion;
      }
    }

    function addModals(){
      var i1 = "https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto1?alt=media&token=549e0de7-fb76-426c-96e8-3d339d906ed7";
      var i2 = "https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto2?alt=media&token=98a699ea-af9e-4e53-a3dd-7e3230c63a81";
      var i3 = "https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto3?alt=media&token=11da1bb9-42ca-4563-8dd8-419495239011";
      var i4 = "https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto4?alt=media&token=f93092dd-bcd4-4261-a224-6d2094f757a1";
      var i5 = "https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto5?alt=media&token=22a46de4-7d9a-4c68-a6d8-b037dc78a29a";
      var i6 = "https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto6?alt=media&token=1e325bfe-44f0-4a07-b2d8-5052cd24c14d";
      addModal("titleModal1","catModal1","modalP1",i1,"myModal1");
      addModal("titleModal2","catModal2","modalP2",i2,"myModal2");
      addModal("titleModal3","catModal3","modalP3",i3,"myModal3");
      addModal("titleModal4","catModal4","modalP4",i4,"myModal4");
      addModal("titleModal5","catModal5","modalP5",i5,"myModal5");
      addModal("titleModal6","catModal6","modalP6",i6,"myModal6");
    }

    function addModal(title, cat, proy, image, modal){
      $("#body").append("<div class='modal fade' id=\""+modal+"\" role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title' id=\""+title+"\">Modal Header</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><h4 id=\""+cat+"\"></h4></div><div class='modal-body' id=\""+proy+"\"><p>Some text in the modal.</p></div><div class='modal-body'><img class='images' data-toggle='modal' data-target='#myModal'  style='height:250px; width:100%;' src=\""+image+"\" /></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button></div></div>");
    }

/* 
function addModal(){
      $("#body").append("<div class='modal fade' id='myModal' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title' id='titleModal'>Modal Header</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><h4 id='catModal'></h4></div><div class='modal-body' id='modalP6'><p>Some text in the modal.</p></div><div class='modal-body'><img class='images' data-toggle='modal' data-target='#myModal'  style='height:250px; width:100%;' src='https://firebasestorage.googleapis.com/v0/b/serviciosjuridicostijuan-22adb.appspot.com/o/mis_fotos%2Fproyecto6?alt=media&token=1e325bfe-44f0-4a07-b2d8-5052cd24c14d' /></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button></div></div>")
      
    }

*/