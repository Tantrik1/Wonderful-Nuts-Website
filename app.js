/* ==========================================================================
   WONDERFUL NUTS - INTERACTIVE LOGIC & DATA
   Brand: Wonderful ("Make Happy Everyday" / "The taste of traditional")
   Parent: Mahavir's Group
   ========================================================================== */

// --- PRODUCT CATALOG ---
const PRODUCTS = [
  {
    id: "prod-cashews-whole",
    name: "Whole Cashews",
    category: "cashews",
    badge: "Bestseller",
    discount: "25% OFF",
    rating: 4.9,
    reviewCount: 384,
    image: "assets/products/cashews-studio.webp",
    secondaryImage: "assets/banners/banner-lineup-wide.webp",
    description: "Handpicked premium whole cashews (W240 King Grade) roasted to golden perfection. Exceptionally crunchy, rich in heart-healthy plant fats, magnesium, and natural sweetness. Triple-layer nitrogen sealed for lasting freshness.",
    weights: [
      { size: "200g", price: 340, mrp: 450 },
      { size: "500g", price: 790, mrp: 1050 },
      { size: "1kg", price: 1520, mrp: 2000 }
    ],
    nutrition: {
      "Energy": "553 kcal / 100g",
      "Protein": "18.2 g",
      "Healthy Fats": "43.8 g",
      "Carbohydrates": "30.1 g",
      "Iron & Zinc": "100% Natural Harvest"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-almonds-california",
    name: "California Almonds",
    category: "almonds",
    badge: "Top Rated",
    discount: "28% OFF",
    rating: 4.9,
    reviewCount: 512,
    image: "assets/products/almonds-studio.webp",
    secondaryImage: "assets/banners/banner-dual-pouch.webp",
    description: "Grade-A California nonpareil almonds slowly roasted for that signature mouthwatering crunch. Abundant in Vitamin E, antioxidants, dietary fiber, and plant protein for sustained daily focus and stamina.",
    weights: [
      { size: "200g", price: 290, mrp: 400 },
      { size: "500g", price: 680, mrp: 950 },
      { size: "1kg", price: 1320, mrp: 1800 }
    ],
    nutrition: {
      "Energy": "579 kcal / 100g",
      "Protein": "21.1 g",
      "Vitamin E": "7.3 mg",
      "Dietary Fiber": "12.5 g",
      "Preservatives": "None (0% Chemical)"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-pistachios-roasted",
    name: "Jumbo Pistachios",
    category: "pistachios",
    badge: "Chef's Pick",
    discount: "30% OFF",
    rating: 4.8,
    reviewCount: 290,
    image: "assets/products/pistachios-studio.webp",
    secondaryImage: "assets/products/wonderful-pista-original.webp",
    description: "Naturally opened Iranian-style jumbo pistachios lightly seasoned with pure Himalayan pink salt. A nutrient-dense, flavorful snack packed with Vitamin B6, lutein, and clean sustained energy.",
    weights: [
      { size: "200g", price: 380, mrp: 540 },
      { size: "500g", price: 890, mrp: 1250 },
      { size: "1kg", price: 1720, mrp: 2400 }
    ],
    nutrition: {
      "Energy": "562 kcal / 100g",
      "Protein": "20.2 g",
      "Potassium": "1025 mg",
      "Antioxidants": "High Polyphenols",
      "Himalayan Salt": "Lightly Seasoned"
    },
    featured: true,
    tab: "deals"
  },
  {
    id: "prod-mix-kaju-badam-kismis",
    name: "Daily Mix",
    category: "mixes",
    badge: "Family Favorite",
    discount: "20% OFF",
    rating: 4.9,
    reviewCount: 440,
    image: "assets/products/mix-studio.webp",
    secondaryImage: "assets/products/wonderful-mix-original.webp",
    description: "The classic Indian breakfast trail mix: crunchy whole cashews, California almonds, and sweet Afghani green kismis blended in ideal ratio. A traditional powerhouse of morning vitality.",
    weights: [
      { size: "200g", price: 310, mrp: 390 },
      { size: "500g", price: 740, mrp: 920 },
      { size: "1kg", price: 1420, mrp: 1800 }
    ],
    nutrition: {
      "Energy": "480 kcal / 100g",
      "Protein": "14.8 g",
      "Natural Fruit Sugar": "From Sun-Dried Raisins",
      "Fiber": "8.2 g",
      "Tradition": "Authentic Blend"
    },
    featured: true,
    tab: "combos"
  },
  {
    id: "prod-cardamom-green",
    name: "Green Cardamom",
    category: "spices",
    badge: "Aromatic Pure",
    discount: "18% OFF",
    rating: 4.9,
    reviewCount: 178,
    image: "assets/products/cardamom-studio.webp",
    secondaryImage: "assets/products/cardamom-studio.webp",
    description: "8mm+ bold green cardamom pods straight from Idukki hills. Intensely aromatic, naturally sun-dried, bursting with rich essential oils. Elevates morning chai, festive desserts, and royal biryani.",
    weights: [
      { size: "100g", price: 420, mrp: 510 },
      { size: "200g", price: 790, mrp: 980 },
      { size: "500g", price: 1890, mrp: 2350 }
    ],
    nutrition: {
      "Grade": "8mm Jumbo Bold Pods",
      "Aroma": "Intense Essential Oils",
      "Moisture": "<10% Vacuum Dried",
      "Origin": "Western Ghats, India",
      "Harvest": "Current Fresh Season"
    },
    featured: false,
    tab: "bestsellers"
  },
  {
    id: "prod-raisins-green",
    name: "Green Raisins",
    category: "raisins",
    badge: "Sun-Dried",
    discount: "22% OFF",
    rating: 4.7,
    reviewCount: 215,
    image: "assets/products/raisins-studio.webp",
    secondaryImage: "assets/products/raisins-studio.webp",
    description: "Slender, seedless, sun-dried green raisins from Kandahar. Naturally sweet, soft, and juicy. Rich in natural iron, potassium, and digestive fiber without any artificial sulfur bleaching.",
    weights: [
      { size: "250g", price: 190, mrp: 245 },
      { size: "500g", price: 360, mrp: 460 },
      { size: "1kg", price: 690, mrp: 880 }
    ],
    nutrition: {
      "Energy": "299 kcal / 100g",
      "Iron": "1.9 mg",
      "Potassium": "749 mg",
      "Added Sugar": "0g (100% Natural)",
      "Sulfur Free": "Yes (Unbleached)"
    },
    featured: false,
    tab: "deals"
  },
  {
    id: "prod-walnuts-kashmiri",
    name: "Kashmir Walnuts",
    category: "walnuts",
    badge: "Brain Food",
    discount: "24% OFF",
    rating: 4.8,
    reviewCount: 310,
    image: "assets/products/walnuts-studio.webp",
    secondaryImage: "assets/banners/banner-lineup-wide.webp",
    description: "Exquisite hand-cracked Kashmiri walnut halves with delicate sweet taste and zero bitterness. Naturally rich in plant-based Omega-3 ALA, essential for cognitive health and heart vitality.",
    weights: [
      { size: "250g", price: 410, mrp: 540 },
      { size: "500g", price: 790, mrp: 1040 },
      { size: "1kg", price: 1540, mrp: 2000 }
    ],
    nutrition: {
      "Energy": "654 kcal / 100g",
      "Omega-3 ALA": "9.1 g",
      "Protein": "15.2 g",
      "Antioxidants": "Polyphenols Rich",
      "Packaging": "Aroma-Lock Nitrogen Seal"
    },
    featured: false,
    tab: "bestsellers"
  },
  {
    id: "prod-festive-gift-box",
    name: "Gift Box",
    category: "gifting",
    badge: "Festive Special",
    discount: "35% OFF",
    rating: 5.0,
    reviewCount: 164,
    image: "assets/products/giftbox-studio.webp",
    secondaryImage: "assets/banners/banner-payday-sale.webp",
    description: "An opulent gift box containing 4 air-tight luxury glass jars filled with Jumbo Cashews, California Almonds, Roasted Pistachios, and Kashmiri Walnuts (250g each). Embellished with royal crimson & gold foil.",
    weights: [
      { size: "4 Jars (1.0kg)", price: 1850, mrp: 2850 },
      { size: "4 Jars (2.0kg)", price: 3450, mrp: 5200 }
    ],
    nutrition: {
      "Cashews W240": "250g Glass Jar",
      "California Almonds": "250g Glass Jar",
      "Roasted Pistachios": "250g Glass Jar",
      "Kashmiri Walnuts": "250g Glass Jar",
      "Gift Box": "Handcrafted Luxury Finish"
    },
    featured: true,
    tab: "combos"
  },
  {
    id: "prod-dates-medjool",
    name: "Medjool Dates",
    category: "dates",
    badge: "Energy Booster",
    discount: "25% OFF",
    rating: 4.9,
    reviewCount: 280,
    image: "assets/products/dates-studio.webp",
    secondaryImage: "assets/products/dates-studio.webp",
    description: "King-grade Arabian Medjool dates with soft, succulent caramel-like pulp. Rich in potassium, natural fiber, and slow-release energy with zero added sugars or preservatives.",
    weights: [
      { size: "250g", price: 380, mrp: 500 },
      { size: "500g", price: 720, mrp: 950 },
      { size: "1kg", price: 1390, mrp: 1850 }
    ],
    nutrition: {
      "Energy": "277 kcal / 100g",
      "Potassium": "696 mg",
      "Dietary Fiber": "6.7 g",
      "Iron": "1.02 mg",
      "Sugar": "100% Natural Fruit Sugar"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-seeds-supermix",
    name: "Super Seeds",
    category: "seeds",
    badge: "Superfood",
    discount: "20% OFF",
    rating: 4.8,
    reviewCount: 195,
    image: "assets/products/seeds-studio.webp",
    secondaryImage: "assets/products/seeds-studio.webp",
    description: "Lightly dry-roasted powerhouse blend of Pumpkin, Chia, Watermelon, Flax, Sunflower, and White Sesame seeds. High in plant protein, zinc, and Omega-3 for daily immunity.",
    weights: [
      { size: "200g", price: 240, mrp: 300 },
      { size: "500g", price: 540, mrp: 680 },
      { size: "1kg", price: 1020, mrp: 1300 }
    ],
    nutrition: {
      "Protein": "24.5 g / 100g",
      "Omega-3": "6.8 g",
      "Dietary Fiber": "18.2 g",
      "Zinc & Magnesium": "High Bioavailability",
      "Salt": "Zero Added Sodium"
    },
    featured: true,
    tab: "deals"
  },
  {
    id: "prod-berries-cranberry",
    name: "Whole Cranberries",
    category: "berries",
    badge: "Antioxidant Rich",
    discount: "22% OFF",
    rating: 4.8,
    reviewCount: 230,
    image: "assets/products/berries-studio.webp",
    secondaryImage: "assets/products/berries-studio.webp",
    description: "Juicy, ruby-red plump whole cranberries slowly sun-dried to lock in tart-sweet flavor. Rich in Proanthocyanidins (PACs) and Vitamin C for urinary and skin health.",
    weights: [
      { size: "200g", price: 260, mrp: 330 },
      { size: "500g", price: 590, mrp: 760 },
      { size: "1kg", price: 1120, mrp: 1450 }
    ],
    nutrition: {
      "Vitamin C": "13.3 mg",
      "Antioxidants": "High PACs",
      "Dietary Fiber": "5.3 g",
      "Origin": "Grade-A Harvest",
      "Cholesterol": "0 mg"
    },
    featured: false,
    tab: "deals"
  },
  {
    id: "prod-cashews-pepper",
    name: "Pepper Cashews",
    category: "nuts",
    badge: "Gourmet Crunch",
    discount: "24% OFF",
    rating: 4.9,
    reviewCount: 215,
    image: "assets/products/cashews-pepper-studio.webp",
    secondaryImage: "assets/products/cashews-studio.webp",
    description: "Slow-roasted jumbo whole cashews coated in stone-ground Malabar black peppercorns and pink rock salt. An intensely crunchy, savory, gourmet party snack packed with magnesium and heart-healthy oils.",
    weights: [
      { size: "200g", price: 360, mrp: 480 },
      { size: "500g", price: 840, mrp: 1100 },
      { size: "1kg", price: 1620, mrp: 2100 }
    ],
    nutrition: {
      "Energy": "560 kcal / 100g",
      "Protein": "18.5 g",
      "Healthy Fats": "44.2 g",
      "Malabar Pepper": "Stone-ground",
      "Preservatives": "0% Added"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-hazelnuts-roasted",
    name: "Roasted Hazelnuts",
    category: "nuts",
    badge: "Chef's Pick",
    discount: "22% OFF",
    rating: 4.9,
    reviewCount: 188,
    image: "assets/products/hazelnuts-studio.webp",
    secondaryImage: "assets/products/hazelnuts-studio.jpg",
    description: "Gourmet slow-roasted Turkish hazelnuts with a rich nutty aroma and crisp golden crunch. Packed with healthy fats, manganese, and Vitamin E.",
    weights: [
      { size: "200g", price: 440, mrp: 560 },
      { size: "500g", price: 980, mrp: 1280 },
      { size: "1kg", price: 1880, mrp: 2450 }
    ],
    nutrition: {
      "Energy": "628 kcal / 100g",
      "Protein": "15.0 g",
      "Healthy Fats": "60.8 g",
      "Manganese": "86% DV",
      "Preservatives": "0% Added"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-pine-nuts-chilgoza",
    name: "Chilgoza Nuts",
    category: "nuts",
    badge: "Rare Harvest",
    discount: "19% OFF",
    rating: 4.9,
    reviewCount: 142,
    image: "assets/products/chilgoza-studio.webp",
    secondaryImage: "assets/products/chilgoza-studio.jpg",
    description: "Rare wild-harvested Himalayan Chilgoza pine nuts with delicate roasted shells and buttery ivory kernels. A traditional royal delicacy rich in iron, zinc, and heart-healthy oils.",
    weights: [
      { size: "100g", price: 420, mrp: 520 },
      { size: "250g", price: 990, mrp: 1250 },
      { size: "500g", price: 1890, mrp: 2400 }
    ],
    nutrition: {
      "Energy": "673 kcal / 100g",
      "Protein": "13.7 g",
      "Healthy Fats": "68.4 g",
      "Zinc": "6.4 mg",
      "Harvest": "Himalayan Wild"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-pecans-roasted",
    name: "Pecan Halves",
    category: "nuts",
    badge: "Mammoth Grade",
    discount: "25% OFF",
    rating: 4.8,
    reviewCount: 196,
    image: "assets/products/pecans-studio.webp",
    secondaryImage: "assets/products/pecans-studio.jpg",
    description: "Selected mammoth pecan halves slowly roasted to develop their deep, naturally sweet buttery profile. Rich in antioxidants, Vitamin E, and heart-healthy monounsaturated fats.",
    weights: [
      { size: "200g", price: 460, mrp: 620 },
      { size: "500g", price: 1080, mrp: 1450 },
      { size: "1kg", price: 2050, mrp: 2800 }
    ],
    nutrition: {
      "Energy": "691 kcal / 100g",
      "Protein": "9.2 g",
      "Healthy Fats": "72.0 g",
      "Dietary Fiber": "9.6 g",
      "Purity": "100% Pure"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-figs-turkish",
    name: "Dried Figs",
    category: "dates",
    badge: "100% Sun-Dried",
    discount: "22% OFF",
    rating: 4.9,
    reviewCount: 198,
    image: "assets/products/figs-studio.webp",
    secondaryImage: "assets/products/dates-studio.webp",
    description: "Handpicked premium golden Turkish dried figs with a succulent, soft honey-like interior and delicate crunch. Exceptionally rich in dietary fiber, calcium, and iron for natural wellness.",
    weights: [
      { size: "250g", price: 420, mrp: 540 },
      { size: "500g", price: 810, mrp: 1040 },
      { size: "1kg", price: 1580, mrp: 2000 }
    ],
    nutrition: {
      "Dietary Fiber": "9.8 g / 100g",
      "Calcium": "162 mg",
      "Iron": "2.0 mg",
      "Potassium": "680 mg",
      "Natural Sugar": "Unbleached"
    },
    featured: true,
    tab: "bestsellers"
  },
  {
    id: "prod-trail-nut-berry",
    name: "Nut-Berry Mix",
    category: "seeds",
    badge: "Superfood Blend",
    discount: "25% OFF",
    rating: 4.9,
    reviewCount: 320,
    image: "assets/products/nut-berry-mix.webp",
    secondaryImage: "assets/products/seeds-studio.webp",
    description: "Chef-curated vitality blend of California almonds, Kashmiri walnuts, whole cranberries, wild blueberries, pumpkin seeds, and golden raisins. High in antioxidants, Vitamin E, and plant energy.",
    weights: [
      { size: "200g", price: 320, mrp: 420 },
      { size: "500g", price: 760, mrp: 980 },
      { size: "1kg", price: 1450, mrp: 1890 }
    ],
    nutrition: {
      "Energy": "495 kcal / 100g",
      "Protein": "16.4 g",
      "Antioxidants": "High ORAC",
      "Omega-3": "4.2 g",
      "Fiber": "9.5 g"
    },
    featured: true,
    tab: "combos"
  },
  {
    id: "prod-hamper-imperial-wood",
    name: "Imperial Hamper",
    category: "gifting",
    badge: "Royal Edition",
    discount: "15% OFF",
    rating: 5.0,
    reviewCount: 142,
    image: "assets/products/hamper-luxury-studio.webp",
    secondaryImage: "assets/products/giftbox-studio.webp",
    description: "An heirloom handcrafted dark mahogany wooden chest holding 6 airtight crystal glass canisters with royal brass latch and crimson silk ribbon. Filled with Whole Cashews, California Almonds, Jumbo Pistachios, Medjool Dates, Green Cardamom & Turkish Figs.",
    weights: [
      { size: "6 Jars (1.2kg)", price: 2850, mrp: 3400 },
      { size: "6 Jars (2.0kg)", price: 4650, mrp: 5500 }
    ],
    nutrition: {
      "Assortment": "6 Master Harvests",
      "Glass Jars": "Airtight & Reusable",
      "Presentation": "Handcrafted Mahogany Chest",
      "Occasion": "Weddings & Luxury Gifting",
      "Quality": "Triple-Inspected"
    },
    featured: true,
    tab: "combos"
  },
  {
    id: "prod-saffron-kashmir",
    name: "Kashmiri Saffron",
    category: "spices",
    badge: "Grade-A Pure",
    discount: "15% OFF",
    rating: 5.0,
    reviewCount: 284,
    image: "assets/products/saffron-studio.webp",
    secondaryImage: "assets/products/cardamom-studio.webp",
    description: "100% pure authentic all-red Grade-A Mongra Kashmiri Saffron from Pampore valleys. Rich deep crimson stigmas with intoxicating floral honey aroma and intense natural golden tint. Stored in an airtight gold embossed tin and glass vial.",
    weights: [
      { size: "1g Vial", price: 350, mrp: 420 },
      { size: "5g Tin", price: 1650, mrp: 1950 },
      { size: "10g Royal Box", price: 3150, mrp: 3800 }
    ],
    nutrition: {
      "Crocin (Color)": "220+ Grade-A",
      "Safranal (Aroma)": "100% Natural",
      "Origin": "Pampore, Kashmir",
      "Purity": "No Additives / 0% Dye",
      "Grade": "Mongra All-Red Threads"
    },
    featured: true,
    tab: "deals"
  }
];

// --- INITIAL DEFAULT REVIEWS ---
const DEFAULT_REVIEWS = [
  {
    name: "Pooja Sharma",
    location: "Mumbai",
    product: "1kg Jumbo Cashews",
    rating: 5,
    title: "The crunch in these Whole Cashews is unreal!",
    body: "I used to order from multiple online portals, but Wonderful's W240 Jumbo Cashews are noticeably bigger, whiter, and naturally sweet. The zipper pouch keeps them crisp for weeks.",
    avatar: "PS",
    date: "Verified 2 days ago"
  },
  {
    name: "Rohit Ganguly",
    location: "Bengaluru",
    product: "Daily Trail Mix",
    rating: 5,
    title: "Our morning family routine now starts with Wonderful.",
    body: "The Kaju-Badam-Kismis Mix is balanced perfectly. The almonds have great crunch, and the raisins are moist and plump, not dry or shriveled like other brands. Excellent packaging!",
    avatar: "RG",
    date: "Verified 5 days ago"
  },
  {
    name: "Ananya Malhotra",
    location: "Delhi NCR",
    product: "Corporate Gifting Hampers",
    rating: 5,
    title: "Ordered 150 Gift Boxes for our Corporate Diwali event.",
    body: "The Mahavir's Group team handled customized branding, punctual delivery, and the quality of the pistachios and cardamom was lauded by all our corporate clients. Truly wonderful!",
    avatar: "AM",
    date: "Verified 1 week ago"
  }
];

// --- APP STATE ---
class StoreState {
  constructor() {
    const storedCart = this.loadFromStorage('wonderful_cart') || [];
    this.cart = storedCart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      if (prod) {
        item.name = prod.name;
        item.image = prod.image;
      }
      return item;
    });
    this.wishlist = this.loadFromStorage('wonderful_wishlist') || [];
    this.orders = this.loadFromStorage('wonderful_orders') || [];
    this.userReviews = this.loadFromStorage('wonderful_user_reviews') || [];
    this.appliedCoupon = null;
    this.freeShippingGoal = 499; // Rs. 499 threshold for free shipping
    this.deliveryFee = 50;
    this.activeFilter = 'all';
    this.sortBy = 'featured';
    this.searchQuery = '';
  }

  loadFromStorage(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("Storage write failed", e);
    }
  }

  addToCart(productId, weightSize = null, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const selectedWeight = weightSize 
      ? product.weights.find(w => w.size === weightSize) || product.weights[0]
      : product.weights[0];

    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.size === selectedWeight.size
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        size: selectedWeight.size,
        price: selectedWeight.price,
        mrp: selectedWeight.mrp,
        quantity: quantity
      });
    }

    this.saveToStorage('wonderful_cart', this.cart);
    this.notifyUpdate();
    showToast(`Added ${product.name} (${selectedWeight.size}) to cart! 🛒`);
  }

  updateQuantity(productId, size, change) {
    const itemIndex = this.cart.findIndex(i => i.id === productId && i.size === size);
    if (itemIndex > -1) {
      this.cart[itemIndex].quantity += change;
      if (this.cart[itemIndex].quantity <= 0) {
        this.cart.splice(itemIndex, 1);
      }
      this.saveToStorage('wonderful_cart', this.cart);
      this.notifyUpdate();
    }
  }

  removeFromCart(productId, size) {
    this.cart = this.cart.filter(i => !(i.id === productId && i.size === size));
    this.saveToStorage('wonderful_cart', this.cart);
    this.notifyUpdate();
  }

  toggleWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast(`Removed from Wishlist`);
    } else {
      this.wishlist.push(productId);
      showToast(`Saved to Wishlist ❤️`);
    }

    this.saveToStorage('wonderful_wishlist', this.wishlist);
    this.notifyUpdate();
  }

  moveWishlistToCart(productId) {
    this.addToCart(productId);
    this.toggleWishlist(productId);
  }

  addAllWishlistToCart() {
    if (this.wishlist.length === 0) return;
    const count = this.wishlist.length;
    [...this.wishlist].forEach(id => {
      this.addToCart(id);
    });
    this.wishlist = [];
    this.saveToStorage('wonderful_wishlist', []);
    this.notifyUpdate();
    showToast(`Moved ${count} items from Wishlist to Cart! 🛒`);
    closeWishlistDrawer();
    openCartDrawer();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  applyCoupon(code) {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'PAYDAY') {
      this.appliedCoupon = { code: 'PAYDAY', discountPercent: 15 };
      showToast("Coupon PAYDAY applied: 15% OFF! 🎉");
    } else if (cleanCode === 'WONDERFUL' || cleanCode === 'WONDERFUL10') {
      this.appliedCoupon = { code: 'WONDERFUL', discountPercent: 10 };
      showToast("Coupon WONDERFUL applied: 10% OFF! 🎉");
    } else if (cleanCode === 'FIRST15' || cleanCode === 'WELCOME15') {
      this.appliedCoupon = { code: 'FIRST15', discountPercent: 15 };
      showToast("Welcome coupon applied: 15% OFF! 🎉");
    } else if (cleanCode === 'MAHAVIR') {
      this.appliedCoupon = { code: 'MAHAVIR', discountPercent: 20 };
      showToast("Heritage VIP Code applied: 20% OFF! 👑");
    } else {
      showToast("Invalid code. Try PAYDAY or WONDERFUL");
      return false;
    }
    this.notifyUpdate();
    return true;
  }

  removeCoupon() {
    this.appliedCoupon = null;
    showToast("Coupon removed");
    this.notifyUpdate();
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartDiscount() {
    if (!this.appliedCoupon) return 0;
    const subtotal = this.getCartSubtotal();
    return Math.round((subtotal * this.appliedCoupon.discountPercent) / 100);
  }

  getDeliveryFee() {
    const subtotal = this.getCartSubtotal();
    if (subtotal === 0 || subtotal >= this.freeShippingGoal) {
      return 0;
    }
    return this.deliveryFee;
  }

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    if (subtotal === 0) return 0;
    const total = subtotal - this.getCartDiscount() + this.getDeliveryFee();
    return Math.max(0, total);
  }

  getCartItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  saveOrder(orderData) {
    this.orders.unshift(orderData);
    this.saveToStorage('wonderful_orders', this.orders);
  }

  addReview(reviewData) {
    this.userReviews.unshift(reviewData);
    this.saveToStorage('wonderful_user_reviews', this.userReviews);
    renderReviews();
  }

  notifyUpdate() {
    renderCartDrawer();
    renderWishlistDrawer();
    updateHeaderCounters();
    updateProductWishlistButtons();
  }
}

