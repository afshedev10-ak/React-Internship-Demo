import watchImg from "../assets/images/smartwatch.png";
import laptopImg from "../assets/images/laptop.png";
import cameraImg from "../assets/images/cemara.png";
import headphonesImg from "../assets/images/headphones.png";
import canonCameraImg from "../assets/images/canoncemaras.png";
import homeApplianceImg from "../assets/images/applaince.png";
import chairImg from "../assets/images/chair.png";
import coatImg from "../assets/images/coat.jpg";
import blueshirtImg from "../assets/images/blueshirt.jpg";
import customizeImg from "../assets/images/customize.png";
import inspectionImg from "../assets/images/inspection.png";
import denimBagImg from "../assets/images/denimbag.jpg";
import dishesImg from "../assets/images/dishes.png";
import industryImg from "../assets/images/industry.png";
import jacketImg from "../assets/images/jecket.jpg";
import kettleImg from "../assets/images/kattle.png";
import phoneredImg from "../assets/images/phonered.png";
import shortsImg from "../assets/images/shorts.jpg";
import samsungImg from "../assets/images/phone.png";
import tabletImg from "../assets/images/port.png";
import tumblerImg from "../assets/images/wallet.jpg";
import bagImg from "../assets/images/denimbag.jpg";
import lampImg from "../assets/images/lamp.png";
import mixerImg from "../assets/images/mixer.png";
import phoneImg from "../assets/images/phone.png";
import shippingImg from "../assets/images/shiping.png";
import walletImg from "../assets/images/wallet.jpg";
import tshirtImg from "../assets/images/tshirt.jpg";
import whiteHeadphonesImg from "../assets/images/whiteheadphones.png";

export const categories = ["Automobiles","Clothes and wear","Home interiors","Computer and tech","Tools, equipments","Sports and outdoor","Animal and pets","Machinery tools","More category",];

export const navLinks = ["All category", "Hot offers", "Gift boxes", "Projects", "Menu item", "Help"];

export const dealItems = [
  { id: 1, name: "Smart watches", discount: -25, image: watchImg },
  { id: 2, name: "Laptops", discount: -15, image: laptopImg },
  { id: 3, name: "GoPro cameras", discount: -40, image: cameraImg },
  { id: 4, name: "Headphones", discount: -25, image: headphonesImg },
  { id: 5, name: "Canon cameras", discount: -25, image: canonCameraImg },
];

export const homeOutdoorItems = [
  { id: 10, name: "Soft chairs", from: "USD 19", image: chairImg },
  { id: 11, name: "Lamp", from: "USD 19", image: lampImg },
  { id: 12, name: "Kitchen dishes", from: "USD 19", image: dishesImg },
  { id: 13, name: "Smart watches", from: "USD 19", image: watchImg },
  { id: 14, name: "Kitchen mixer", from: "USD 100", image: mixerImg },
  { id: 15, name: "Blenders", from: "USD 39", image: mixerImg },
  { id: 16, name: "Home appliance", from: "USD 19", image: homeApplianceImg },
  { id: 17, name: "Wallet", from: "USD 10", image: walletImg },
];

export const electronicsItems = [
  { id: 20, name: "Smart watches", from: "USD 90", image: watchImg },
  { id: 21, name: "Cameras", from: "USD 90", image: cameraImg },
  { id: 22, name: "Headphones", from: "USD 90", image: whiteHeadphonesImg },
  { id: 23, name: "Laptops", from: "USD 90", image: laptopImg },
  { id: 24, name: "Gaming set", from: "USD 90", image: headphonesImg },
  { id: 25, name: "Laptops", from: "USD 90", image: laptopImg },
  { id: 26, name: "Smartphones", from: "USD 90", image: phoneImg },
  { id: 27, name: "Electric Kettle", from: "USD 90", image: kettleImg },
];

export const recommendedProducts = [
  { id: 30, price: "$10.30", name: "T-shirts with multiple colors, for men", image: tshirtImg, color: "#ffff" },
  { id: 31, price: "$10.30", name: "Jeans shorts for men blue color", image: coatImg, color: "#ffff" },
  { id: 32, price: "$12.50", name: "Brown winter coat medium size", image: jacketImg, color: "#ffff" },
  { id: 33, price: "$34.00", name: "Jeans bag for travel for men", image: denimBagImg, color: "#ffff" },
  { id: 34, price: "$99.00", name: "Leather wallet", image: walletImg, color: "#ffff" },
  { id: 35, price: "$9.99", name: "Canon camera black, 100x zoom", image: cameraImg, color: "#ffff" },
  { id: 36, price: "$8.99", name: "Headset for gaming with mic", image: headphonesImg, color: "#ffff" },
  { id: 37, price: "$10.30", name: "Smartwatch silver color modern", image: watchImg, color: "#ffff" },
  { id: 38, price: "$10.30", name: "Blue wallet for men leather metarfial", image: walletImg, color: "#ffff" },
  { id: 39, price: "$80.95", name: "Jeans bag for travel for men", image: denimBagImg, color: "#ffff" },
];


