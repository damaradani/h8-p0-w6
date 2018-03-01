/*
Buatlah sebuah script.js yang berada relatif di sebelah index.html.
Dengan memanfaatkan children, parentNode, nextElementSibling,
previousElementSibling, dan innerHTML(), buat perubahan berikut di file script.js
untuk memanipulasi halaman HTML kita dan mengubah
nilai berikut dengan mengakses <div> yang sesuai:

<div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
<div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
<div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
<div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
*/

var divEldestParent = document.getElementById("eldest-parent");
var divChild = divEldestParent.children;

divChild[0].innerHTML = 'Diakses Melalui Eldest Parent';

//console.log(divChild[1].getElementsByTagName("div")[0].getElementsByTagName("div")[2]);
    divChild2 = divChild[1].getElementsByTagName("div")[0];
    divChild2.getElementsByTagName("div")[0].innerHTML = "Diakses Melalui a Child";
    divChild2.getElementsByTagName("div")[2].innerHTML = "Diakses Melalui a Child";
    //document.getElementById("a-child").innerHTML = "ID"; 
divChild[2].innerHTML = "Diakses Melalui a Child ";
