//memasukan Array Barang ke dalam cbBarang
var Barang = [
                ["ABC kopi susu", 1500],
                ["ABC mocca", 1400],
                ["GOOD DAY 3 IN 1", 2000],
                ["GOOD DAY FRESH", 1300],
                ["Indocafe coffemix", 1400],
                ["Kapal api", 1350],
                ["TOP KOPI", 2500],
                ["Torabika Oke", 2100],
                ["WHITE KOFFIE", 3000]
             ];

var cbBarang = document.getElementById('cbBarang');

for(var i = 0; i < Barang.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = Barang[i][0];
    opt.value = Barang[i][1];
    cbBarang.appendChild(opt);
}

//Menampilkan harga dari Barang yang dipilih di cbBarang
function cbBarangPriceShow(name){
    document.getElementById("hargaBarang").value = name;
    //console.log(name);
}

//memasukan data ke tabel di bawah
function addBarang(){
    let tbBarang = document.getElementById("tbBarang");
    let row = tbBarang.insertRow(tbBarang.length);

    let namaBarang = document.getElementById("cbBarang").options[document.getElementById('cbBarang').selectedIndex].text ;
    let hargaBarang = document.getElementById("hargaBarang").value;
    let jumlahBarang = document.getElementById("jumlahBarang").value;
    let total = hargaBarang * jumlahBarang;
    //console.log(namaBarang+' '+hargaBarang+' '+jumlahBarang+' '+total);

    row.insertCell(0).innerHTML = namaBarang;
    row.insertCell(1).innerHTML = hargaBarang;
    row.insertCell(2).innerHTML = jumlahBarang;
    row.insertCell(3).innerHTML = total;

    //let grandTotal = 0;
    //grandTotal += total;
    //document.getElementById("txtGrandTot").value += parseInt(total);
    let txtGrandTot = document.getElementById("txtGrandTot").value;
    let grandTot = parseInt(txtGrandTot) + total;
    document.getElementById("txtGrandTot").value = grandTot;
    //console.log(grandTot);

    //alert("Barang Berhasil ditambahkan!");
    document.getElementById("jumlahBarang").value = "";
    document.getElementById("hargaBarang").value = "";
    document.getElementById("cbBarang").selectedIndex = 0;
    //console.log(jumlahBarang);
    //return true;

}

//Menghapus rows Terkahir dari tabel Barang
function delLastBarang() {

    var delBarang = document.getElementById("tbBarang");

    if(delBarang.rows.length == 1){
        return false;
    }else{
        //Mengurangi grand Total Dengan isi cell Terkahir paling kanan dari tabel tbBarang
        let txtGrandTot = document.getElementById("txtGrandTot").value;
        let tbLastLen = document.getElementById("tbBarang").rows.length-1;
        let lastRowCell = document.getElementById("tbBarang").rows.item(tbLastLen).cells.item(3).innerHTML;
        //console.log(lastRowCell);
        let grandTot = parseInt(txtGrandTot) - lastRowCell;
        document.getElementById("txtGrandTot").value = grandTot;

        delBarang.deleteRow(delBarang.rows.length-1);
    }


}


//Mengecek apakah kosong
function cekKosong (){
    let comboBarang = document.getElementById("cbBarang").options[document.getElementById('cbBarang').selectedIndex].value;
    let jmlBarang = document.getElementById("jumlahBarang").value;

    if(comboBarang == "" || comboBarang == undefined){
        alert("Combo Boxx Barang tidak boleh Kosong!");
        return false;
    }else if (jmlBarang == "" || jmlBarang == undefined) {
        alert("Isi dulu jumlah Barang yang dibeli!");
        return false;
    }else{
        addBarang();
    }
}


function hitungKembali(){
    let uang = document.getElementById("txtDuitPembeli").value;
    let grandTot = document.getElementById("txtGrandTot").value;

    if(grandTot == 0){
        alert("Pilih Dulu Barang yang akan dibeli!");
        return false;
    }else if (uang == "" || uang == undefined) {
      alert("Jumlah Uang Pembeli harus di isi!");
      return false;
    }else{
        let kembalian = uang - grandTot;
        if(kembalian < 0){
            alert("Uang Kurang "+kembalian+" Rupiah");
            return false;
        }else{
          document.getElementById("txtKembali").value = kembalian;
          //console.log(kembalian);
        }

    }
}


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)){
        return false;
    }else{
        return true;
    }
}