export const gridProducts = [
  { id: 40, name: "iPhone 12 Pro – 256GB", price: "$99.00", oldPrice: "$120.00", rating: 4, reviews: 17, image: phoneImg, brand: "Apple" },
  { id: 41, name: "iPhone 12 Blue – 128GB", price: "$96.00", oldPrice: "$110.00", rating: 4, reviews: 12, image: phoneredImg, brand: "Apple" },
  { id: 42, name: "iPhone 12 Mini 64GB", price: "$93.00", oldPrice: "$105.00", rating: 3, reviews: 8, image: phoneImg, brand: "Apple" },
  { id: 43, name: "Samsung Galaxy A52", price: "$98.50", oldPrice: "$115.00", rating: 4, reviews: 22, image: samsungImg, brand: "Samsung" },
  { id: 44, name: "Canon EOS 4K Action Cam", price: "$58.50", oldPrice: "$79.00", rating: 4, reviews: 14, image: cameraImg, brand: "Canon" },
  { id: 45, name: "Canon HERO8 4K Action", price: "$89.50", oldPrice: "$110.00", rating: 5, reviews: 19, image: cameraImg, brand: "Canon" },
  { id: 46, name: "Apple Smart Watch S6", price: "$93.50", oldPrice: "$120.00", rating: 4, reviews: 31, image: watchImg, brand: "Apple" },
  { id: 47, name: "MacBook Pro 13 M1", price: "$89.50", oldPrice: "$120.00", rating: 5, reviews: 44, image: laptopImg, brand: "Apple" },
  { id: 48, name: "iPad Pro 11 2021", price: "$98.50", oldPrice: "$130.00", rating: 4, reviews: 26, image: tabletImg, brand: "Apple" },
];

export const cartItems = [
  { id: 1, name: "T-shirts with multiple colors, for men and lady", desc: "Color: Black, Size: Medium, Material: Fabric", qty: 1, price: 78.99, image: tshirtImg },
  { id: 2, name: "T-shirts with multiple colors, for men and lady", desc: "Color: Blue, Size: Large, Material: Fabric", qty: 3, price: 59.09, image: tshirtImg },
];

export const savedForLater = [
  { id: 50, name: "iPhone 12 Pro", price: "$99.50", image: phoneImg },
  { id: 51, name: "iPhone 12 Blue", price: "$98.50", image: phoneredImg },
  { id: 52, name: "Smart Watch", price: "$99.50", image: watchImg },
  { id: 53, name: "MacBook Pro", price: "$99.50", image: laptopImg },
];

export const productDetail = {
  id: 32,
  name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
  price: 88.00,
  comparePrice: 90.00,
  originalPrice: 78.00,
  rating: 4.5,
  reviews: 32,
  orders: 154,
  inStock: true,
  images: [
    tshirtImg,
    blueshirtImg,
    tshirtImg,
    blueshirtImg,
  ],
  specs: {
    Type: "Classic, Fabric",
    Material: "Frost material",
    Design: "Medium nice",
    Customization: "Customized logo and design (Buying packages)",
    Protection: "Refund Policy",
    Warranty: "2 years full warranty",
  },
  supplier: { name: "Guanjoi Trading LLC", country: "Germany", rating: 4.5, verified: true },
};

export const relatedProducts = [
  { id: 60, name: "Mens Slim T-Shirt", price: "$10.30", oldPrice: "$16.00", image: tshirtImg },
  { id: 61, name: "Apple Smart Watch", price: "$10.30", oldPrice: "$16.00", image: watchImg },
  { id: 62, name: "Wireless Headphones", price: "$10.30", oldPrice: "$16.00", image: headphonesImg },
  { id: 63, name: "Denim Shorts", price: "$10.30", oldPrice: "$16.00", image: shortsImg },
  { id: 64, name: "Tumbler Black", price: "$10.30", oldPrice: "$16.00", image: tumblerImg },
  { id: 65, name: "Leather Bag", price: "$10.30", oldPrice: "$16.00", image: bagImg },
];

export const footerData = {
  about: ["About us", "Find store", "Categories", "Blogs"],
  partnership: ["About us", "Find store", "Categories", "Blogs"],
  information: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  forUsers: ["Login", "Register", "Settings", "My Orders"],
};

export const Services = [
  { id: 1, icon: "🔍", image: industryImg, title: "Source from Industry Hubs", desc: "" },
  { id: 2, icon: "💳", image: customizeImg, title: "Customize Your product", desc: "" },
  { id: 3, icon: "🚚", image: shippingImg, title: "Fast and reliable shipping by ocean or air", desc: "" },
  { id: 4, icon: "🛡", image: inspectionImg, title: "Product monitoring and inspection", desc: "" },
];






export const suppliers = [
  { country: "Arabic Emirates", flagIcon: "AE@2x.png" },
  { country: "Australia", flagIcon: "AU@2x.png" },
  { country: "United States", flagIcon: "US@2x.png" },
  { country: "Russia", flagIcon: "GB@2x.png" },
  { country: "Italy", flagIcon: "IT@2x.png" },
  { country: "Denmark", flagIcon: "CN@2x.png" },
  { country: "France", flagIcon: "FR@2x.png" },
  { country: "China", flagIcon: "CN@2x.png" },
  { country: "Great Britain", flagIcon: "GB@2x.png" }
];
