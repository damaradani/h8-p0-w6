/*
Buatlah sebuah script.js yang berada relatif di sebelah index.html.
Dengan memanfaatkan getElementById(), getElementsByClassName(),
getElementsByTagName(), innerHTML(), dan teknik looping,
buat perubahan berikut di file script.js untuk memanipulasi halaman HTML kita:

<h1 id="fill-me"></h1> menjadi <h1 id="fill-me">HALO!</h1>
<p className="change-all-of-me"></p> menjadi <p className="change-all-of-me">HALO JUGA!</p>
<h2>Change the Inside of H2!</h2> menjadi <h2>Apa Kabar!</h2>
*/


var h1WithId = document.getElementById("fill-me");
h1WithId.innerHTML = 'HALO!';

var clasChange = document.getElementsByClassName('change-all-of-me');

for(let i = 0; i < clasChange.length; i++){
    clasChange[i].innerHTML = 'HALO JUGA!';
}

document.getElementsByTagName('h2')[0].innerHTML = 'Apa kabar!';
