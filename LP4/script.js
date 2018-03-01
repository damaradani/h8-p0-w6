//<div id="main">
var divIdMain = document.getElementById("main");

//  <div id="content">
var divMainContent = document.createElement("div");
var divMainContentId = document.createAttribute("id");
divMainContentId.value = "content";
divMainContent.setAttributeNode(divMainContentId);
divIdMain.appendChild(divMainContent);

//    <div class="content-post">
var divContent = document.createElement("div");
var divContentClass = document.createAttribute("class");
divContentClass.value = "content-post";
divContent.setAttributeNode(divContentClass);
divMainContent.appendChild(divContent);

//      <h1>Judul Post</h1>
var h1JudulPost = document.createElement("h1");
h1JudulPost.innerHTML = "Judul Post";
divContent.appendChild(h1JudulPost);

//      <span>Published on 12 May 2016</span>
var spanPublish = document.createElement("span");
spanPublish.innerHTML = "Published on 12 May 2016";
divContent.appendChild(spanPublish);

//      <p>  Lorem Ipsum Dolor Sit Amet </p>
var pLorem = document.createElement("p");
pLorem.innerHTML = "Lorem Ipsum Dolor Sit Amet"
divContent.appendChild(pLorem);

//      <button class="share-post-btn">Share this Post</button>
var buttonPost = document.createElement("button");
var buttonPostClass = document.createAttribute("class");
var bpcOnClick = document.createAttribute("onClick");
buttonPostClass.value = "share-post-btn";
bpcOnClick.value = "return alert('You have shared this post!')";
buttonPost.setAttributeNode(buttonPostClass);
buttonPost.setAttributeNode(bpcOnClick);
buttonPost.innerHTML = "Share this Post";
divContent.appendChild(buttonPost);

//      <div class="content-post">
var divContent2 = document.createElement("div");
var divContentClass2 = document.createAttribute("class");
divContentClass2.value = "content-post";
divContent2.setAttributeNode(divContentClass2);
divMainContent.appendChild(divContent2);

//      <h1>Judul Post 2</h1>
var h1Content2 = document.createElement("h1");
h1Content2.innerHTML = "judul Post 2";
divContent2.appendChild(h1Content2);

//      <span>Published on 13 May 2016</span>
var spanPublish2 = document.createElement("span");
spanPublish2.innerHTML = "Published on 13 May 2016";
divContent2.appendChild(spanPublish2);

//      <p>  Lorem Ipsum Dolor Sit Amet </p>
var pLorem2 = document.createElement("p");
pLorem2.innerHTML = "Lorem Ipsum Dolor Sit Amet";
divContent2.appendChild(pLorem2);

//      <button class="share-post-btn">Share this Post</button>
var buttonPost2 = document.createElement("button");
var buttonPostClass2 = document.createAttribute("class");
var bpcOnClick2 = document.createAttribute("onClick");
buttonPostClass2.value = "share-post-btn";
bpcOnClick2.value = "return alert('You have shared this post!')";
buttonPost2.setAttributeNode(buttonPostClass2);
buttonPost2.setAttributeNode(bpcOnClick2);
buttonPost2.innerHTML = "Share this Post";
divContent2.appendChild(buttonPost2);
