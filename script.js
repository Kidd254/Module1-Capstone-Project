/* eslint-disable max-len */
const menuBox= document.getElementById('menu');
const menuBar= document.getElementById('menu_bar');
const closingBtn = document.getElementById('btn');
const menuItems = document.getElementsByClassName('list-link');
const menuContainer = document.getElementsByClassName('menu-items');


menuBar.addEventListener('click', ()=>{
  menuBox.style.display = 'flex';
  menuBox.classList.toggle('open-menu');
  menuBar.style.display= 'none';
  closingBtn.style.display='block';
  menuContainer[0].style.display='block';
});

for (let i=0; i<menuItems.length; i++) {
  menuItems[i].onclick= function() {
    menuBox.style.display = 'none';
    menuBox.classList.toggle('open-menu');
    closingBtn.style.display='none';
    menuBar.style.display= 'block';
    menuContainer[0].style.display='none';
  };
}

const singerArray = [
  {
    id: 0,
    img: 'images/Bebe Winans.jpg',
    alt: 'Winans',
    name: 'Bebe Winans',
    description: 'American gospel and R&B singer',
    achievement: 'Released nine albums, seven with his sister CeCe as BeBe & CeCe Winans and one with three Winans brothers ',
  },
  {
    id: 1,
    img: 'images/Kirk Whalum.jpg',
    alt: 'Whalum',
    name: 'Kirk Whalum',
    description: 'American R&B and smooth jazz saxophonist and songwriter',
    achievement: 'Toured with Whitney Houston for more than seven years and soloed in her single "I Will Always Love You", the best-selling single by a female artist in music history.',
  },
];

const singersCard = document.querySelector('.singers-card');

let content1 = '';

singerArray.forEach((singer) => {
  content1 += `
    <section class="singers">
        <div class="singers-container">
            <div class="singers-front"></div>
            <div class="singer-background">
                <img src="${singer.img}" alt="${singer.alt}" class="image">
            </div>
        </div>
        <div class="singers-info">
            <h5 class="singers-name">${singer.name}</h5>
            <p class="singers-description">${singer.description}</p>
            <hr class="breakthrough">
            <p class="singers-achievement">${singer.achievement}</p>
        </div>
    </section>`;
});

singersCard.innerHTML = content1;

const secondSingersArray = [
  {
    id: 0,
    img: 'images/damien Escobar.jpg',
    alt: 'Escobar',
    name: 'Damien Escobar',
    description: 'Damien Esco, is an American violinist',
    achievement: 'Known for his crossover violin musical style consists of a mix of classical, jazz, pop, R&B, and hip hop',
  },
  {
    id: 1,
    img: 'images/Chrissette michelle.jpeg',
    alt: 'Michele',
    name: 'Chrisette Michele',
    description: 'An American R&B and soul singer',
    achievement: 'won a Grammy Award for Best Urban/Alternative Performance in 2009 for her song, "Be Ok"',
  },
];

const singersCard2 = document.querySelector('.singers-card1');

let content2= '';

secondSingersArray.forEach((singer) => {
  content2 += `
    <section class="singers">
        <div class = "singers-container">
            <div class="singers-front"></div>
            <div class="singers-background">
                <img src="${singer.img}" alt="${singer.alt}" class="image">
            </div>
        </div>
        <div class="singers-info">
            <h5 class="singers-name">${singer.name}</h5>
            <p class="singers-description">${singer.description}</p>
            <hr class="breakthrough">
            <p class="singers-achievement">${singer.achievement}</p>
        </div>
    </section>`;
});

singersCard2.innerHTML = content2;

const thirdSingersArray = [
  {
    id: 0,
    img: 'images/eric benet.jpg',
    alt: 'Eric',
    name: 'Eric Benet',
    description: ' American R&B/neo soul singer-songwriter and actor',
    achievement: 'Benet has received a total of four Grammy nominations to date for his musical work.',
  },
  {
    id: 1,
    img: 'images/regina belle.png',
    alt: 'Regina',
    name: 'Regina Belle',
    description: 'American singer-songwriter who started her career in the mid-1980s',
    achievement: 'Known for her singles "Baby Come to Me" and "Make It Like It Was", Belle\'s most notable for two hit duets',
  },
];

const sectionsCard3 = document.querySelector('.singers-card2');

let content3 = '';

thirdSingersArray.forEach((singer) => {
  content3 += `
      <section class="singers">
          <div class = "singers-container">
              <div class="singers-front"></div>
              <div class="singers-background">
                  <img src="${singer.img}" alt="${singer.alt}" class="image">
              </div>
          </div>
          <div class="singers-info">
              <h5 class="singers-name">${singer.name}</h5>
              <p class="singers-description">${singer.description}</p>
              <hr class="breakthrough">
              <p class="singers-achievement">${singer.achievement}</p>
          </div>
      </section>`;
});

sectionsCard3.innerHTML = content3;
