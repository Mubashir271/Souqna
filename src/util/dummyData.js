// src/data/notificationsData.js

import {
  AssistanceSVG,
  CARSVG,
  CourseSVG,
  ElectronicSVG,
  FamilySVG,
  FashionSVG,
  GiveawaySVG,
  HobbySVG,
  HOMESVG,
  JobSVG,
  MusicSVG,
  NeighbourSVG,
  OtherCategorySVG,
  PetSVG,
  ServiceSVG,
  SofaSVG,
  TicketSVG,
} from '../assets/svg';

const notificationsData = [
  {
    id: '1',
    title: 'New message from John',
    message: 'Hey, check out the new project.',
  },
  {
    id: '2',
    title: 'Meeting Reminder',
    message: 'Don’t forget your meeting at 3 PM.',
  },
  {
    id: '3',
    title: 'System Update',
    message: 'A new update is available for your app.',
  },
  {
    id: '4',
    title: 'New comment on your post',
    message: 'Someone commented on your recent post.',
  },
  {
    id: '5',
    title: 'Security Alert',
    message: 'We noticed an unusual login attempt on your account.',
  },
];
const categories = [
  {
    name: 'Auto, Rad & Boat',
    subcategories: [
      'Cars',
      'Motorbikes',
      'Bicycles',
      'Boats',
      'Scooters',
      'ATVs',
      'RV & Caravans',
      'Parts & Accessories',
    ],
  },
  {
    name: 'House & Garden',
    subcategories: [
      'Furniture',
      'Gardening',
      'Tools & Equipment',
      'Appliances',
      'Home Decor',
      'Kitchenware',
      'Lighting',
      'Outdoor Furniture',
      'Plants',
    ],
  },
  {
    name: 'Property Purchase',
    subcategories: [
      'Houses',
      'Apartments',
      'Land',
      'Commercial Property',
      'Vacation Homes',
    ],
  },
  {
    name: 'Fashion & Beauty',
    subcategories: [
      'Clothing',
      'Shoes',
      'Accessories',
      'Cosmetics',
      'Jewelry',
      'Watches',
      'Skincare',
      'Haircare',
      'Fragrances',
    ],
  },
  {
    name: 'Other Categories',
    subcategories: ['Miscellaneous', 'Collectibles', 'Gifts', 'Seasonal Items'],
  },
  {
    name: 'Electronics',
    subcategories: [
      'Mobile Phones',
      'Laptops & PCs',
      'Home Appliances',
      'TV & Audio',
      'Gaming Consoles',
      'Cameras',
      'Wearables',
      'Accessories',
    ],
  },
  {
    name: 'Pets',
    subcategories: [
      'Dogs',
      'Cats',
      'Birds',
      'Fish',
      'Small Animals',
      'Reptiles',
      'Pet Supplies',
      'Pet Adoption',
    ],
  },
  {
    name: 'Family, Child & Baby',
    subcategories: [
      'Toys & Games',
      'Baby Clothes',
      'Children’s Furniture',
      'Strollers & Car Seats',
      'Childcare Products',
      'Maternity Wear',
    ],
  },
  {
    name: 'Jobs',
    subcategories: [
      'Full-time',
      'Part-time',
      'Freelance',
      'Internships',
      'Temporary',
      'Remote',
    ],
  },
  {
    name: 'Leisure Time & Hobby',
    subcategories: [
      'Sports Equipment',
      'Outdoor Activities',
      'Art & Craft Supplies',
      'Music Instruments',
      'Photography',
      'Camping',
      'Games & Toys',
    ],
  },
  {
    name: 'Neighborhood',
    subcategories: [
      'Community Events',
      'Local Services',
      'Lost & Found',
      'Neighborhood Help',
      'Property Listings',
    ],
  },
  {
    name: 'Music, Films & Books',
    subcategories: [
      'Movies',
      'Books',
      'Music',
      'Vinyl & CDs',
      'Concerts & Events',
      'Music Instruments',
    ],
  },
  {
    name: 'Entrance Tickets & Tickets',
    subcategories: [
      'Concerts',
      'Sports Events',
      'Theater',
      'Amusement Parks',
      'Exhibitions',
      'Festivals',
    ],
  },
  {
    name: 'Services',
    subcategories: [
      'Home Services',
      'Business Services',
      'Legal & Financial',
      'Health & Wellness',
      'Education',
      'Cleaning Services',
      'Event Planning',
    ],
  },
  {
    name: 'Giveaway & Exchange',
    subcategories: ['Free Items', 'Swap Items', 'Charity & Donation'],
  },
  {
    name: 'Lessons & Courses',
    subcategories: [
      'Language Lessons',
      'Online Courses',
      'Workshops',
      'Cooking Classes',
      'Music Lessons',
      'Fitness Classes',
    ],
  },
  {
    name: 'Neighborhood Assistance',
    subcategories: [
      'Babysitting',
      'Pet Sitting',
      'House Sitting',
      'Transportation',
      'Errands',
      'Tutoring',
    ],
  },
];

