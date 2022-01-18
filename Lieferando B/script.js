window.onscroll = function () { scroll() };

let mealNames = ['Crispy Chicken Burger', 'Cheesburger', 'Bacon Burger'];
let mealInfos = ['Crunchy Chicken, Käse und Rucola', '130g Beef-Patty und Käse', '130g Beef-Patty, Käse, Bacon und Rucola']
let mealPrices = [6.99, 5.49, 7.49];


let basketAmounts = [];
let basketNames = [];
let basketPrices = [];

function scroll() {
  if (window.scrollY >= 72) {
    document.getElementById("scroll80").style.top = 0;
  } else {
    document.getElementById("scroll80").style.top = (72 - window.scrollY) + 'px';
  }
}



function render() {
  let meal = document.getElementById('menucard');

  
  meal.innerHTML = '';
  meal.innerHTML = `
  <div class="menucard-category">
  Beliebte Gerichte
  </div>
  `;

  for (let i = 0; i < mealNames.length; i++) {
    const mealsName = mealNames[i];
    const mealInfo = mealInfos[i];
    const mealPrice = mealPrices[i];

    meal.innerHTML += `
    <div class="meal-container">
     <div class="mealandbutton-container">
      <div class="meal-wrapper">
        <span class="meal-name" id="mealname${i}">${mealsName}</span>
        <span class="meal-info">mit ${mealInfo}</span>
        <span class="meal-choose">Wahl aus: mit Bacon, mit Ei, mit Hähnchenfleisch, mit Jalapenos,
        mit Käse, mit Onion Rings und mehr.</span>
        <span class="meal-price" id="price${i}">${mealPrice} €</span>
      </div>
      <div class="add-to-basket" onclick="add(${i})">
       +
      </div>
     </div>
    </div>
  `;
  }
}

function add(i) {
  let close = document.getElementById('orderlist');

  close.classList = 'd-none';

  if (basketNames.includes(mealNames[i])) {
    let position = basketNames.indexOf(mealNames[i]);
    basketAmounts[position]++;
  }
  else {
    basketAmounts.push(1);
    basketNames.push(mealNames[i]);
    basketPrices.push(mealPrices[i]);
  }

  basketrender();
}


function basketrender() {
  let menu = document.getElementById('products');
  menu.innerHTML = '';
  
  let sum = 0;
  for (i = 0; i < basketNames.length; i++) {
    const amount = basketAmounts[i];
    const name = basketNames[i];
    const price = basketPrices[i];
    const amountPrice = amount * price;
    sum = sum + amountPrice;

    menu.innerHTML += `
  <div id="basketMeal" class="basket-single-meal">
  <span id="piece" class="piece">${amount}x</span>
  <span class="basketname1">${name}</span>
  <div class="editbutton">
  <button onclick="minus(${i})" class="minus">-</button>
  <button onclick="plus(${i})" class="plus">+</button>
  <button class="pen"><img src="./img/pen.png"></button>
  </div>
  <span class="basketprice1">${amountPrice.toFixed(2)} €</span>
  <button class="delete" onclick="deleteorder(${i})"><img src="./img/delete.png"></butt
  </div>
  `;
  }
  basketSum(sum);
  changeMinOrder(sum);
  balance(sum);
}

function deleteorder(i) {
  basketNames.splice(i, 1);
  basketAmounts.splice(i, 1);
  basketPrices.splice(i, 1);
  basketrender();
}

function plus(i) {
  basketAmounts[i]++;
  basketrender();
}

function minus(i) {

  if (basketAmounts[i] > 1) {
    basketAmounts[i]--;
    basketrender();
  } else {
    deleteorder(i);
  }
}

function basketSum(sum) {
  let sumContainer = document.getElementById('basketSum');

  if (sum > 0) {
    sumContainer.innerHTML = `
    <span>Gesamt</span>
    <span id="sum">${sum.toFixed(2)} €</span>`;
  } else {
    document.getElementById('orderlist').classList.remove('d-none');
    document.getElementById('orderlist').classList.add('basket-contant');
    document.getElementById('sum').innerHTML = sum.toFixed(2) + ' €';
    sumContainer.innerHTML = '';
  }
}

function changeMinOrder(sum) {
  let minOrder = document.getElementById('min-order');
  let minOrderText = document.getElementById('orderText');
  let changeButton = document.getElementById('orderButton');
  let minSum = 13;

  if (sum <= minSum) {
    minOrderText.classList.remove = 'd-none';
    minOrderText.classList = 'minOrderSum';
    changeButton.className = 'basket-order-button';
    minOrder.innerHTML = '';
    minOrder.innerHTML = `
    Leider kannst Du noch nicht bestellen. Alpha Foods liefert erst ab einem Mindestbestellwert von <br>
    13,00 € (exkl. Lieferkosten).
    `;
    if (sum > 0) {
      minOrderText.innerHTML = `
    <span>Benötigter Betrag, um den <br> Mindestbestellwert zu errreichen</span>
    <span id="minOrderSum"></span>
    `;
    } else {
      minOrderText.classList = 'd-none';
    }
  } else {
    minOrder.innerHTML = '';
    minOrder.innerHTML = `
    Du hast den Mindestbestellwert von 13,00 € erreicht und kannst jetzt fortfahren.
    `;
    changeButton.className = 'changeButton';
    minOrderText.classList = 'd-none';
  }
}


function balance(sum) {
  let minOrder = 13;
  let changeButton = document.getElementById('orderButton');
  let minOrderText2 = document.getElementById('orderText');
  let minOrder2 = document.getElementById('min-order');

  if (sum <= minOrder) {
    document.getElementById('minOrderSum').innerHTML = (minOrder-sum).toFixed(2) + ' €';
  } else {
    minOrderText2.innerHTML = '';
    minOrderText2.classList = 'd-none';
    minOrder2.innerHTML = `
    Du hast den Mindestbestellwert von 13,00 € erreicht und kannst jetzt fortfahren.
    `;
    changeButton.className = 'changeButton';
  }
}

