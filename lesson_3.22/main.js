const arr = [
  {
    id: 1,
    pizza_Name: "Big Shinding",
    price: 15,
    imgUrl: "../img/big_Shindig.webp"
  },
  {
    id: 2,
    pizza_Name: "Dante Inferno",
    price: 20,
    imgUrl: "../img/dantel.webp"
  },
  {
    id: 3,
    pizza_Name: "The Gus",
    price: 14,
    imgUrl: "../img/theGus.webp"
  },
  {
    id: 4,
    pizza_Name: "Tobacco Stick",
    price: 18,
    imgUrl: "../img/tobaccoStick.webp"
  },
  {
    id: 5,
    pizza_Name: "Cowtipper",
    price: 20,
    imgUrl: "../img/Cowtipper.webp"
  },
  {
    id: 6,
    pizza_Name: "Gaias Revenge",
    price: 14,
    imgUrl: "../img/gaiasRevenge.webp"
  },
  {
    id: 7,
    pizza_Name: "The Buddha",
    price: 18,
    imgUrl: "../img/TheBuddha.webp"
  },
]

const menuList = document.querySelector(".menu_list")
const cardList = document.querySelector(".card__list")
const elTotal = document.querySelector(".total")


arr.forEach((item) => {
  let li = document.createElement("li");
  li.className = "menu_item";
  li.innerHTML = `
  <img src="${item.imgUrl}" alt="pizza">
        <div class="menu_item--text">
          <p class="pizza__name">${item.pizza_Name}</p>
          <p class="pizza__price">$${item.price}</p>
          <button type="button" class="btn__add" onclick="addItemArr(${item.id})">
            Add to Cart
          </button>
        </div>
  `;
  menuList.appendChild(li);
});

let newPizzaArr = []

function addItemArr(el) {
  newPizzaArr.push(arr.filter((item) => item.id === el)[0])
  addCard(newPizzaArr)
}

function addCard(cardPizzaArr) {
  let total = 0

  let arr = cardPizzaArr;
  let topArr = [];

  arr.forEach((item) => {
    if (arr != "") topArr.push(arr[0]);
    arr = arr.filter((el) => {
      return arr[0].id != el.id
    });
  });

  let li = 0;
  let listArr = [];

  topArr.forEach((item) => {
    let count = cardPizzaArr.filter((element)=> {
      return element.id == item.id
    })
    li = `
  <li class="card__item">
   <img src="${item.imgUrl}" alt="pizza">
   <div class="card__item--text">
    <p class="pizza__name">${item.pizza_Name}</p>
    <p class="pizza__price">$${item.price}</p>
   </div>
   <span class="number">${count.length}</span>
   <button class="btn addCard"  onclick="addItemArr(${item.id})">+</button>
   <button class="btn removeCard" onclick="removeCard(${item.id})">-</button>
  </li>
  `

    listArr.push(li)
    cardList.innerHTML = listArr.join('')


  })

  cardPizzaArr.forEach((item)=>{
    total+=item.price
    console.log(total);
  })

  elTotal.innerHTML = `$${total}`
}

function removeCard(elid){
  let count =0;
  let a = [];

  newPizzaArr.forEach(element =>{
    if(element.id === elid && count === 0){
      count++;
    }else{
      a.push(element);
    }
  })

  newPizzaArr = a;

  if(newPizzaArr.length === 0 ){
    cardList.innerHTML = ''
  }
  addCard(newPizzaArr)
}