const products = [
  {
    id: '1',
    imageUrl: require('../assets/img/driver1.png'),
    title: 'Sofa Set',
    price: '299.99',
  },
  {
    id: '2',
    imageUrl: require('../assets/img/driver2.png'),
    title: 'Luxury Car',
    price: '50000.00',
  },
  {
    id: '3',
    imageUrl: require('../assets/img/driver3.png'),
    title: 'Vintage Watch',
    price: '1200.00',
  },
  {
    id: '4',
    imageUrl: require('../assets/img/driver4.png'),
    title: 'Sport Shoes',
    price: '1200.00',
  },
  // Add more products as needed
];

const recommendedProducts = [
  {
    id: '1',
    imageUrl: require('../assets/img/phone.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Islamabad',
    title: 'Iphone 16 Pro Max',
    price: '499.99',
    condition: 'New',
    color: 'Silver',
    material: 'Aluminum',
    description:
      'The iPhone 16 Pro Max is the latest flagship smartphone from Apple, featuring cutting-edge technology and premium build quality. It comes in a sleek Silver finish with a durable aluminum body. This particular unit is brand new, still sealed in its original packaging, and has never been used. It boasts a stunning 6.7-inch Super Retina XDR display, powered by the A16 Bionic chip, making it ideal for gaming, multitasking, and professional use. With its 120Hz ProMotion display, 5G capabilities, and enhanced camera system, it is a top-of-the-line device for those looking to upgrade to the newest technology. Perfect for individuals who demand the best from their smartphone.',
    provider: {
      name: 'TechStore Ltd.',
      activeSince: '2015',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '2',
    imageUrl: require('../assets/img/car.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Rawalpindi',
    title: 'Luxury Car',
    price: '50,000.00',
    condition: 'Used',
    color: 'Black',
    material: 'Metal',
    description:
      'This Luxury Car is a high-end vehicle that has been meticulously maintained and is in excellent condition despite being previously used. It comes in a sleek black exterior, crafted from metal, ensuring both durability and a sophisticated look. The car includes all maintenance records, showing that its been regularly serviced and is ready for the road. With plush leather seating, a powerful engine, and state-of-the-art features such as a premium sound system, navigation, and advanced safety tech, this car offers unmatched comfort and performance. Ideal for individuals looking to experience luxury and performance on the road without the new car price tag.',
    provider: {
      name: 'Luxury Motors',
      activeSince: '2010',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Good Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '3',
    imageUrl: require('../assets/img/watch.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Quetta',
    title: 'Smart Watch',
    price: '1,200.00',
    condition: 'Used',
    color: 'Black',
    material: 'Plastic & Glass',
    description:
      'The Smart Watch is designed for the modern individual who wants to stay connected, healthy, and on top of their fitness goals. This black smartwatch, made from durable plastic and glass materials, features a heart-rate monitor, fitness tracking, GPS functionality, and smartphone notifications. With a sleek design and a comfortable band, it is both functional and stylish, helping you keep track of your daily activities while maintaining a professional appearance. Whether you are tracking your workouts, receiving important calls and messages, or simply checking the time, this smartwatch is a perfect companion for anyone with an active lifestyle.',
    provider: {
      name: 'Gadgets World',
      activeSince: '2018',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Average Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '4',
    imageUrl: require('../assets/img/bike.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Vintage Bike',
    price: '12,000.00',
    condition: 'Used',
    color: 'Red',
    material: 'Steel & Leather',
    description:
      'This Vintage Bike has been lovingly restored and is in exceptional condition, making it an ideal choice for collectors or those seeking a timeless piece of history. The bike comes in a classic red color, with a frame made from steel, ensuring strength and longevity. The seat and handlebar grips are made from leather, offering both style and comfort. It runs like new, with every part meticulously checked and restored to its original specifications. Whether youre an enthusiast of vintage bicycles or simply appreciate craftsmanship, this bike offers a perfect blend of nostalgia and functionality.',
    provider: {
      name: 'Old School Cycles',
      activeSince: '2005',
      providerType: 'Private Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '5',
    imageUrl: require('../assets/img/dog.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Golden Retriever Pup',
    price: '500.00',
    condition: 'New',
    color: 'Golden',
    material: 'Organic',
    description:
      'These Golden Retriever puppies are ready for adoption and are a perfect choice for families or individuals looking for a loyal and playful companion. The pups are healthy, vibrant, and come in a golden color, which is characteristic of this beloved breed. They have been raised in a nurturing environment and are used to being around people, making them ideal for homes with children or other pets. The puppies are fully vaccinated and come from a certified, reputable breeder. With their playful nature, intelligence, and affectionate temperament, Golden Retrievers make the perfect addition to any household.',
    provider: {
      name: 'Paws Pet Shop',
      activeSince: '2010',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Good Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '6',
    imageUrl: require('../assets/img/home.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Modern House',
    price: '12,000.00',
    condition: 'Used',
    color: 'White',
    material: 'Concrete & Glass',
    description:
      'This Modern House is the epitome of contemporary design, located in a prime area of Lahore. It boasts a striking white exterior, with a combination of concrete and glass materials that create an open and airy feel. Inside, the house features spacious rooms, a large living area with panoramic windows that offer natural light, and high-quality finishes. The house includes all modern amenities such as central air conditioning, a fully equipped kitchen, smart home features, and a lush garden. Whether youre looking for a family home or a stylish living space, this property offers everything you need in a desirable neighborhood.',
    provider: {
      name: 'Home Solutions',
      activeSince: '2018',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '7',
    imageUrl: require('../assets/img/phone.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Islamabad',
    title: 'Iphone 16 Pro Max',
    price: '499.99',
    condition: 'New',
    color: 'Silver',
    material: 'Aluminum',
    description:
      'The iPhone 16 Pro Max is the latest flagship smartphone from Apple, featuring cutting-edge technology and premium build quality. It comes in a sleek Silver finish with a durable aluminum body. This particular unit is brand new, still sealed in its original packaging, and has never been used. It boasts a stunning 6.7-inch Super Retina XDR display, powered by the A16 Bionic chip, making it ideal for gaming, multitasking, and professional use. With its 120Hz ProMotion display, 5G capabilities, and enhanced camera system, it is a top-of-the-line device for those looking to upgrade to the newest technology. Perfect for individuals who demand the best from their smartphone.',
    provider: {
      name: 'TechStore Ltd.',
      activeSince: '2015',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '8',
    imageUrl: require('../assets/img/car.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Rawalpindi',
    title: 'Luxury Car',
    price: '50,000.00',
    condition: 'Used',
    color: 'Black',
    material: 'Metal',
    description:
      'This Luxury Car is a high-end vehicle that has been meticulously maintained and is in excellent condition despite being previously used. It comes in a sleek black exterior, crafted from metal, ensuring both durability and a sophisticated look. The car includes all maintenance records, showing that its been regularly serviced and is ready for the road. With plush leather seating, a powerful engine, and state-of-the-art features such as a premium sound system, navigation, and advanced safety tech, this car offers unmatched comfort and performance. Ideal for individuals looking to experience luxury and performance on the road without the new car price tag.',
    provider: {
      name: 'Luxury Motors',
      activeSince: '2010',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Good Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '9',
    imageUrl: require('../assets/img/watch.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Quetta',
    title: 'Smart Watch',
    price: '1,200.00',
    condition: 'Used',
    color: 'Black',
    material: 'Plastic & Glass',
    description:
      'The Smart Watch is designed for the modern individual who wants to stay connected, healthy, and on top of their fitness goals. This black smartwatch, made from durable plastic and glass materials, features a heart-rate monitor, fitness tracking, GPS functionality, and smartphone notifications. With a sleek design and a comfortable band, it is both functional and stylish, helping you keep track of your daily activities while maintaining a professional appearance. Whether you are tracking your workouts, receiving important calls and messages, or simply checking the time, this smartwatch is a perfect companion for anyone with an active lifestyle.',
    provider: {
      name: 'Gadgets World',
      activeSince: '2018',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Average Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '10',
    imageUrl: require('../assets/img/bike.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Vintage Bike',
    price: '12,000.00',
    condition: 'Used',
    color: 'Red',
    material: 'Steel & Leather',
    description:
      'This Vintage Bike has been lovingly restored and is in exceptional condition, making it an ideal choice for collectors or those seeking a timeless piece of history. The bike comes in a classic red color, with a frame made from steel, ensuring strength and longevity. The seat and handlebar grips are made from leather, offering both style and comfort. It runs like new, with every part meticulously checked and restored to its original specifications. Whether youre an enthusiast of vintage bicycles or simply appreciate craftsmanship, this bike offers a perfect blend of nostalgia and functionality.',
    provider: {
      name: 'Old School Cycles',
      activeSince: '2005',
      providerType: 'Private Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '11',
    imageUrl: require('../assets/img/dog.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Golden Retriever Pup',
    price: '500.00',
    condition: 'New',
    color: 'Golden',
    material: 'Organic',
    description:
      'These Golden Retriever puppies are ready for adoption and are a perfect choice for families or individuals looking for a loyal and playful companion. The pups are healthy, vibrant, and come in a golden color, which is characteristic of this beloved breed. They have been raised in a nurturing environment and are used to being around people, making them ideal for homes with children or other pets. The puppies are fully vaccinated and come from a certified, reputable breeder. With their playful nature, intelligence, and affectionate temperament, Golden Retrievers make the perfect addition to any household.',
    provider: {
      name: 'Paws Pet Shop',
      activeSince: '2010',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Good Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '12',
    imageUrl: require('../assets/img/home.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Modern House',
    price: '12,000.00',
    condition: 'Used',
    color: 'White',
    material: 'Concrete & Glass',
    description:
      'This Modern House is the epitome of contemporary design, located in a prime area of Lahore. It boasts a striking white exterior, with a combination of concrete and glass materials that create an open and airy feel. Inside, the house features spacious rooms, a large living area with panoramic windows that offer natural light, and high-quality finishes. The house includes all modern amenities such as central air conditioning, a fully equipped kitchen, smart home features, and a lush garden. Whether youre looking for a family home or a stylish living space, this property offers everything you need in a desirable neighborhood.',
    provider: {
      name: 'Home Solutions',
      activeSince: '2018',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '13',
    imageUrl: require('../assets/img/phone.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Islamabad',
    title: 'Iphone 16 Pro Max',
    price: '499.99',
    condition: 'New',
    color: 'Silver',
    material: 'Aluminum',
    description:
      'The iPhone 16 Pro Max is the latest flagship smartphone from Apple, featuring cutting-edge technology and premium build quality. It comes in a sleek Silver finish with a durable aluminum body. This particular unit is brand new, still sealed in its original packaging, and has never been used. It boasts a stunning 6.7-inch Super Retina XDR display, powered by the A16 Bionic chip, making it ideal for gaming, multitasking, and professional use. With its 120Hz ProMotion display, 5G capabilities, and enhanced camera system, it is a top-of-the-line device for those looking to upgrade to the newest technology. Perfect for individuals who demand the best from their smartphone.',
    provider: {
      name: 'TechStore Ltd.',
      activeSince: '2015',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '14',
    imageUrl: require('../assets/img/car.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Rawalpindi',
    title: 'Luxury Car',
    price: '50,000.00',
    condition: 'Used',
    color: 'Black',
    material: 'Metal',
    description:
      'This Luxury Car is a high-end vehicle that has been meticulously maintained and is in excellent condition despite being previously used. It comes in a sleek black exterior, crafted from metal, ensuring both durability and a sophisticated look. The car includes all maintenance records, showing that its been regularly serviced and is ready for the road. With plush leather seating, a powerful engine, and state-of-the-art features such as a premium sound system, navigation, and advanced safety tech, this car offers unmatched comfort and performance. Ideal for individuals looking to experience luxury and performance on the road without the new car price tag.',
    provider: {
      name: 'Luxury Motors',
      activeSince: '2010',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Good Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '15',
    imageUrl: require('../assets/img/watch.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Quetta',
    title: 'Smart Watch',
    price: '1,200.00',
    condition: 'Used',
    color: 'Black',
    material: 'Plastic & Glass',
    description:
      'The Smart Watch is designed for the modern individual who wants to stay connected, healthy, and on top of their fitness goals. This black smartwatch, made from durable plastic and glass materials, features a heart-rate monitor, fitness tracking, GPS functionality, and smartphone notifications. With a sleek design and a comfortable band, it is both functional and stylish, helping you keep track of your daily activities while maintaining a professional appearance. Whether you are tracking your workouts, receiving important calls and messages, or simply checking the time, this smartwatch is a perfect companion for anyone with an active lifestyle.',
    provider: {
      name: 'Gadgets World',
      activeSince: '2018',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Average Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '16',
    imageUrl: require('../assets/img/bike.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Vintage Bike',
    price: '12,000.00',
    condition: 'Used',
    color: 'Red',
    material: 'Steel & Leather',
    description:
      'This Vintage Bike has been lovingly restored and is in exceptional condition, making it an ideal choice for collectors or those seeking a timeless piece of history. The bike comes in a classic red color, with a frame made from steel, ensuring strength and longevity. The seat and handlebar grips are made from leather, offering both style and comfort. It runs like new, with every part meticulously checked and restored to its original specifications. Whether youre an enthusiast of vintage bicycles or simply appreciate craftsmanship, this bike offers a perfect blend of nostalgia and functionality.',
    provider: {
      name: 'Old School Cycles',
      activeSince: '2005',
      providerType: 'Private Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '17',
    imageUrl: require('../assets/img/dog.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Golden Retriever Pup',
    price: '500.00',
    condition: 'New',
    color: 'Golden',
    material: 'Organic',
    description:
      'These Golden Retriever puppies are ready for adoption and are a perfect choice for families or individuals looking for a loyal and playful companion. The pups are healthy, vibrant, and come in a golden color, which is characteristic of this beloved breed. They have been raised in a nurturing environment and are used to being around people, making them ideal for homes with children or other pets. The puppies are fully vaccinated and come from a certified, reputable breeder. With their playful nature, intelligence, and affectionate temperament, Golden Retrievers make the perfect addition to any household.',
    provider: {
      name: 'Paws Pet Shop',
      activeSince: '2010',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Good Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
  {
    id: '18',
    imageUrl: require('../assets/img/home.png'),
    // imageUrl: require('../assets/img/driver1.png'),
    location: 'Pakistan - Lahore',
    title: 'Modern House',
    price: '12,000.00',
    condition: 'Used',
    color: 'White',
    material: 'Concrete & Glass',
    description:
      'This Modern House is the epitome of contemporary design, located in a prime area of Lahore. It boasts a striking white exterior, with a combination of concrete and glass materials that create an open and airy feel. Inside, the house features spacious rooms, a large living area with panoramic windows that offer natural light, and high-quality finishes. The house includes all modern amenities such as central air conditioning, a fully equipped kitchen, smart home features, and a lush garden. Whether youre looking for a family home or a stylish living space, this property offers everything you need in a desirable neighborhood.',
    provider: {
      name: 'Home Solutions',
      activeSince: '2018',
      providerType: 'Commercial Provider',
      customerSatisfaction: 'Top Satisfaction',
      providerAttributes: ['Particularly Reliable'],
      providerFriendly: ['Particularly Friendly'],
    },
    productLink: 'https://example.com/product/modern-house',
  },
];

const paginationImages = [
  {
    id: '1',
    imageUrl: require('../assets/img/driver1.png'),
    description: 'There’s a lot going on here',
  },
  {
    id: '2',
    imageUrl: require('../assets/img/driver2.png'),
    description: 'We have more than 35 million users',
  },
  {
    id: '3',
    imageUrl: require('../assets/img/driver3.png'),
    description: 'Our platform supports over 50,000 products',
  },
  {
    id: '4',
    imageUrl: require('../assets/img/driver4.png'),
    description: 'We connect people from over 30 countries',
  },
];

const categoryIcons = {
  'House & Garden': SofaSVG,
  'Auto, Rad & Boat': CARSVG,
  'Property Purchase': HOMESVG,
  'Fashion & Beauty': FashionSVG,
  Electronics: ElectronicSVG,
  Pets: PetSVG,
  'Family, Child & Baby': FamilySVG,
  Jobs: JobSVG,
  'Other Categories': OtherCategorySVG,
  'Leisure Time & Hobby': HobbySVG,
  Neighborhood: NeighbourSVG,
  'Music, Films & Books': MusicSVG,
  'Entrance Tickets & Tickets': TicketSVG,
  Services: ServiceSVG,
  'Giveaway & Exchange': GiveawaySVG,
  'Lessons & Courses': CourseSVG,
  'Neighborhood Assistance': AssistanceSVG,
};
const newsData = [
  {
    id: '1',
    title: 'Breaking News: Market Hits New High',
    description:
      'The stock market reaches an all-time high after a week of positive gains.',
    imageUrl: require('../assets/img/driver1.png'),
  },
  {
    id: '2',
    title: 'Technology Advances in AI',
    description:
      'New artificial intelligence models are pushing the boundaries of what machines can do.',
    imageUrl: require('../assets/img/driver1.png'),
  },
  {
    id: '3',
    title: 'Sports: Local Team Wins Championship',
    description:
      'In an exciting final, the local football team clinched the championship title.',
    imageUrl: require('../assets/img/driver1.png'),
  },
];
export default {
  notificationsData,
  categories,
  products,
  recommendedProducts,
  paginationImages,
  categoryIcons,
  newsData,
};
