//Dummy category data
export const categories = [
    {
      id: 1,
      name: 'Electronics',
      subcategories: [
        { id: 11, name: 'Computers' },
        { id: 12, name: 'Phones' },
        { id: 13, name: 'Televisions' }
      ]
    },
    {
      id: 2,
      name: 'Home Decor',
      subcategories: [
        { id: 21, name: 'Mirrors' },
        { id: 22, name: 'Clocks' }
      ]
    },
    {
        id: 3,
        name: 'Fashion',
        subcategories: [
          { id: 31, name: 'Men' },
          { id: 32, name: 'Women' }
        ]
      },
      {
        id: 4,
        name: 'Books',
        subcategories: [
          { id: 41, name: 'Fiction' },
          { id: 42, name: 'Non-Fiction' }
        ]
      },
  ];

//Dummy product data
  export const products = [

    { id: 111, name: 'Laptop', subcategoryId: 11 },
    { id: 112, name: 'Desktop', subcategoryId: 11 },
    { id: 113, name: 'Tablet', subcategoryId: 11 },
    { id: 114, name: 'Gaming PC', subcategoryId: 11 },
    { id: 115, name: 'Chromebook', subcategoryId: 11 },
  

    { id: 121, name: 'Smartphone', subcategoryId: 12 },
    { id: 122, name: 'Feature Phone', subcategoryId: 12 },
    { id: 123, name: 'Satellite Phone', subcategoryId: 12 },
    { id: 124, name: 'Foldable Phone', subcategoryId: 12 },
    { id: 125, name: 'Rugged Phone', subcategoryId: 12 },
  

    { id: 131, name: 'LED TV', subcategoryId: 13 },
    { id: 132, name: 'OLED TV', subcategoryId: 13 },
    { id: 133, name: 'QLED TV', subcategoryId: 13 },
    { id: 134, name: 'Smart TV', subcategoryId: 13 },
    { id: 135, name: '4K Ultra', subcategoryId: 13 },


  { id: 211, name: 'Wall Mirror', subcategoryId: 21 },
  { id: 212, name: 'Full-Length Mirror', subcategoryId: 21 },
  { id: 213, name: 'Vanity Mirror', subcategoryId: 21 },
  { id: 214, name: 'Decorative Mirror', subcategoryId: 21 },
  { id: 215, name: 'Round Mirror', subcategoryId: 21 },


  { id: 221, name: 'Wall Clock', subcategoryId: 22 },
  { id: 222, name: 'Table Clock', subcategoryId: 22 },
  { id: 223, name: 'Grandfather Clock', subcategoryId: 22 },
  { id: 224, name: 'Digital Clock', subcategoryId: 22 },
  { id: 225, name: 'Cuckoo Clock', subcategoryId: 22 },


  { id: 311, name: 'T-Shirt', subcategoryId: 31 },
  { id: 312, name: 'Jeans', subcategoryId: 31 },
  { id: 313, name: 'Jacket', subcategoryId: 31 },
  { id: 314, name: 'Sneakers', subcategoryId: 31 },
  { id: 315, name: 'Watch', subcategoryId: 31 },


  { id: 321, name: 'Dress', subcategoryId: 32 },
  { id: 322, name: 'Handbag', subcategoryId: 32 },
  { id: 323, name: 'Heels', subcategoryId: 32 },
  { id: 324, name: 'Blouse', subcategoryId: 32 },
  { id: 325, name: 'Skirt', subcategoryId: 32 },


  { id: 411, name: 'Mystery Novel', subcategoryId: 41 },
  { id: 412, name: 'Science Fiction', subcategoryId: 41 },
  { id: 413, name: 'Fantasy', subcategoryId: 41 },
  { id: 414, name: 'Historical Fiction', subcategoryId: 41 },
  { id: 415, name: 'Thriller', subcategoryId: 41 },


  { id: 421, name: 'Biography', subcategoryId: 42 },
  { id: 422, name: 'Self-Help', subcategoryId: 42 },
  { id: 423, name: 'Cookbook', subcategoryId: 42 },
  { id: 424, name: 'Travel Guide', subcategoryId: 42 },
  { id: 425, name: 'History Book', subcategoryId: 42 },
];
