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
        document.getElementById("txtCatPro1").innerHTML=dato.val().Categoria;
        document.getElementById("txtNomPro1").innerHTML=dato.val().Titulo;
      }
      if(dato.key=="Proyecto2"){
        document.getElementById("txtCatPro2").innerHTML=dato.val().Categoria;
        document.getElementById("txtNomPro2").innerHTML=dato.val().Titulo;
      }
      if(dato.key=="Proyecto3"){
        document.getElementById("txtCatPro3").innerHTML=dato.val().Categoria;
        document.getElementById("txtNomPro3").innerHTML=dato.val().Titulo;
      }
      if(dato.key=="Proyecto4"){
        document.getElementById("txtCatPro4").innerHTML=dato.val().Categoria;
        document.getElementById("txtNomPro4").innerHTML=dato.val().Titulo;
      }
      if(dato.key=="Proyecto5"){
        document.getElementById("txtCatPro5").innerHTML=dato.val().Categoria;
        document.getElementById("txtNomPro5").innerHTML=dato.val().Titulo;
      }
      if(dato.key=="Proyecto6"){
        document.getElementById("txtCatPro6").innerHTML=dato.val().Categoria;
        document.getElementById("txtNomPro6").innerHTML=dato.val().Titulo;
      }
    }