const state = new StoreState();

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- PRODUCT CATALOG CATEGORY DEFINITIONS & BENTO MODULAR GROUPINGS ---
const PRODUCT_GROUPS = [
  {
    id: "catalog-sec-nuts",
    categoryKey: "nuts",
    eyebrow: "🏷️ TAXONOMY: ROYAL WHOLE NUTS",
    title: "Royal Whole Nuts & Kernels",
    desc: "Handpicked jumbo grade cashews, California almonds, Himalayan salted pistachios, snow-white Kashmiri walnuts, roasted pepper cashews, Turkish hazelnuts, wild Chilgoza pine nuts, and jumbo pecan halves.",
    productIds: [
      "prod-cashews-whole",
      "prod-almonds-california",
      "prod-pistachios-roasted",
      "prod-walnuts-kashmiri",
      "prod-cashews-pepper",
      "prod-hazelnuts-roasted",
      "prod-pine-nuts-chilgoza",
      "prod-pecans-roasted"
    ]
  },
  {
    id: "catalog-sec-dates",
    categoryKey: "dates",
    eyebrow: "🌴 TAXONOMY: ARABIAN DATES & BERRIES",
    title: "Dates, Figs & Exotic Berries",
    desc: "King-grade Arabian Medjool dates, Turkish sun-dried figs, ruby-red whole cranberries, and naturally sweet Afghani green raisins.",
    productIds: ["prod-dates-medjool", "prod-figs-turkish", "prod-berries-cranberry", "prod-raisins-green"]
  },
  {
    id: "catalog-sec-seeds",
    categoryKey: "seeds",
    eyebrow: "🌱 TAXONOMY: SUPERFOODS & IMMUNITY",
    title: "Super Seeds & Trail Mixes",
    desc: "7-in-1 roasted super seeds blend, classic Kaju-Badam-Kismis mix, and antioxidant-rich Nut & Berry vitality trail mix.",
    productIds: ["prod-seeds-supermix", "prod-mix-kaju-badam-kismis", "prod-trail-nut-berry"]
  },
  {
    id: "catalog-sec-hampers",
    categoryKey: "gifting",
    eyebrow: "🎁 TAXONOMY: CELEBRATIONS & LUXURY",
    title: "Festive Luxury Gift Hampers",
    desc: "Handcrafted 4-in-1 airtight glass jar celebration boxes and heirloom 6-canister dark mahogany wooden chest gift hampers.",
    productIds: ["prod-festive-gift-box", "prod-hamper-imperial-wood"]
  },
  {
    id: "catalog-sec-spices",
    categoryKey: "spices",
    eyebrow: "🌿 TAXONOMY: ROYAL HERITAGE SPICES",
    title: "Aromatic Single-Origin Spices",
    desc: "8mm+ bold green cardamom pods straight from Western Ghats and 100% pure authentic Kashmiri Mongra Saffron.",
    productIds: ["prod-cardamom-green", "prod-saffron-kashmir"]
  }
];

