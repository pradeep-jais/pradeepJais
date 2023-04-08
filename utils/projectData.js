const projects = [
  {
    id: 1,
    featured: false,
    title: 'coffee junkie',
    techUsed: ['HTML only'],
    desc: 'A basic project using HTML only to understand the various HTML elements and attributes.',
    url: 'https://coffee-junkie-html.netlify.app/',
    image: '../projects-img/coffee.jpg',
  },
  {
    id: 2,
    featured: false,
    title: 'cards project',
    techUsed: ['HTML', 'CSS'],
    desc: 'Making card design using CSS fundamental properties like position, float and width to make column layout',
    url: 'https://css-cards-style.netlify.app/',
    image: '../projects-img/cards.jpg',
  },
  {
    id: 3,
    featured: false,
    title: 'tea station',
    techUsed: ['HTML', 'CSS'],
    desc: 'A website for a company named "Tea Station". Project based on mainly CSS flexbox model and media query to make responsive layout. It uses animations and some JavaScript to add basic functionality like toggle sidebar and footer date.',
    url: 'https://tea-station-gkc.netlify.app/',
    image: '../projects-img/tea-station.jpg',
  },
  {
    id: 4,
    featured: true,
    title: 'backroad tour',
    techUsed: ['HTML', 'CSS'],
    desc: 'Building this project using CSS Grid model makes our life a lot easier. It is a powerful tool to make complex layout easily and reponsive to every screen size. It has some JS to smooth scroll.',
    url: 'https://backroad-tour-test.netlify.app/',
    image: '../projects-img/backroad.jpg',
  },
  {
    id: 5,
    featured: false,
    title: 'Grid mini project',
    techUsed: ['HTML', 'CSS'],
    desc: 'In this project i use Grid model to make multi-column layout, tiles, centering the div and a complex page layout with navbar, hero, sidebar, footer. ',
    url: 'https://grid-mini-pj.netlify.app/',
    image: '../projects-img/grid-mini.jpg',
  },
  {
    id: 6,
    featured: true,
    title: `John's portfolio`,
    techUsed: ['HTML', 'CSS'],
    desc: 'A full working demo portfolio website with multiple pages like about, projects, contact with a basic form. It is made fully responsive with latest CSS features. Some JavaScript for basic functionality like smooth scroll, nav-toggle, footer date etc. It has interesting skills and blog section and also a video embedded.',
    url: 'https://john-portfolio-demo.netlify.app/',
    image: '../projects-img/john-folio.jpg',
  },
  {
    id: 7,
    featured: false,
    title: 'color flipper',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A basic DOM manipulation project which create random color value and add it to the element on page to flip the color randomly.',
    url: 'https://color-flipper-magic.netlify.app/',
    image: '../projects-img/color-flipper.jpg',
  },
  {
    id: 8,
    featured: false,
    title: 'giveaway countdown timer',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A basic DOM manipulation project to show countdown timer. Uses Date object to format the date. This feature can be used to display some limited time offer or etc. ',
    url: 'https://giveaway-timer.netlify.app/',
    image: '../projects-img/timer.jpg',
  },
  {
    id: 9,
    featured: true,
    title: 'Gallery',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'This is a nice photo gallery project which uses Object Oriented Programmimg(OOP) approach based on constructor function along with prototypal inheritence modal. The code can be refactored with JavaScript Class object which is basically syntactic sugar.',
    url: 'https://pradeep-jais.github.io/Gallery/',
    image: '../projects-img/gallery.jpg',
  },
  {
    id: 10,
    featured: false,
    title: 'Filters',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'This project provide different methods to filter out some product from a list of product. Filter can be done based on product company name or other unique feature. It has also a search faciliity. ',
    url: 'https://filter-button-pj.netlify.app/',
    image: '../projects-img/filters-btn.jpg',
  },
  {
    id: 11,
    featured: false,
    title: 'Random User API',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'About project',
    url: 'https://random-user-apis.netlify.app/',
    image: '../projects-img/random-user.jpg',
  },
  {
    id: 12,
    featured: true,
    title: 'cocktail store',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'It is a good asynchronous JavaScipt(AJAX) project to fetch cocktail API to get the list. It has search feature which directly search from API using query string parameter and display the product.',
    url: 'https://my-cocktail-store.netlify.app/',
    image: '../projects-img/cocktails.jpg',
  },
  {
    id: 13,
    featured: true,
    title: 'pagination',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A large number of products jammed on single page may discourage user experience. For this we can use pagination feature to displat a limited amount of product on single page and pages can be change on some button clicks ',
    url: 'https://pagination-apis.netlify.app/',
    image: '../projects-img/pagination.jpg',
  },
  {
    id: 14,
    featured: true,
    title: 'calculator',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: `My first basic Calculator web app using basic vanilla JavaScipt. I enjoyed a lot beacause i made this without seeking someone's help!`,
    url: 'https://calculator-basic-js.netlify.app/',
    image: '../projects-img/calci.jpg',
  },
];

export { projects };
