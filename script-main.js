//<div class="header">
var divHeader = document.createElement("div");
var divHeaderClass = document.createAttribute("class");
divHeaderClass.value = "header";
divHeader.setAttributeNode(divHeaderClass);
document.body.appendChild(divHeader);

    //<h1>WARUNG MAMIH</h1>
    var h1Header = document.createElement("h1");
    h1Header.innerHTML = "WARUNG MAMIH";
    divHeader.appendChild(h1Header);

    //<p>TOko Kecil - kecilan.</p>
    var pHeader = document.createElement("p");
    pHeader.innerHTML = "Toko Kecil - kecilan.";
    divHeader.appendChild(pHeader);


//<div class="topnav">
var divTopNav = document.createElement("div");
var topNavClass = document.createAttribute("class");
topNavClass.value = "topnav";
divTopNav.setAttributeNode(topNavClass);
document.body.appendChild(divTopNav);

    //<a href="#">Link</a>
    var topNavA1 = document.createElement("a");
    var a1Href = document.createAttribute("href");
    a1Href.value = "#";
    topNavA1.innerHTML = "Tambah Barang";
    topNavA1.setAttributeNode(a1Href);
    var a1onClick = document.createAttribute("id");
    a1onClick.value = "showTambah";
    topNavA1.setAttributeNode(a1onClick);
    divTopNav.appendChild(topNavA1);

    //<a href="#">Link</a>
    var topNavA2 = document.createElement("a");
    var a2Href = document.createAttribute("href");
    a2Href.value = "#";
    topNavA2.innerHTML = "Link";
    topNavA2.setAttributeNode(a2Href);
    divTopNav.appendChild(topNavA2);

    //<a href="#">Link</a>
    var topNavA3 = document.createElement("a");
    var a3Href = document.createAttribute("href");
    a3Href.value = "#";
    topNavA3.innerHTML = "Link";
    topNavA3.setAttributeNode(a3Href);
    divTopNav.appendChild(topNavA3);


//<div class="row">
var divRow = document.createElement("div");
var divRowClass = document.createAttribute("class");
divRowClass.value = "row";
divRow.setAttributeNode(divRowClass);