const CATEGORY_MAP = {
  nuts: { productId: 'prod-cashews-whole', sectionId: 'catalog-sec-nuts' },
  cashews: { productId: 'prod-cashews-whole', sectionId: 'catalog-sec-nuts' },
  almonds: { productId: 'prod-almonds-california', sectionId: 'catalog-sec-nuts' },
  pistachios: { productId: 'prod-pistachios-roasted', sectionId: 'catalog-sec-nuts' },
  walnuts: { productId: 'prod-walnuts-kashmiri', sectionId: 'catalog-sec-nuts' },
  hazelnuts: { productId: 'prod-hazelnuts-roasted', sectionId: 'catalog-sec-nuts' },
  chilgoza: { productId: 'prod-pine-nuts-chilgoza', sectionId: 'catalog-sec-nuts' },
  pinenuts: { productId: 'prod-pine-nuts-chilgoza', sectionId: 'catalog-sec-nuts' },
  pecans: { productId: 'prod-pecans-roasted', sectionId: 'catalog-sec-nuts' },

  dates: { productId: 'prod-dates-medjool', sectionId: 'catalog-sec-dates' },
  figs: { productId: 'prod-figs-turkish', sectionId: 'catalog-sec-dates' },
  anjeer: { productId: 'prod-figs-turkish', sectionId: 'catalog-sec-dates' },
  berries: { productId: 'prod-berries-cranberry', sectionId: 'catalog-sec-dates' },
  raisins: { productId: 'prod-raisins-green', sectionId: 'catalog-sec-dates' },

  seeds: { productId: 'prod-seeds-supermix', sectionId: 'catalog-sec-seeds' },
  mixes: { productId: 'prod-mix-kaju-badam-kismis', sectionId: 'catalog-sec-seeds' },
  combos: { productId: 'prod-mix-kaju-badam-kismis', sectionId: 'catalog-sec-seeds' },

  gifting: { productId: 'prod-festive-gift-box', sectionId: 'catalog-sec-hampers' },
  hampers: { productId: 'prod-festive-gift-box', sectionId: 'catalog-sec-hampers' },

  spices: { productId: 'prod-cardamom-green', sectionId: 'catalog-sec-spices' },
  cardamom: { productId: 'prod-cardamom-green', sectionId: 'catalog-sec-spices' },
  saffron: { productId: 'prod-saffron-kashmir', sectionId: 'catalog-sec-spices' },
  kesar: { productId: 'prod-saffron-kashmir', sectionId: 'catalog-sec-spices' },

  deals: { productId: 'prod-pistachios-roasted', sectionId: 'catalog-sec-nuts' },
  all: { productId: null, sectionId: 'catalog' }
};

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

