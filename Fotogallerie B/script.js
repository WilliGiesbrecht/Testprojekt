let images = ['img/0.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg'];

function load(){
    let contant = document.getElementById('contant')
    contant.innerHTML = '';
    for (i = 0; i < images.length; i++)
        contant.innerHTML +=`
            <img id="imageOpen${i}" onclick="openimg(${i})" class="imgdiv" src="img/${i}.jpg">
        `;
}

function openimg(i){
    const img = images[i];
    contant.innerHTML += `
        <div id="bigImg" class="bigImg">
            <img onclick="imgBack()" class="arrow" src="icons/back.png">
            <img onclick="closeImg()" class="zoom" id="imageSwap" src="${img}">
            <img onclick="imgForward()" class="arrow" src="icons/forward.png">
        </div>    
    `;
}

function closeImg(){
    contant.innerHTML = '';
    load()
}

function imgBack(){
    document.getElementById('imageSwap').src = '${img--}';
}