document.body.appendChild(divRow);

    //<div class="column side"> sisi kiri
    var divSideCol1 = document.createElement("div");
    var col1Class = document.createAttribute("class");
    col1Class.value = "column side";
    divSideCol1.setAttributeNode(col1Class);
    divRow.appendChild(divSideCol1);

    //<div class="column middle"> di tengah isi content
    var divMidCol = document.createElement("div");
    var midColClass = document.createAttribute("class");
    midColClass.value = "column middle";
    divMidCol.setAttributeNode(midColClass);
    divRow.appendChild(divMidCol);

        //<div class="card">
        var divCard = document.createElement("div");
        var divCardClass = document.createAttribute("class");
        divCardClass.value = "card";
        divCard.setAttributeNode(divCardClass);
        divMidCol.appendChild(divCard);

            //<h2>Hitung Pembelian</h2>
            var cardH2 = document.createElement("h2");
            cardH2.innerHTML = "Hitung Pembelian";
            divCard.appendChild(cardH2);

            //<p>
            var cardP = document.createElement("p");
            divCard.appendChild(cardP);

                //<select name="cbBarang" id="cbBarang" onchange="cbBarangPriceShow(this.options[this.selectedIndex].value)">
                var pSelect = document.createElement("select");
                var pSelName = document.createAttribute("name");
                pSelName.value = "cbBarang";
                pSelect.setAttributeNode(pSelName);
                var pSelId = document.createAttribute("id");
                pSelId.value = "cbBarang";
                pSelect.setAttributeNode(pSelId);
                var pSelOnChange = document.createAttribute("onchange");
                pSelOnChange.value = "cbBarangPriceShow(this.options[this.selectedIndex].value)";
                pSelect.setAttributeNode(pSelOnChange);
                    //<option selected="selected" disabled>Pilih Barang</option>
                    var pSelOpt = document.createElement("option");
                    var selOptSel = document.createAttribute("selected");
                    selOptSel.value = "selected";
                    pSelOpt.setAttributeNode(selOptSel);
                    var selOptDisabled = document.createAttribute("disabled");
                    pSelOpt.setAttributeNode(selOptDisabled);
                    pSelOpt.innerHTML = "Pilih Barang";
                    pSelect.appendChild(pSelOpt);
                cardP.appendChild(pSelect);

                //<input type="text" id="hargaBarang" disabled/>
                var pInputHarga = document.createElement("input");
                var inHargaType = document.createAttribute("type");
                inHargaType.value = "text";
                pInputHarga.setAttributeNode(inHargaType);
                var inHargaId = document.createAttribute("id");
                inHargaId.value = "hargaBarang";
                pInputHarga.setAttributeNode(inHargaId);
                var inHargaDisabled = document.createAttribute("disabled");
                pInputHarga.setAttributeNode(inHargaDisabled);
                cardP.appendChild(pInputHarga);

                //<label for="jumlahBarang">Masukan Jumlah Barang: </label>
                var pLabelJml = document.createElement("label");
                var lblJmlFor = document.createAttribute("for");
                lblJmlFor.value = "jummlahBarang";
                pLabelJml.setAttributeNode(lblJmlFor);
                pLabelJml.innerHTML = "Masukan Jumlah Barang: ";
                cardP.appendChild(pLabelJml);

                //<input type="text" id="jumlahBarang" onkeypress="return isNumberKey(event)" />
                var pInputJml = document.createElement("input");
                var inJmlType = document.createAttribute("type");
                inJmlType.value = "text";
                pInputJml.setAttributeNode(inJmlType);
                var inJmlId = document.createAttribute("id");
                inJmlId.value = "jumlahBarang";
                pInputJml.setAttributeNode(inJmlId);
                var inJmlTypeKey = document.createAttribute("onkeypress");
                inJmlTypeKey.value = "return isNumberKey(event)";
                pInputJml.setAttributeNode(inJmlTypeKey);
                cardP.appendChild(pInputJml);

                //<button onclick="return cekKosong()" name="addBarang" id="addBarang" >Tambah Barang</button>
                var pButtonT = document.createElement("button");
                var buttonTClick = document.createAttribute("onClick");
                buttonTClick.value = "return cekKosong()";
                pButtonT.setAttributeNode(buttonTClick);
                var buttonTName = document.createAttribute("name");
                buttonTName.value = "addBarang";
                pButtonT.setAttributeNode(buttonTName);
                var buttonTId = document.createAttribute("id");
                buttonTId.value = "addBarang";
                pButtonT.setAttributeNode(buttonTId);
                pButtonT.innerHTML = "Tambah Barang";
                cardP.appendChild(pButtonT);

                //<button onclick="return delLastBarang()" name="delLastBarang" id="delLastBarang">Hapus Barang Terkahir</button>
                var pButtonD = document.createElement("button");
                var buttonDClick = document.createAttribute("onClick");
                buttonDClick.value = "return delLastBarang()";
                pButtonD.setAttributeNode(buttonDClick);
                var buttonDName = document.createAttribute("name");
                buttonDName.value = "delLastBarang";
                pButtonD.setAttributeNode(buttonDName);
                var buttonDId = document.createAttribute("id");
                buttonDId.value = "delLastBarang";
                pButtonD.setAttributeNode(buttonDId);
                pButtonD.innerHTML = "Hapus Barang Terkahir";
                cardP.appendChild(pButtonD);

            //<div>
            var cardDiv = document.createElement("div");
            divCard.appendChild(cardDiv);

                //<table id="tbBarang">
                var divTab = document.createElement("table");
                var tabId = document.createAttribute("id");
                tabId.value = "tbBarang";
                divTab.setAttributeNode(tabId);
                cardDiv.appendChild(divTab);

                    //<tr>
                    var tabTr = document.createElement("tr");
                    divTab.appendChild(tabTr);

                        //<th>Nama Barang</th>
                        var tabTh1 = document.createElement("th");
                        tabTh1.innerHTML = "Nama Barang";
                        tabTr.appendChild(tabTh1);

                        //<th>Harga Satuan</th>
                        var tabTh2 = document.createElement("th");
                        tabTh2.innerHTML = "Harga Satuan";
                        tabTr.appendChild(tabTh2);

                        //<th>Jumlah dibeli</th>
                        var tabTh3 = document.createElement("th");
                        tabTh3.innerHTML = "Jumlah dibeli";
                        tabTr.appendChild(tabTh3);

                        //<th>Total</th>
                        var tabTh4 = document.createElement("th");
                        tabTh4.innerHTML = "Total";
                        tabTr.appendChild(tabTh4);

            //<br/>
            var br1 = document.createElement("br");
            divCard.appendChild(br1);


            //<input type="text" id="txtGrandTot" disabled value= 0 />
            var txtGrand = document.createElement("input");
            var grandType = document.createAttribute("type");
            grandType.value = "text";
            txtGrand.setAttributeNode(grandType);
            var grandId = document.createAttribute("id");
            grandId.value = "txtGrandTot";
            txtGrand.setAttributeNode(grandId);
            var grandDisable = document.createAttribute("disabled");
            txtGrand.setAttributeNode(grandDisable);
            txtGrand.value = 0;
            divCard.appendChild(txtGrand);
            //<label for="txtGrandTot" id="lblGrandTot">Grand Total :</label><br/><br/>
            var lblGrand = document.createElement("label");
            var lblGFor = document.createAttribute("for");
            lblGFor.value = "txtGrandTot";
            lblGrand.setAttributeNode(lblGFor);
            var lblGId = document.createAttribute("id");
            lblGId.value = "lblGrandTot";
            lblGrand.setAttributeNode(lblGId);
            lblGrand.innerHTML = "Grand Total :";
            divCard.appendChild(lblGrand);

            var br2 = document.createElement("br");
            divCard.appendChild(br2);
            var br3 = document.createElement("br");
            divCard.appendChild(br3);

            //<input type="text" id="txtDuitPembeli" onkeypress="return isNumberKey(event)"/>
            var txtDuit = document.createElement("input");
            var duitType = document.createAttribute("type");
            duitType.value = "text";
            txtDuit.setAttributeNode(duitType);
            var duitId = document.createAttribute("id");
            duitId.value = "txtDuitPembeli";
            txtDuit.setAttributeNode(duitId);
            var duitKey = document.createAttribute("onkeypress");
            duitKey.value = "return isNumberKey(event)";
            txtDuit.setAttributeNode(duitKey);
            divCard.appendChild(txtDuit);

            //<label for="txtDuitPembeli" id="lblDuitPembeli">Masukan jumlah Uang :</label><br/><br/>
            var lblDuit = document.createElement("label");
            var lblDFor = document.createAttribute("for");
            lblDFor.value = "txtGrandTot";
            lblDuit.setAttributeNode(lblDFor);
            var lblDId = document.createAttribute("id");
            lblDId.value = "lblDuitPembeli";
            lblDuit.setAttributeNode(lblDId);
            lblDuit.innerHTML = "Masukan jumlah Uang :";
            divCard.appendChild(lblDuit);

            var br4 = document.createElement("br");
            divCard.appendChild(br4);
            var br5 = document.createElement("br");
            divCard.appendChild(br5);

            //<input type="text" id="txtKembali" disabled/>
            var txtKembali = document.createElement("input");
            var kembaliType = document.createAttribute("type");
            kembaliType.value = "text";
            txtKembali.setAttributeNode(kembaliType);
            var kembaliId = document.createAttribute("id");
            kembaliId.value = "txtKembali";
            txtKembali.setAttributeNode(kembaliId);
            var kembaliDisabled = document.createAttribute("disabled");
            txtKembali.setAttributeNode(kembaliDisabled);
            divCard.appendChild(txtKembali);

            //<label for="txtKembali" id="lblKembali">Kembali :</label><br/><br/>
            var lblKembali = document.createElement("label");
            var lblKFor = document.createAttribute("for");
            lblKFor.value = "txtKembali";
            lblKembali.setAttributeNode(lblKFor);
            var lblKId = document.createAttribute("id");
            lblKId.value = "lblKembali";
            lblKembali.setAttributeNode(lblKId);
            lblKembali.innerHTML = "Kembali :";
            divCard.appendChild(lblKembali);

            var br6 = document.createElement("br");
            divCard.appendChild(br6);
            var br7 = document.createElement("br");
            divCard.appendChild(br7);

            //<button onclick="return hitungKembali()" name="kembali" id="kembali" >Hitung Kembalian</button>
            var buttonHitung = document.createElement("button");
            var btHClick = document.createAttribute("onclick");
            btHClick.value = "return hitungKembali()";
            buttonHitung.setAttributeNode(btHClick);
            var btHName = document.createAttribute("name");
            btHName.value = "kembali";
            buttonHitung.setAttributeNode(btHName);
            var btHId = document.createAttribute("id");
            btHId.value = "kembali";
            buttonHitung.setAttributeNode(btHId);
            buttonHitung.innerHTML = "Hitung Kembalian";
            divCard.appendChild(buttonHitung);

            var br8 = document.createElement("br");
            divCard.appendChild(br8);

    //<div class="column side"> sisi kanan
    var divSideCol2 = document.createElement("div");
    var col2Class = document.createAttribute("class");
    col2Class.value = "column side";
    divSideCol2.setAttributeNode(col2Class);
    divRow.appendChild(divSideCol2);










































//