function sortProductsList(list, sort) {
  const sorted = [...list];
  if (sort === 'price-low') {
    sorted.sort((a, b) => a.weights[0].price - b.weights[0].price);
  } else if (sort === 'price-high') {
    sorted.sort((a, b) => b.weights[0].price - a.weights[0].price);
  } else if (sort === 'rating') {
    sorted.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
  } else if (sort === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sorted;
}

// --- PRODUCT CATALOG RENDERING (GROUPED BY CATEGORY WITH DISTINCT HEADINGS) ---
function renderProducts(search = state.searchQuery, sort = state.sortBy, force = false) {
  const container = document.getElementById('catalog-showcase') || document.getElementById('products-grid');
  if (!container) return;

  const isSearching = search && search.trim().length > 0;
  const isDefaultSort = !sort || sort === 'featured';

  // If container already contains pre-rendered catalog and no search/sort is active, preserve DOM
  if (!isSearching && isDefaultSort && !force && container.children.length > 0) {
    return;
  }

  if (isSearching) {
    const q = search.toLowerCase().trim();
    let searchResults = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );

    searchResults = sortProductsList(searchResults, sort);

    if (searchResults.length === 0) {
      container.innerHTML = `
        <div class="catalog-empty-state">
          <p class="empty-state-title">No dry fruits matched "${escapeHtml(search)}"</p>
          <p class="empty-state-desc">Try searching for cashews, almonds, pistachios, dates, berries, or gift hampers.</p>
          <button type="button" class="btn-checkout" onclick="clearCatalogSearch(true)" style="max-width: 220px; margin: 0 auto; padding: 0.65rem 1.25rem; font-size: 0.85rem;">
            View All Categories
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="catalog-group-section search-results-section">
        <div class="catalog-group-header">
          <div class="catalog-group-header-left">
            <span class="catalog-group-eyebrow">Search Results</span>
            <h3 class="catalog-group-title">Results for "${escapeHtml(search)}"</h3>
            <p class="catalog-group-desc">Showing ${searchResults.length} dry fruit ${searchResults.length === 1 ? 'item' : 'items'} matching your query.</p>
          </div>
          <div class="catalog-group-header-right">
            <button type="button" class="btn-clear-search-pill" onclick="clearCatalogSearch(false)">
              ✕ Clear Search
            </button>
          </div>
        </div>
        <div class="products-grid">
          ${searchResults.map(product => createProductCardHtml(product)).join('')}
        </div>
      </div>
    `;
    return;
  }

  // Render distinct categorized sections with custom luxury headings & subtitles
  let html = '';
  PRODUCT_GROUPS.forEach(group => {
    let groupProducts = PRODUCTS.filter(p => group.productIds.includes(p.id));
    groupProducts = sortProductsList(groupProducts, sort);

    if (groupProducts.length === 0) return;

    html += `
      <section class="catalog-group-section" id="${group.id}" data-count="${groupProducts.length}">
        <div class="catalog-group-header">
          <div class="catalog-group-header-left">
            <span class="catalog-group-eyebrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ${group.eyebrow}
            </span>
            <h3 class="catalog-group-title">${group.title}</h3>
            <p class="catalog-group-desc">${group.desc}</p>
          </div>
          <div class="catalog-group-header-right">
            <span class="catalog-group-badge-count">${groupProducts.length} Products</span>
          </div>
        </div>
        <div class="products-grid">
          ${groupProducts.map(product => createProductCardHtml(product)).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
}

function clearCatalogSearch(shouldScroll = false) {
  state.searchQuery = '';
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) searchInput.value = '';
  renderProducts();
  if (shouldScroll) {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function scrollToCatalogCategory(catKey) {
  // If search was active, clear it first so all groups are visible
  if (state.searchQuery) {
    state.searchQuery = '';
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) searchInput.value = '';
    renderProducts();
  }

  // Update active tab highlight in navigation bar
  document.querySelectorAll('.category-nav-item').forEach(item => {
    const link = item.querySelector('a');
    if (link && link.getAttribute('onclick') && link.getAttribute('onclick').includes(`'${catKey}'`)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const mapping = CATEGORY_MAP[catKey] || CATEGORY_MAP['all'];
  const targetCard = mapping.productId ? document.querySelector(`.product-card[data-product-id="${mapping.productId}"]`) : null;
  const targetSection = mapping.sectionId ? document.getElementById(mapping.sectionId) : null;

  const elementToScroll = targetCard || targetSection || document.getElementById('catalog');
  if (!elementToScroll) return;

  const headerOffset = 95;
  const elementPosition = elementToScroll.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  if (targetCard) {
    targetCard.classList.remove('highlight-pulse');
    void targetCard.offsetWidth; // force DOM reflow
    targetCard.classList.add('highlight-pulse');
    setTimeout(() => {
      targetCard.classList.remove('highlight-pulse');
    }, 2000);
  }
}

function createProductCardHtml(product) {
  const isWishlisted = state.isInWishlist(product.id);
  const primaryWeight = product.weights[0];

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
        <div class="card-badges">
          <span class="badge-discount">${product.discount}</span>
          <span class="badge-tag">${product.badge}</span>
        </div>
        <button class="btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                onclick="handleToggleWishlist('${product.id}')" 
                aria-label="Add to wishlist" title="Save to Wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
               fill="${isWishlisted ? '#E52538' : 'none'}" stroke="currentColor" stroke-width="2" 
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>
        <button class="quick-view-overlay-btn" onclick="openQuickView('${product.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          Quick View
        </button>
      </div>

      <div class="product-body">
        <div>
          <span class="product-cat-name">${product.category}</span>
          <h3 class="product-title" onclick="openQuickView('${product.id}')" style="cursor: pointer;">${product.name}</h3>
          
          <div class="product-rating">
            <div class="stars">★★★★★</div>
            <span class="review-count">(${product.reviewCount})</span>
          </div>

          <!-- Pack Size Selector Chips -->
          <div class="weight-selector">
            ${product.weights.map((w, idx) => `
              <button type="button" 
                      class="weight-chip ${idx === 0 ? 'active' : ''}" 
                      onclick="selectCardWeight(this, '${w.size}', ${w.price}, ${w.mrp})">
                ${w.size}
              </button>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="product-pricing">
            <span class="price-current">Rs. ${primaryWeight.price}</span>
            <span class="price-mrp">Rs. ${primaryWeight.mrp}</span>
            <span class="price-save">Save Rs. ${primaryWeight.mrp - primaryWeight.price}</span>
          </div>

          <button class="btn-add-cart" onclick="handleAddCardToCart(this, '${product.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- TRENDING CAROUSEL RENDERING & CONTROLS ---
function renderTrendingCarousel() {
  const track = document.getElementById('trending-carousel-track');
  if (!track) return;

  // Showcase all products with bestsellers & high ratings first
  const trendingList = [...PRODUCTS].sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);

  track.innerHTML = trendingList.map(product => `
    <div class="trending-carousel-slide">
      ${createProductCardHtml(product)}
    </div>
  `).join('');
}

function initTrendingCarousel() {
  const track = document.getElementById('trending-carousel-track');
  const prevBtn = document.getElementById('trending-prev');
  const nextBtn = document.getElementById('trending-next');
  if (!track || !prevBtn || !nextBtn) return;

  const getScrollDistance = () => {
    const slide = track.querySelector('.trending-carousel-slide');
    return slide ? slide.offsetWidth + 24 : 310;
  };

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollDistance(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
  });
}

function clearFilters() {
  clearCatalogSearch(false);
}

function selectCardWeight(btnOrId, size, price, mrp) {
  let card = null;
  if (btnOrId && typeof btnOrId === 'object' && btnOrId.closest) {
    card = btnOrId.closest('.product-card');
  } else if (typeof btnOrId === 'string') {
    card = document.querySelector(`.product-card[data-product-id="${btnOrId}"]`);
  }

  if (card) {
    card.querySelectorAll('.weight-chip').forEach(chip => {
      chip.classList.toggle('active', chip.innerText.trim() === size);
    });
    const priceEl = card.querySelector('.price-current');
    const mrpEl = card.querySelector('.price-mrp');
    const saveEl = card.querySelector('.price-save');
    if (priceEl) priceEl.innerText = `Rs. ${price}`;
    if (mrpEl) mrpEl.innerText = `Rs. ${mrp}`;
    if (saveEl) saveEl.innerText = `Save Rs. ${mrp - price}`;
    return;
  }

  const container = document.getElementById(`weights-${btnOrId}`);
  if (container) {
    container.querySelectorAll('.weight-chip').forEach(chip => {
      chip.classList.toggle('active', chip.innerText.trim() === size);
    });
  }

  const priceEl = document.getElementById(`price-${btnOrId}`);
  const mrpEl = document.getElementById(`mrp-${btnOrId}`);
  const saveEl = document.getElementById(`save-${btnOrId}`);

  if (priceEl) priceEl.innerText = `Rs. ${price}`;
  if (mrpEl) mrpEl.innerText = `Rs. ${mrp}`;
  if (saveEl) saveEl.innerText = `Save Rs. ${mrp - price}`;
}

function handleAddCardToCart(btnOrId, explicitProdId) {
  let card = null;
  let productId = explicitProdId || (typeof btnOrId === 'string' ? btnOrId : null);
  let selectedSize = null;

  if (btnOrId && typeof btnOrId === 'object' && btnOrId.closest) {
    card = btnOrId.closest('.product-card');
    if (card) {
      productId = productId || card.getAttribute('data-product-id');
      const activeChip = card.querySelector('.weight-chip.active');
      if (activeChip) selectedSize = activeChip.innerText.trim();
    }
  }

  if (!selectedSize && productId) {
    const container = document.getElementById(`weights-${productId}`);
    if (container) {
      const activeChip = container.querySelector('.weight-chip.active');
      if (activeChip) selectedSize = activeChip.innerText.trim();
    }
  }

  if (productId) {
    state.addToCart(productId, selectedSize, 1);
    openCartDrawer();
  }
}

function handleToggleWishlist(productId) {
  state.toggleWishlist(productId);
}

function updateProductWishlistButtons() {
  document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
    const card = btn.closest('.product-card');
    if (!card) return;
    const prodId = card.getAttribute('data-product-id');
    const isWishlisted = state.isInWishlist(prodId);
    btn.classList.toggle('active', isWishlisted);
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', isWishlisted ? '#E52538' : 'none');
  });

  const wishlistCountBadge = document.getElementById('wishlist-badge');
  const mobWishlistBadge = document.getElementById('mob-wishlist-badge');
  const count = state.wishlist.length;

  if (wishlistCountBadge) {
    wishlistCountBadge.innerText = count;
    wishlistCountBadge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (mobWishlistBadge) {
    mobWishlistBadge.innerText = count;
    mobWishlistBadge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function updateHeaderCounters() {
  const cartBadge = document.getElementById('cart-badge');
  const mobCartBadge = document.getElementById('mob-cart-badge');
  const count = state.getCartItemCount();

  if (cartBadge) {
    cartBadge.innerText = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (mobCartBadge) {
    mobCartBadge.innerText = count;
    mobCartBadge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// --- CART DRAWER RENDERING ---
function renderCartDrawer() {
  const listContainer = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-drawer-subtotal');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-drawer-discount');
  const deliveryEl = document.getElementById('cart-drawer-delivery');
  const totalEl = document.getElementById('cart-drawer-total');
  const couponContainer = document.getElementById('cart-active-coupon-container');
  const shippingGoalFill = document.getElementById('shipping-progress-fill');
  const shippingGoalText = document.getElementById('shipping-goal-status');

  if (!listContainer) return;

  if (state.cart.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-cart-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h4 style="font-family: var(--font-editorial); font-size: 1.15rem; color: var(--text-primary);">Your Cart is Empty</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-top: 0.25rem;">
          Add some crunchy, nutrient-dense Wonderful dry fruits to start making everyday happy!
        </p>
      </div>
    `;
  } else {
    listContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item-card">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-weight">Pack Size: ${item.size}</span>
          </div>

          <div class="cart-item-row">
            <div class="qty-counter">
              <button class="qty-btn" onclick="state.updateQuantity('${item.id}', '${item.size}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn" onclick="state.updateQuantity('${item.id}', '${item.size}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        </div>

        <button class="cart-item-remove-btn" onclick="state.removeFromCart('${item.id}', '${item.size}')" title="Remove item" aria-label="Remove item">✕</button>
      </div>
    `).join('');
  }

  const subtotal = state.getCartSubtotal();
  const discount = state.getCartDiscount();
  const delivery = state.getDeliveryFee();
  const total = state.getCartTotal();

  if (subtotalEl) subtotalEl.innerText = `Rs. ${subtotal.toLocaleString()}`;

  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.innerText = `- Rs. ${discount.toLocaleString()}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (deliveryEl) {
    deliveryEl.innerText = delivery === 0 ? (subtotal > 0 ? 'FREE' : 'Rs. 0') : `Rs. ${delivery}`;
    deliveryEl.style.color = delivery === 0 && subtotal > 0 ? 'var(--accent-green)' : 'inherit';
  }

  if (totalEl) totalEl.innerText = `Rs. ${total.toLocaleString()}`;

  // Active Coupon Pill
  if (couponContainer) {
    if (state.appliedCoupon) {
      couponContainer.innerHTML = `
        <div class="active-coupon-tag">
          <span>✨ Code <strong>${state.appliedCoupon.code}</strong> Applied (${state.appliedCoupon.discountPercent}% OFF)</span>
          <button type="button" class="btn-remove-coupon" onclick="state.removeCoupon()" title="Remove Coupon">✕</button>
        </div>
      `;
    } else {
      couponContainer.innerHTML = '';
    }
  }

  // Free shipping progress bar
  if (shippingGoalFill && shippingGoalText) {
    if (subtotal >= state.freeShippingGoal) {
      shippingGoalFill.style.width = '100%';
      shippingGoalText.innerHTML = `🎉 You've unlocked <strong>FREE Express Delivery</strong>!`;
    } else {
      const remaining = state.freeShippingGoal - subtotal;
      const pct = Math.min(100, Math.round((subtotal / state.freeShippingGoal) * 100));
      shippingGoalFill.style.width = `${pct}%`;
      shippingGoalText.innerHTML = `Add <strong>Rs. ${remaining}</strong> more to unlock FREE Delivery! 🚚`;
    }
  }
}

// Drawer Controls
function openCartDrawer() {
  closeWishlistDrawer();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('drawer-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('drawer-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// --- WISHLIST DRAWER RENDERING ---
function renderWishlistDrawer() {
  const listContainer = document.getElementById('wishlist-items-list');
  const countEl = document.getElementById('wishlist-drawer-count');
  if (!listContainer) return;

  const wishlistedProducts = PRODUCTS.filter(p => state.isInWishlist(p.id));
  if (countEl) countEl.innerText = `(${wishlistedProducts.length})`;

  if (wishlistedProducts.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-cart-state" style="padding: 3rem 1rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        <h4 style="font-family: var(--font-editorial); font-size: 1.15rem; color: var(--text-primary); margin-top: 0.5rem;">Your Wishlist is Empty</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-top: 0.25rem;">
          Save your favourite whole cashews, almonds, and festive gift boxes here by clicking the heart icon!
        </p>
      </div>
    `;
    const moveAllBtn = document.getElementById('btn-wishlist-move-all');
    if (moveAllBtn) moveAllBtn.style.display = 'none';
  } else {
    listContainer.innerHTML = wishlistedProducts.map(item => `
      <div class="wishlist-item-card">
        <img class="wishlist-item-img" src="${item.image}" alt="${item.name}" />
        <div class="wishlist-item-details">
          <h4 class="wishlist-item-title">${item.name}</h4>
          <div class="wishlist-item-price">Rs. ${item.weights[0].price} <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 500;">(${item.weights[0].size})</span></div>
          <button type="button" class="wishlist-btn-move" onclick="state.moveWishlistToCart('${item.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Move to Cart
          </button>
        </div>
        <button type="button" class="wishlist-btn-remove" onclick="state.toggleWishlist('${item.id}')" title="Remove from wishlist">✕</button>
      </div>
    `).join('');

    const moveAllBtn = document.getElementById('btn-wishlist-move-all');
    if (moveAllBtn) moveAllBtn.style.display = 'block';
  }
}

function openWishlistDrawer() {
  closeCartDrawer();
  document.getElementById('wishlist-drawer').classList.add('open');
  document.getElementById('drawer-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWishlistDrawer() {
  document.getElementById('wishlist-drawer').classList.remove('open');
  document.getElementById('drawer-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// --- CHECKOUT MODAL & ORDER PROCESS ---
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Please add items to your cart before proceeding!");
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  // Populate checkout summary
  const summaryItems = document.getElementById('checkout-summary-items');
  const subtotalEl = document.getElementById('checkout-summary-subtotal');
  const discountRow = document.getElementById('checkout-discount-row');
  const discountEl = document.getElementById('checkout-summary-discount');
  const shippingEl = document.getElementById('checkout-summary-shipping');
  const totalEl = document.getElementById('checkout-summary-total');

  if (summaryItems) {
    summaryItems.innerHTML = state.cart.map(item => `
      <div class="summary-item-row">
        <div>
          <strong>${item.name}</strong>
          <div style="font-size: 0.72rem; color: var(--text-muted);">${item.size} × ${item.quantity}</div>
        </div>
        <div style="font-weight: 700;">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
      </div>
    `).join('');
  }

  const subtotal = state.getCartSubtotal();
  const discount = state.getCartDiscount();
  const delivery = state.getDeliveryFee();
  const total = state.getCartTotal();

  if (subtotalEl) subtotalEl.innerText = `Rs. ${subtotal.toLocaleString()}`;
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.innerText = `- Rs. ${discount.toLocaleString()}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
  if (shippingEl) {
    shippingEl.innerText = delivery === 0 ? 'FREE' : `Rs. ${delivery}`;
    shippingEl.style.color = delivery === 0 ? 'var(--accent-green)' : 'inherit';
  }
  if (totalEl) totalEl.innerText = `Rs. ${total.toLocaleString()}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function handlePaymentMethodChange(method) {
  document.querySelectorAll('.payment-option-card').forEach(card => {
    card.classList.toggle('selected', card.getAttribute('data-method') === method);
    const radio = card.querySelector('.payment-radio');
    if (radio) radio.checked = (card.getAttribute('data-method') === method);
  });

  const upiBox = document.getElementById('checkout-upi-box');
  const cardBox = document.getElementById('checkout-card-box');

  if (upiBox) upiBox.style.display = method === 'upi' ? 'block' : 'none';
  if (cardBox) cardBox.style.display = method === 'card' ? 'block' : 'none';
}

function submitOrder(e) {
  e.preventDefault();
  const form = document.getElementById('checkout-form');
  if (!form || !form.checkValidity()) {
    if (form) form.reportValidity();
    return;
  }

  const fullName = document.getElementById('co-name').value;
  const phone = document.getElementById('co-phone').value;
  const address = document.getElementById('co-address').value;
  const city = document.getElementById('co-city').value;
  const pincode = document.getElementById('co-pin').value;
  const selectedPaymentCard = document.querySelector('.payment-option-card.selected');
  const paymentMethod = selectedPaymentCard ? selectedPaymentCard.getAttribute('data-method') : 'cod';

  const orderNum = `#WN-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderTotal = state.getCartTotal();

  const newOrder = {
    orderId: orderNum,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    items: [...state.cart],
    total: orderTotal,
    paymentMethod: paymentMethod.toUpperCase(),
    customer: { fullName, phone, address, city, pincode },
    status: "Confirmed & Packing"
  };

  state.saveOrder(newOrder);

  // Clear cart
  state.cart = [];
  state.saveToStorage('wonderful_cart', []);
  state.notifyUpdate();

  closeCheckoutModal();

  // Show Success Modal
  const successModal = document.getElementById('checkout-success-modal');
  if (successModal) {
    document.getElementById('checkout-order-number').innerText = orderNum;
    document.getElementById('checkout-order-total').innerText = `Rs. ${orderTotal.toLocaleString()}`;
    document.getElementById('checkout-order-address').innerText = `${city} (${pincode})`;
    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Trigger celebratory confetti
    if (window.confetti) {
      window.confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }
}

function closeSuccessModal() {
  const successModal = document.getElementById('checkout-success-modal');
  if (successModal) successModal.classList.remove('open');
  document.body.style.overflow = '';
}

// --- SHIPMENT TRACKING MODAL ---
function openTrackingModal(prefillOrderId = '') {
  const modal = document.getElementById('tracking-modal');
  if (!modal) return;

  const input = document.getElementById('tracking-order-input');
  if (input) {
    if (prefillOrderId) {
      input.value = prefillOrderId;
    } else if (state.orders.length > 0) {
      input.value = state.orders[0].orderId;
    } else {
      input.value = '#WN-849204';
    }
  }

  performOrderTrack();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeTrackingModal() {
  const modal = document.getElementById('tracking-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function performOrderTrack() {
  const input = document.getElementById('tracking-order-input');
  const resultIdEl = document.getElementById('track-disp-order-id');
  const resultStatusEl = document.getElementById('track-disp-status');
  if (!input) return;

  const query = input.value.trim().toUpperCase();
  const foundOrder = state.orders.find(o => o.orderId.toUpperCase() === query);

  if (resultIdEl) resultIdEl.innerText = query || '#WN-849204';
  if (resultStatusEl) {
    resultStatusEl.innerText = foundOrder ? foundOrder.status : 'Dispatched with BlueDart Express';
  }
}

// --- REVIEWS SYSTEM & MODAL ---
let selectedStarRating = 5;

function openReviewModal() {
  const modal = document.getElementById('review-modal');
  if (!modal) return;
  setReviewStar(5);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReviewModal() {
  const modal = document.getElementById('review-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function setReviewStar(rating) {
  selectedStarRating = rating;
  const stars = document.querySelectorAll('.star-rating-selector span');
  stars.forEach((star, idx) => {
    star.classList.toggle('selected', idx < rating);
  });
}

function submitCustomerReview(e) {
  e.preventDefault();
  const name = document.getElementById('rev-name').value;
  const location = document.getElementById('rev-city').value;
  const product = document.getElementById('rev-product').value;
  const title = document.getElementById('rev-title').value;
  const body = document.getElementById('rev-body').value;

  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || "WN";

  const newReview = {
    name,
    location,
    product,
    rating: selectedStarRating,
    title,
    body,
    avatar: initials,
    date: "Verified Just Now"
  };

  state.addReview(newReview);
  showToast("Thank you for your wonderful review! ❤️");
  closeReviewModal();
  document.getElementById('review-form').reset();
}

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  const allReviews = [...state.userReviews, ...DEFAULT_REVIEWS];

  grid.innerHTML = allReviews.map(r => `
    <div class="review-card">
      <div>
        <div class="review-top">
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <span class="verified-badge">✓ Verified Buyer</span>
        </div>
        <h4 class="review-quote" style="margin-top: 0.75rem;">"${r.title}"</h4>
        <p class="review-body" style="margin-top: 0.5rem;">${r.body}</p>
      </div>
      <div class="review-author">
        <div class="author-avatar">${r.avatar}</div>
        <div class="author-meta">
          <h5>${r.name}</h5>
          <span>${r.location} • Purchased ${r.product}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// --- PRODUCT QUICK VIEW MODAL ---
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('quick-view-modal');
  const modalContainer = document.getElementById('quick-view-content');
  if (!modalBackdrop || !modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal-grid">
      <div class="modal-media">
        <img src="${product.image}" alt="${product.name}" id="qv-main-img" />
      </div>

      <div class="modal-info">
        <div>
          <span class="product-cat-name">${product.category} • ${product.badge}</span>
          <h2 class="modal-title">${product.name}</h2>
          
          <div class="product-rating" style="margin-top: 0.4rem;">
            <div class="stars">★★★★★</div>
            <span class="review-count">(${product.reviewCount} customer reviews)</span>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
          ${product.description}
        </p>

        <!-- Pack Size Options -->
        <div>
          <label style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-secondary); display: block; margin-bottom: 0.4rem;">
            Select Pack Size:
          </label>
          <div class="weight-selector" id="qv-weights">
            ${product.weights.map((w, idx) => `
              <button type="button" class="weight-chip ${idx === 0 ? 'active' : ''}" 
                      onclick="selectQvWeight('${product.id}', '${w.size}', ${w.price}, ${w.mrp})">
                ${w.size}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="product-pricing" style="margin-top: 0.5rem;">
          <span class="price-current" id="qv-price" style="font-size: 1.5rem;">Rs. ${product.weights[0].price}</span>
          <span class="price-mrp" id="qv-mrp" style="font-size: 1rem;">Rs. ${product.weights[0].mrp}</span>
          <span class="price-save" id="qv-save">Save Rs. ${product.weights[0].mrp - product.weights[0].price}</span>
        </div>

        <!-- Nutritional Highlights -->
        <div style="background: var(--bg-lavender); padding: 0.85rem; border-radius: var(--radius-md); margin-top: 0.5rem;">
          <h4 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.35rem;">
            Nutritional Values (100% Traditional Harvest)
          </h4>
          <table class="nutrition-table">
            <tbody>
              ${Object.entries(product.nutrition).map(([key, val]) => `
                <tr>
                  <td>${key}</td>
                  <td>${val}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
          <button class="btn-checkout" onclick="handleQvAddToCart('${product.id}')" style="flex: 1;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add To Cart
          </button>
          <button class="action-btn" onclick="state.toggleWishlist('${product.id}'); updateQvWishlistIcon('${product.id}')" style="border: 1px solid var(--border-subtle);" title="Save to Wishlist">
            <svg id="qv-wishlist-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${state.isInWishlist(product.id) ? '#E52538' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateQvWishlistIcon(productId) {
  const svg = document.getElementById('qv-wishlist-svg');
  if (svg) {
    svg.setAttribute('fill', state.isInWishlist(productId) ? '#E52538' : 'none');
  }
}

function selectQvWeight(productId, size, price, mrp) {
  const container = document.getElementById('qv-weights');
  if (container) {
    container.querySelectorAll('.weight-chip').forEach(c => {
      c.classList.toggle('active', c.innerText.trim() === size);
    });
  }
  const priceEl = document.getElementById('qv-price');
  const mrpEl = document.getElementById('qv-mrp');
  const saveEl = document.getElementById('qv-save');
  if (priceEl) priceEl.innerText = `Rs. ${price}`;
  if (mrpEl) mrpEl.innerText = `Rs. ${mrp}`;
  if (saveEl) saveEl.innerText = `Save Rs. ${mrp - price}`;
}

function handleQvAddToCart(productId) {
  const container = document.getElementById('qv-weights');
  let selectedSize = null;
  if (container) {
    const active = container.querySelector('.weight-chip.active');
    if (active) selectedSize = active.innerText.trim();
  }
  state.addToCart(productId, selectedSize, 1);
  closeQuickView();
  openCartDrawer();
}

function closeQuickView() {
  const modalBackdrop = document.getElementById('quick-view-modal');
  if (modalBackdrop) modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// --- HERO BANNER CAROUSEL ---
let currentSlide = 0;
let autoSlideTimer = null;

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const count = slides.length || 4;
  currentSlide = (index + count) % count;
  const track = document.getElementById('hero-slider-track');
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  document.querySelectorAll('.slider-dots .dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === currentSlide);
  });
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => nextSlide(), 5000);
}

function stopAutoSlide() {
  if (autoSlideTimer) clearInterval(autoSlideTimer);
}

// --- SEARCH ANIMATION & ROTATION ---
const searchPrompts = [
  "Search 'California Almonds'...",
  "Search 'Royal Whole Cashews'...",
  "Search 'Jumbo Salted Pistachios'...",
  "Search 'Kaju Badam Kismis Mix'...",
  "Search 'Green Cardamom (Hari Elaichi)'...",
  "Search 'Festive Royal Gift Box'...",
  "Search 'Kashmiri Walnuts'..."
];
let promptIndex = 0;

function rotateSearchPrompt() {
  const input = document.getElementById('global-search-input');
  if (!input || document.activeElement === input) return;
  promptIndex = (promptIndex + 1) % searchPrompts.length;
  input.setAttribute('placeholder', searchPrompts[promptIndex]);
}

// --- FLASH DEAL COUNTDOWN TIMER ---
function startCountdown() {
  const hEl = document.getElementById('cd-hours');
  if (!hEl) return;
  let totalSeconds = 8 * 3600 + 42 * 60 + 15;

  setInterval(() => {
    if (totalSeconds <= 0) totalSeconds = 24 * 3600;
    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-minutes');
    const sEl = document.getElementById('cd-seconds');

    if (hEl) hEl.innerText = String(hours).padStart(2, '0');
    if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
    if (sEl) sEl.innerText = String(seconds).padStart(2, '0');
  }, 1000);
}

// --- FAQS ACCORDION LOGIC ---
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Close other items for a clean single-open accordion feel
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('active', !isAlreadyActive);
      btn.setAttribute('aria-expanded', !isAlreadyActive ? 'true' : 'false');
    });
  });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderTrendingCarousel();
  initTrendingCarousel();
  renderReviews();
  initFaqAccordion();
  state.notifyUpdate();
  startCountdown();
  startAutoSlide();

  // Search prompt animation
  setInterval(rotateSearchPrompt, 3500);

  // Sort By selector
  const sortSelect = document.getElementById('sort-catalog-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts(state.searchQuery, state.sortBy);
    });
  }

  // Search input handler
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts(state.searchQuery, state.sortBy);
    });
  }

  // Coupon apply button in cart drawer
  const applyCouponBtn = document.getElementById('btn-apply-coupon');
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const input = document.getElementById('coupon-code-input');
      if (input && input.value) {
        state.applyCoupon(input.value);
        input.value = '';
      }
    });
  }

  // Bulk Inquiry Form
  const bulkForm = document.getElementById('bulk-inquiry-form');
  if (bulkForm) {
    bulkForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Thank you! Our Corporate Gifting Specialist will contact you within 2 hours. ✨");
      bulkForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Welcome to the Wonderful Family! Use code FIRST15 for 15% OFF your order. 🌰");
      newsletterForm.reset();
    });
  }

  // Pause hero slider on hover & touch swipe gestures
  const heroWrapper = document.getElementById('hero-slider-wrapper');
  if (heroWrapper) {
    heroWrapper.addEventListener('mouseenter', stopAutoSlide);
    heroWrapper.addEventListener('mouseleave', startAutoSlide);

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    heroWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    heroWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      startAutoSlide();
    }, { passive: true });
  }
});
