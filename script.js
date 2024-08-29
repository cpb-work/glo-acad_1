const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
  {
    id: 0,
    title: 'Товар 1',
    price: '170 &#8381;',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/card-image.png'
  },
  {
    id: 1,
    title: 'Товар 2',
    price: '171 &#8381;',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/card-image.png'
  },
  {
    id: 2,
    title: 'Товар 3',
    price: '172 &#8381;',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/card-image.png'
  },
  {
    id: 3,
    title: 'Товар 4',
    price: '173 &#8381;',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/card-image.png'
  },
  {
    id: 4,
    title: 'Товар 5',
    price: '174 &#8381;',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/card-image.png'
  },
  {
    id: 5,
    title: 'Товар 6',
    price: '175 &#8381;',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/card-image.png'
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = '';

  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML('beforeend', `
      <a href="/product.html" class="content-main__list-item">
        <div class="content-main__list-item--img">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <h5 class="content-main__list-item--title">
          ${item.title}
        </h5>
        <strong class="content-main__list-item--price">
          ${item.price}
        </strong>
        <div class="content-main__list-item--desc-box">
          <span class="content-main__list-item--desc">${item.address}</span>
          <span class="content-main__list-item--desc">${item.date}</span>
        </div>
      </a>
    `)
  })
}

const filteredArray = (array, value) => {
  
  return array.filter(e => e.title.includes(value) || e.price.includes(value));
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener('click', () => {
  render(filteredArray(cardArray, searchInput.value));
});