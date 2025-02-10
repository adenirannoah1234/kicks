export default {
  colors: {
    primary: '#4b0082',
    secondary: '#4b69e3',
    tertiary: '#ffa52f',
  },
};

// /* Navbar */
// .navbar {
//     background-color: #4B0082;
//     color: #F2DEFF; /* Soft Purple for text */
//   }
  
//   /* Footer */
//   .footer {
//     background-color: #4B0082;
//     color: #F2DEFF;
//   }
  
//   /* Cards */
//   .card {
//     border: 2px solid #6917A3;
//     background-color: white;
//   }
  
//   /* Buttons */
//   .button-primary {
//     background-color: #4B0082;
//     color: white;
//   }
//   .button-cta {
//     background-color: #D4AF37;
//     color: #4B0082;
//   }
  
//   /* Inputs */
//   .input {
//     border: 1px solid #6917A3;
//   }
  
//   /* Text Colors */
//   .heading { color: #4B0082; }
//   .body-text { color: #6917A3; }
  
//   /* Icons */
//   .icon { color: #6917A3; }
//   .icon:hover { color: #D4AF37; }
  
//   /* Dropdown */
//   .dropdown {
//     background-color: white;
//     border: 1px solid #4B0082;
//   }

export const navigationLinks = [
  {
    title: 'Gifts',
    subLinks: [
      { title: 'Holiday Selection', path: '/gifts/holiday' },
      { title: 'For Her', path: '/gifts/her' },
      { title: 'For Him', path: '/gifts/him' },
    ],
  },
  {
    title: 'New',
    subLinks: [
      { title: 'Latest Arrivals', path: '/new/latest' },
      { title: 'Collections', path: '/new/collections' },
    ],
  },
  {
    title: 'Bags and Small Leather Goods',
    subLinks: [
      { title: 'Women Bags', path: '/bags/women' },
      { title: 'Men Bags', path: '/bags/men' },
      { title: 'Women Small Leather Goods', path: '/bags/women-slg' },
      { title: 'Men Small Leather Goods', path: '/bags/men-slg' },
    ],
  },
];