function cekValidasi(){
  var textUser = document.getElementById("username");
  var textPass = document.getElementById("password");
  var textConPass = document.getElementById("conPass");
  var textEmail = document.getElementById("email");
  var textConEmail = document.getElementById("conEmail");

  if(textUser.value == "" || textUser.value == undefined){
      alert("Username tidak boleh kosong!");
      textUser.focus();
      return false;
  }else if (textPass.value == "" || textPass.value == undefined) {
      alert("Password harus diisi!");
      textPass.focus();
      return false;
  }else if (textConPass.value == "" || textConPass.value == undefined) {
      alert("Confirm Password harus diisi!");
      textConPass.focus();
      return false;
  }else if (textEmail.value == "" || textEmail.value == undefined) {
      alert("Email harus diisi!");
      textEmail.focus();
      return false;
  }else if (textConEmail.value == "" || textConEmail.value == undefined) {
      alert("Confirm Email harus diisi!");
      textConEmail.focus();
      return false;
  }else {

      if(textPass.value !== textConPass.value){
          alert("Password tidak sama!");
          return false;
      }else if (textEmail.value !== textConEmail.value) {
          alert("Email tidak sama!");
          return false;
      }else{
          alert("Registrasi Berhasil!");
          textUser.value = '';
          textPass.value = '';
          textConPass.value = '';
          textEmail.value = '';
          textConEmail.value = '';
          return true;
      }
  }
}

/*
if (document.getElementById('FileName').value==""
             || document.getElementById('FileName').value==undefined)
            {
                alert ("Please Enter a File Name");
                return false;
            }
            return true;
*/
