const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


// this is our parent element where all the dynamic info will be displayed...
const sectionCenter = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn');

// once the content is loaded.....
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
  
});




// filter items...we iterate through all of the "filter-buttons" and add a "click" event listener to each....
filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
// with dataset, we can access the "data" attribute from the element that we want..
// in this case it will be the "data-id" property that we assigned to each "filter-button"
// the names of the id should match the "category" name for each item in the "menu" array...
// so we are specifically looking for the "id" of each "filter-button"..
const category = e.currentTarget.dataset.id;

// let's create a new array,"menuCategory" that is filled with only the specific items in the "menu" array (menuItem) that have the category name
// that is equal to the "id"(category) of the "filter-button" we are clicking on..
const menuCategory = menu.filter(function(menuItem){

  // if the data-id of the button we are pressing on matches the category name of the "menu" array item, display that item..
  if(menuItem.category === category){
    return menuItem;
  }
    
});

// if the user clicks on the filter-button with the data-id of "all", then we will display the entire original "menu" array..
if(category === 'all'){
  displayMenuItems(menu);
}
else{
  // otherwise, if the user clicks on a button with any other data-id than "all", display the items that match the data-id name(category)...
  displayMenuItems(menuCategory);
}
  });
});






function displayMenuItems(menuItems){
  // we'll map through the "menuItems" array and assign each "item" to the variable "displayMenu"
  let displayMenu = menuItems.map(function(item){

    // for every "item" in the array that we iterate through,
    // we will return an Article that has the item's image, title, price, and description.....
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  // this will display the items as one giant string, without the comma's that are in-between the items...
  displayMenu = displayMenu.join('');

  // this will display our dynamically displayed content inside our parent element, the "section-center" div...
  sectionCenter.innerHTML = displayMenu;
}