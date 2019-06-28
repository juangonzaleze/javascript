
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBORUGZqnPlhUIDYp86BgCWz_n7wUnmSek",
    authDomain: "firstproject-324f5.firebaseapp.com",
    databaseURL: "https://firstproject-324f5.firebaseio.com",
    projectId: "firstproject-324f5",
    storageBucket: "",
    messagingSenderId: "417311923319",
    appId: "1:417311923319:web:ba30ace358cb27f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();

  function registrar() {

    var name = $('#name').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirm_password = $('#confirm_password').val();
    
    if (name == null || name.length < 6){
        $('#alert-error').removeClass('d-none');
        $('#alert-error').html('El nombre debe tener como minimo 6 caracteres');
        return false;
    }
    else if (lastname == null || lastname.length < 6){
        $('#alert-error').removeClass('d-none');
        $('#alert-error').html('El apellido debe tener como minimo 6 caracteres');
        return false;
    }
    else if (email == null || email.length < 6 ){
        $('#alert-error').removeClass('d-none');
        $('#alert-error').html('El correo electronico debe tener como minimo 6 caracteres');
        return false;
    }
    else if(password == null || password.length < 6){
        $('#alert-error').removeClass('d-none');
        $('#alert-error').html('El email debe tener como minimo 6 caracteres');
        return false;
    }
    else if(confirm_password == null || password != confirm_password){
        $('#alert-error').removeClass('d-none');
        $('#alert-error').html('Las contraseñas no coinciden');
        return false;
    }else{
        database.ref('registro').push({
            username: name,
            lastname: lastname,
            email: email,
            password: password,
            confirm_password: confirm_password
        });
        $('#alert-success').removeClass('d-none');
        $('#alert-success').html('Su cuenta se ha creado exitosamente');
    }
  }

  function login() {
    database.ref('registro').on("child_added", function(snapshot, prevChildKey) {
        console.log(snapshot.val());
        registro = snapshot.val();
        console.log(registro.email);
    });
  }
  