/**
 * QuickBite – Online Food Delivery
 * Comprehensive Vanilla JavaScript Architecture
 * Features: Menu Catalog, Search, Category/Diet Filters, Sorting, Cart with LocalStorage,
 * Checkout Validation, Order Confirmation, Live Order Status Simulation, Confetti & Toasts.
 */

// ==========================================
// 1. DATA CATALOG: 24 Hand-Crafted Dishes
// ==========================================
const FOOD_ITEMS = [
  // --- PIZZAS ---
  {
    id: 'pz-1',
    name: 'Margherita Deluxe',
    category: 'pizza',
    isVeg: true,
    price: 13.99,
    rating: 4.9,
    reviews: 284,
    prepTime: '20-25 min',
    calories: '680 kcal',
    description: 'Slow-fermented sourdough crust topped with San Marzano tomato sauce, fresh buffalo mozzarella, aromatic basil leaves, and cold-pressed extra virgin olive oil.',
    ingredients: ['Sourdough Crust', 'San Marzano Tomatoes', 'Buffalo Mozzarella', 'Fresh Basil', 'EVOO'],
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pz-2',
    name: 'Smoky BBQ Chicken Feast',
    category: 'pizza',
    isVeg: false,
    price: 16.49,
    rating: 4.8,
    reviews: 310,
    prepTime: '25-30 min',
    calories: '890 kcal',
    description: 'Tender grilled chicken tossed in hickory BBQ sauce, red onions, smoked gouda, aged cheddar, and chopped fresh cilantro.',
    ingredients: ['BBQ Grilled Chicken', 'Smoked Gouda', 'Red Onions', 'Cheddar', 'Hickory Glaze', 'Cilantro'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pz-3',
    name: 'Double Pepperoni Supreme',
    category: 'pizza',
    isVeg: false,
    price: 15.99,
    rating: 4.9,
    reviews: 420,
    prepTime: '20-25 min',
    calories: '940 kcal',
    description: 'Loaded with double layers of crispy, cup-and-char beef and turkey pepperoni, melted whole-milk mozzarella, and dried oregano.',
    ingredients: ['Double Pepperoni', 'Whole-Milk Mozzarella', 'Oregano', 'House Tomato Sauce'],
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pz-4',
    name: 'Truffle Wild Mushroom',
    category: 'pizza',
    isVeg: true,
    price: 17.50,
    rating: 4.7,
    reviews: 195,
    prepTime: '25-30 min',
    calories: '720 kcal',
    description: 'Earthy sautéed cremini, shiitake and oyster mushrooms over garlic white cream sauce, fontina cheese, and black truffle oil drizzle.',
    ingredients: ['Wild Mushrooms', 'White Cream Garlic Base', 'Fontina', 'Truffle Oil', 'Thyme'],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80'
  },

  // --- BURGERS ---
  {
    id: 'bg-1',
    name: 'Classic Gourmet Smash Burger',
    category: 'burgers',
    isVeg: false,
    price: 11.99,
    rating: 4.9,
    reviews: 512,
    prepTime: '15-20 min',
    calories: '780 kcal',
    description: 'Two smashed prime Angus beef patties with caramelized crispy edges, melted American cheese, pickles, and our signature QuickBite secret sauce on a toasted brioche bun.',
    ingredients: ['Double Angus Beef', 'American Cheese', 'Secret House Sauce', 'Dill Pickles', 'Brioche Bun'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bg-2',
    name: 'Crispy Buttermilk Chicken Burger',
    category: 'burgers',
    isVeg: false,
    price: 12.49,
    rating: 4.8,
    reviews: 388,
    prepTime: '15-20 min',
    calories: '740 kcal',
    description: 'Golden-fried buttermilk battered chicken breast, crunchy purple cabbage slaw, sliced jalapeños, and creamy sriracha aioli.',
    ingredients: ['Buttermilk Fried Chicken', 'Purple Cabbage Slaw', 'Sriracha Aioli', 'Jalapeños', 'Sesame Bun'],
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bg-3',
    name: 'Truffle Portobello Veggie Burger',
    category: 'burgers',
    isVeg: true,
    price: 10.99,
    rating: 4.7,
    reviews: 172,
    prepTime: '15-20 min',
    calories: '560 kcal',
    description: 'Marinated roasted Portobello mushroom cap stuffed with melted goat cheese, caramelized balsamic onions, and baby arugula.',
    ingredients: ['Portobello Mushroom', 'Goat Cheese', 'Caramelized Onions', 'Arugula', 'Balsamic Glaze'],
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bg-4',
    name: 'Double Bacon & Cheddar Beast',
    category: 'burgers',
    isVeg: false,
    price: 14.25,
    rating: 4.9,
    reviews: 440,
    prepTime: '20-25 min',
    calories: '960 kcal',
    description: 'Double beef patties, thick-cut hardwood smoked bacon strips, double sharp cheddar cheese, beer-battered onion ring, and smoky BBQ drizzle.',
    ingredients: ['Double Beef', 'Smoked Bacon', 'Sharp Cheddar', 'Crispy Onion Ring', 'BBQ Sauce'],
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
  },

  // --- BIRYANI & BOWLS ---
  {
    id: 'by-1',
    name: 'Hyderabadi Dum Chicken Biryani',
    category: 'biryani',
    isVeg: false,
    price: 14.99,
    rating: 4.9,
    reviews: 630,
    prepTime: '25-30 min',
    calories: '850 kcal',
    description: 'Authentic Hyderabadi delicacy made with aromatic long-grain aged Basmati rice, tender bone-in chicken slow-cooked in sealed clay pot with saffron, mint, and fried onions. Served with spiced Mirchi ka Salan and cool cucumber raita.',
    ingredients: ['Aged Basmati Rice', 'Marinated Chicken', 'Kashmiri Saffron', 'Mint', 'Fried Birista', 'Spiced Raita'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'by-2',
    name: 'Royal Mutton Dum Biryani',
    category: 'biryani',
    isVeg: false,
    price: 17.99,
    rating: 5.0,
    reviews: 510,
    prepTime: '30-35 min',
    calories: '920 kcal',
    description: 'Succulent cuts of fresh tender mutton marinated for 12 hours in rich curd, shahi garam masala, and slow-dum cooked with fragrant saffron rice.',
    ingredients: ['Tender Mutton', 'Basmati Rice', 'Shahi Spices', 'Pure Ghee', 'Saffron', 'Boiled Egg'],
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'by-3',
    name: 'Paneer Tikka Biryani Bowl',
    category: 'biryani',
    isVeg: true,
    price: 12.99,
    rating: 4.8,
    reviews: 290,
    prepTime: '20-25 min',
    calories: '710 kcal',
    description: 'Tandoor-charred cottage cheese cubes layered with caramelized aromatic rice, green cardamom, rose water essence, and roasted cashews.',
    ingredients: ['Tandoori Paneer', 'Basmati Rice', 'Cardamom', 'Cashews', 'Saffron Rice', 'Mint Raita'],
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'by-4',
    name: 'Awadhi Lamb Dum Biryani',
    category: 'biryani',
    isVeg: false,
    price: 18.50,
    rating: 4.9,
    reviews: 220,
    prepTime: '30-35 min',
    calories: '890 kcal',
    description: 'Lucknowi-style delicate Awadhi biryani cooked in rich yakhni broth with falling-off-the-bone tender lamb and rose-infused Basmati rice.',
    ingredients: ['Awadhi Lamb', 'Yakhni Broth', 'Basmati Rice', 'Kewra Essence', 'Brown Onions'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80'
  },

  // --- DESSERTS ---
  {
    id: 'ds-1',
    name: 'Molten Belgian Chocolate Lava Cake',
    category: 'desserts',
    isVeg: true,
    price: 7.99,
    rating: 4.9,
    reviews: 410,
    prepTime: '15 min',
    calories: '480 kcal',
    description: 'Warm, decadent dark chocolate cake with a velvety molten chocolate center that flows freely on the first spoonful. Served with Madagascar vanilla gelato.',
    ingredients: ['70% Belgian Dark Chocolate', 'Butter', 'Madagascar Vanilla Gelato', 'Cocoa Powder'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ds-2',
    name: 'New York Creamy Cheesecake',
    category: 'desserts',
    isVeg: true,
    price: 6.99,
    rating: 4.8,
    reviews: 320,
    prepTime: '10 min',
    calories: '420 kcal',
    description: 'Velvety smooth Philadelphia cream cheese filling on a buttery Graham cracker crust, topped with fresh strawberry puree and berries.',
    ingredients: ['Philadelphia Cream Cheese', 'Graham Cracker Crust', 'Strawberry Compote'],
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ds-3',
    name: 'Warm Shahi Gulab Jamun (4 Pcs)',
    category: 'desserts',
    isVeg: true,
    price: 5.49,
    rating: 4.9,
    reviews: 350,
    prepTime: '10 min',
    calories: '380 kcal',
    description: 'Golden fried reduced milk dumplings soaked in green cardamom and saffron scented sugar syrup, garnished with slivered pistachios.',
    ingredients: ['Mawa / Khoya', 'Saffron Sugar Syrup', 'Cardamom', 'Pistachios'],
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ds-4',
    name: 'Artisanal Italian Tiramisu',
    category: 'desserts',
    isVeg: true,
    price: 8.25,
    rating: 4.7,
    reviews: 180,
    prepTime: '10 min',
    calories: '440 kcal',
    description: 'Espresso-soaked Savoiardi ladyfingers layered with fluffy mascarpone cream and dusted generously with Dutch dark cocoa powder.',
    ingredients: ['Savoiardi Ladyfingers', 'Italian Mascarpone', 'Espresso', 'Dark Cocoa'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80'
  },

  // --- DRINKS & SHAKES ---
  {
    id: 'dr-1',
    name: 'Fresh Mint & Lime Mojito',
    category: 'drinks',
    isVeg: true,
    price: 4.99,
    rating: 4.8,
    reviews: 210,
    prepTime: '5-10 min',
    calories: '110 kcal',
    description: 'Crushed garden mint, freshly squeezed Persian lime juice, raw cane sugar syrup, and sparkling soda served over crushed crystal ice.',
    ingredients: ['Fresh Mint', 'Lime Juice', 'Cane Sugar', 'Sparkling Soda', 'Ice'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dr-2',
    name: 'Alphonso Mango Cream Smoothie',
    category: 'drinks',
    isVeg: true,
    price: 5.49,
    rating: 4.9,
    reviews: 340,
    prepTime: '5-10 min',
    calories: '230 kcal',
    description: 'Rich puree of sun-ripened Ratnagiri Alphonso mangoes blended with chilled Greek yogurt, honey, and crushed cardamoms.',
    ingredients: ['Alphonso Mango Pulp', 'Greek Yogurt', 'Wild Honey', 'Cardamom Hint'],
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dr-3',
    name: 'Cold Brew Salted Caramel',
    category: 'drinks',
    isVeg: true,
    price: 5.99,
    rating: 4.7,
    reviews: 190,
    prepTime: '5 min',
    calories: '190 kcal',
    description: '18-hour steeped single-origin Arabica cold brew coffee layered with silky salted caramel syrup and topped with cold sweet cream foam.',
    ingredients: ['Arabica Cold Brew', 'Salted Caramel', 'Sweet Cream Foam', 'Sea Salt'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dr-4',
    name: 'Iced Peach Sparkler',
    category: 'drinks',
    isVeg: true,
    price: 4.49,
    rating: 4.8,
    reviews: 160,
    prepTime: '5 min',
    calories: '95 kcal',
    description: 'Brewed white peach tea lightly sweetened and infused with sparkling tonic water, lemon wheel, and fresh rosemary sprig.',
    ingredients: ['White Peach Essence', 'Brewed Tea', 'Sparkling Water', 'Lemon', 'Rosemary'],
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80'
  },

  // --- WRAPS & PASTAS ---
  {
    id: 'wp-1',
    name: 'Paneer Shawarma Flatbread Wrap',
    category: 'wraps',
    isVeg: true,
    price: 8.99,
    rating: 4.8,
    reviews: 240,
    prepTime: '15-20 min',
    calories: '540 kcal',
    description: 'Char-grilled cottage cheese strips, pickled turnips, crisp cucumber ribbons, hummus, and garlic toum rolled into toasted pita.',
    ingredients: ['Spiced Paneer', 'Garlic Toum', 'Pickled Turnips', 'Hummus', 'Toasted Pita'],
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'wp-2',
    name: 'Smoked Chicken Tikka Kathi Roll',
    category: 'wraps',
    isVeg: false,
    price: 9.99,
    rating: 4.9,
    reviews: 390,
    prepTime: '15-20 min',
    calories: '610 kcal',
    description: 'Flaky handmade paratha layered with an egg omelet, filled with succulent chicken tikka cubes, spiced pickled onions, and mint chutney.',
    ingredients: ['Tandoori Chicken Tikka', 'Handmade Paratha', 'Egg Layer', 'Mint-Coriander Chutney', 'Onions'],
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'wp-3',
    name: 'Creamy Tuscan Penne Alfredo',
    category: 'wraps',
    isVeg: true,
    price: 13.49,
    rating: 4.7,
    reviews: 275,
    prepTime: '20-25 min',
    calories: '760 kcal',
    description: 'Al dente penne pasta tossed in rich garlic parmesan cream sauce with sun-dried tomatoes, baby spinach, and freshly cracked black pepper.',
    ingredients: ['Penne Pasta', 'Parmesan Reggiano', 'Sun-Dried Tomatoes', 'Baby Spinach', 'Heavy Cream'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'wp-4',
    name: 'Slow-Simmered Bolognese Tagliatelle',
    category: 'wraps',
    isVeg: false,
    price: 15.99,
    rating: 4.8,
    reviews: 315,
    prepTime: '20-25 min',
    calories: '820 kcal',
    description: 'Handmade egg tagliatelle ribbons paired with a 4-hour slow-cooked beef and pork ragù, topped with shaved aged Parmigiano.',
    ingredients: ['Fresh Tagliatelle', 'Traditional Bolognese Ragù', 'Parmigiano Reggiano', 'Rosemary'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80'
  }
];

// Available Promo Codes
const PROMO_CODES = {
  'QUICK20': { code: 'QUICK20', type: 'percent', value: 20, minOrder: 25, label: '20% OFF over $25' },
  'FREESHIP': { code: 'FREESHIP', type: 'delivery', value: 3.49, minOrder: 15, label: 'Free Delivery' },
  'FIRSTBITE': { code: 'FIRSTBITE', type: 'fixed', value: 5.00, minOrder: 20, label: '$5.00 OFF over $20' }
};

// ==========================================
// 2. APPLICATION STATE
// ==========================================
const AppState = {
  cart: [],
  activeCategory: 'all',
  activeDiet: 'all',
  searchQuery: '',
  sortBy: 'featured',
  appliedCoupon: null,
  orders: [],
  currentViewingOrder: null,
  activeStepInterval: null
};

// SVG Placeholder Fallback in case of network restrictions
const FALLBACK_IMAGE_DATA_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ccircle cx='200' cy='130' r='50' fill='%23ff5428' opacity='0.2'/%3E%3Cpath d='M180 120 L200 95 L220 120 Z' fill='%23ff5428'/%3E%3Ctext x='200' y='210' font-family='sans-serif' font-size='16' font-weight='bold' fill='%2364748b' text-anchor='middle'%3EQuickBite Kitchen Fresh%3C/text%3E%3C/svg%3E";

// ==========================================
// 3. STORAGE HELPERS
// ==========================================
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('quickbite_cart');
    if (saved) {
      AppState.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load cart from storage', e);
    AppState.cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('quickbite_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.error('Failed to save cart to storage', e);
  }
}

function loadOrdersFromStorage() {
  try {
    const saved = localStorage.getItem('quickbite_orders');
    if (saved) {
      AppState.orders = JSON.parse(saved);
    }
  } catch (e) {
    AppState.orders = [];
  }
}

function saveOrdersToStorage() {
  try {
    localStorage.setItem('quickbite_orders', JSON.stringify(AppState.orders));
  } catch (e) {
    console.error('Failed to save orders to storage', e);
  }
}

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================

/**
 * Filter and sort food items based on current active state
 */
function getFilteredItems() {
  return FOOD_ITEMS.filter(item => {
    // Category match
    const matchesCategory = AppState.activeCategory === 'all' || item.category === AppState.activeCategory;
    
    // Diet match
    let matchesDiet = true;
    if (AppState.activeDiet === 'veg') matchesDiet = item.isVeg === true;
    if (AppState.activeDiet === 'nonveg') matchesDiet = item.isVeg === false;

    // Search query match (name, description, or ingredients)
    let matchesSearch = true;
    if (AppState.searchQuery.trim() !== '') {
      const q = AppState.searchQuery.toLowerCase().trim();
      const nameMatch = item.name.toLowerCase().includes(q);
      const descMatch = item.description.toLowerCase().includes(q);
      const catMatch = item.category.toLowerCase().includes(q);
      const ingMatch = item.ingredients.some(ing => ing.toLowerCase().includes(q));
      matchesSearch = nameMatch || descMatch || catMatch || ingMatch;
    }

    return matchesCategory && matchesDiet && matchesSearch;
  }).sort((a, b) => {
    if (AppState.sortBy === 'price-asc') return a.price - b.price;
    if (AppState.sortBy === 'price-desc') return b.price - a.price;
    if (AppState.sortBy === 'rating') return b.rating - a.rating;
    return 0; // 'featured' maintains default curated order
  });
}

/**
 * Render the Food Items Grid
 */
function renderMenu() {
  const grid = document.getElementById('foodGrid');
  if (!grid) return;

  const items = getFilteredItems();

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-results-box">
        <div class="empty-results-icon">🍽️</div>
        <h3>No matching meals found</h3>
        <p>We couldn't find anything matching "${escapeHtml(AppState.searchQuery)}". Try searching for pizza, biryani, or burger, or reset filters.</p>
        <button class="btn btn-primary btn-sm" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => {
    const cartItem = AppState.cart.find(c => c.id === item.id);
    const inCartQty = cartItem ? cartItem.quantity : 0;

    return `
      <article class="food-card" data-id="${item.id}">
        <div class="food-card-media" onclick="openQuickView('${item.id}')">
          <img 
            src="${item.image}" 
            alt="${escapeHtml(item.name)}" 
            class="food-card-img" 
            loading="lazy"
            referrerpolicy="no-referrer"
            onerror="this.onerror=null; this.src='${FALLBACK_IMAGE_DATA_URI}'"
          />
          <div class="food-card-badges">
            <span class="diet-indicator ${item.isVeg ? 'veg' : 'nonveg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
            <span class="time-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${item.prepTime}
            </span>
          </div>
        </div>

        <div class="food-card-body">
          <div class="food-card-meta">
            <span class="food-category-tag">${item.category}</span>
            <span class="food-rating">
              <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${item.rating} <span style="color: var(--gray-400); font-weight: 500;">(${item.reviews})</span>
            </span>
          </div>

          <h3 class="food-card-title" onclick="openQuickView('${item.id}')">${escapeHtml(item.name)}</h3>
          <p class="food-card-desc">${escapeHtml(item.description)}</p>

          <div class="food-card-footer">
            <div class="food-card-price tabular-nums">$${item.price.toFixed(2)}</div>
            <div class="card-action-wrap">
              ${inCartQty > 0 ? `
                <div class="qty-stepper">
                  <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                  <span class="qty-display tabular-nums">${inCartQty}</span>
                  <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
                </div>
              ` : `
                <button class="btn btn-primary btn-sm" onclick="addToCart('${item.id}')">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  Add
                </button>
              `}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Update active category UI and trigger re-render
 */
function setCategory(categoryName) {
  AppState.activeCategory = categoryName;

  // Update category cards strip
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.toggle('active', card.getAttribute('data-category') === categoryName);
  });

  // Update category filter pills
  document.querySelectorAll('.category-pills .filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-category') === categoryName);
  });

  renderMenu();
}

/**
 * Update active diet filter (all, veg, nonveg)
 */
function setDietFilter(diet) {
  AppState.activeDiet = diet;
  document.querySelectorAll('.diet-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-diet') === diet);
  });
  renderMenu();
}

/**
 * Reset all active filters to default
 */
function resetAllFilters() {
  AppState.activeCategory = 'all';
  AppState.activeDiet = 'all';
  AppState.searchQuery = '';
  AppState.sortBy = 'featured';

  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('menuSortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.classList.remove('visible');

  // Sync category cards and diet pills
  document.querySelectorAll('.category-card').forEach(c => c.classList.toggle('active', c.getAttribute('data-category') === 'all'));
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
  document.querySelectorAll('.diet-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-diet') === 'all'));

  renderMenu();
  showToast('Filters reset to default');
}

// ==========================================
// 5. CART CALCULATIONS & RENDERING
// ==========================================

function getCartCalculations() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Delivery Fee policy:
  // Base delivery fee = $3.49
  // Free delivery threshold = $30.00
  const freeDeliveryThreshold = 30.00;
  let deliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0.00 : 3.49;

  // Packaging & Service Fee
  const packagingFee = subtotal > 0 ? 1.50 : 0.00;

  // Coupon discount calculation
  let discount = 0.00;
  if (AppState.appliedCoupon && subtotal > 0) {
    const coupon = AppState.appliedCoupon;
    if (subtotal >= coupon.minOrder) {
      if (coupon.type === 'percent') {
        discount = (subtotal * coupon.value) / 100;
      } else if (coupon.type === 'fixed') {
        discount = Math.min(coupon.value, subtotal);
      } else if (coupon.type === 'delivery') {
        discount = deliveryFee;
        deliveryFee = 0.00;
      }
    } else {
      // Invalidate if subtotal dropped below min requirement
      AppState.appliedCoupon = null;
    }
  }

  const grandTotal = Math.max(0, subtotal + deliveryFee + packagingFee - discount);
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  return {
    itemCount,
    subtotal,
    deliveryFee,
    packagingFee,
    discount,
    grandTotal,
    amountNeededForFreeDelivery,
    freeDeliveryProgress,
    isFreeDelivery: deliveryFee === 0 && subtotal > 0
  };
}

/**
 * Render Cart Drawer and updates Top Navbar Cart Counter
 */
function renderCart() {
  const calc = getCartCalculations();

  // 1. Update Navbar Cart Count and Total
  const navBadge = document.getElementById('navCartBadge');
  const navTotal = document.getElementById('navCartTotal');
  if (navBadge) navBadge.textContent = calc.itemCount;
  if (navTotal) navTotal.textContent = `$${calc.grandTotal.toFixed(2)}`;

  // 2. Update Free Delivery Bar
  const freeDelBar = document.getElementById('freeDeliveryProgress');
  const freeDelText = document.getElementById('freeDeliveryText');
  if (freeDelBar) freeDelBar.style.width = `${calc.freeDeliveryProgress}%`;
  if (freeDelText) {
    if (calc.subtotal === 0) {
      freeDelText.innerHTML = `<span>Free delivery on orders over $30.00</span>`;
    } else if (calc.isFreeDelivery) {
      freeDelText.innerHTML = `<span style="color: var(--success); font-weight:700;">🎉 You unlocked FREE Delivery!</span>`;
    } else {
      freeDelText.innerHTML = `<span>Add <strong>$${calc.amountNeededForFreeDelivery.toFixed(2)}</strong> more for <strong>FREE Delivery</strong></span>`;
    }
  }

  // 3. Render Cart Items List
  const itemsContainer = document.getElementById('cartItemsContainer');
  const emptyView = document.getElementById('cartEmptyView');
  const cartFooter = document.getElementById('cartFooter');

  if (AppState.cart.length === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    if (itemsContainer) itemsContainer.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    if (emptyView) emptyView.style.display = 'none';
    if (itemsContainer) {
      itemsContainer.style.display = 'flex';
      itemsContainer.innerHTML = AppState.cart.map(item => `
        <div class="cart-item">
          <img 
            src="${item.image}" 
            alt="${escapeHtml(item.name)}" 
            class="cart-item-thumb" 
            onerror="this.onerror=null; this.src='${FALLBACK_IMAGE_DATA_URI}'"
          />
          <div class="cart-item-details">
            <h4 class="cart-item-name">${escapeHtml(item.name)}</h4>
            <span class="cart-item-price tabular-nums">$${item.price.toFixed(2)} each</span>
            <div class="qty-stepper" style="margin-top: 0.35rem; align-self: flex-start;">
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-display tabular-nums">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="cart-item-actions">
            <span class="cart-item-total tabular-nums">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              Remove
            </button>
          </div>
        </div>
      `).join('');
    }

    if (cartFooter) {
      cartFooter.style.display = 'block';

      // Update coupon UI tag
      const couponTag = document.getElementById('couponAppliedTag');
      const couponInputWrap = document.getElementById('couponInputWrap');
      if (AppState.appliedCoupon) {
        if (couponTag) {
          couponTag.style.display = 'flex';
          couponTag.innerHTML = `
            <span>🎉 Coupon <strong>${AppState.appliedCoupon.code}</strong> applied (-$${calc.discount.toFixed(2)})</span>
            <span class="coupon-remove-btn" onclick="removeCoupon()">✕</span>
          `;
        }
        if (couponInputWrap) couponInputWrap.style.display = 'none';
      } else {
        if (couponTag) couponTag.style.display = 'none';
        if (couponInputWrap) couponInputWrap.style.display = 'flex';
      }

      // Cost summary breakdown
      document.getElementById('cartSubtotal').textContent = `$${calc.subtotal.toFixed(2)}`;
      document.getElementById('cartDeliveryFee').textContent = calc.deliveryFee === 0 ? 'FREE' : `$${calc.deliveryFee.toFixed(2)}`;
      document.getElementById('cartPackagingFee').textContent = `$${calc.packagingFee.toFixed(2)}`;
      
      const discountRow = document.getElementById('cartDiscountRow');
      if (discountRow) {
        if (calc.discount > 0) {
          discountRow.style.display = 'flex';
          document.getElementById('cartDiscountAmount').textContent = `-$${calc.discount.toFixed(2)}`;
        } else {
          discountRow.style.display = 'none';
        }
      }

      document.getElementById('cartGrandTotal').textContent = `$${calc.grandTotal.toFixed(2)}`;
    }
  }

  // Also sync the food grid cards quantity steppers if visible
  renderMenu();
}

// ==========================================
// 6. CART ACTIONS (Add, Qty, Remove, Clear)
// ==========================================

function addToCart(id) {
  const item = FOOD_ITEMS.find(f => f.id === id);
  if (!item) return;

  const existing = AppState.cart.find(c => c.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    AppState.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      quantity: 1
    });
  }

  saveCartToStorage();
  renderCart();

  // Micro-interaction bounce on cart button
  const cartBtn = document.getElementById('navCartBtn');
  if (cartBtn) {
    cartBtn.classList.remove('bounce');
    void cartBtn.offsetWidth; // Force DOM reflow
    cartBtn.classList.add('bounce');
  }

  showToast(`Added "${item.name}" to cart 🛒`);
}

function updateCartQuantity(id, delta) {
  const itemIndex = AppState.cart.findIndex(c => c.id === id);
  if (itemIndex === -1) return;

  const currentItem = AppState.cart[itemIndex];
  const newQty = currentItem.quantity + delta;

  if (newQty <= 0) {
    AppState.cart.splice(itemIndex, 1);
    showToast(`Removed "${currentItem.name}" from cart`);
  } else {
    currentItem.quantity = newQty;
  }

  saveCartToStorage();
  renderCart();
}

function removeFromCart(id) {
  const item = AppState.cart.find(c => c.id === id);
  if (item) {
    AppState.cart = AppState.cart.filter(c => c.id !== id);
    saveCartToStorage();
    renderCart();
    showToast(`Removed "${item.name}" from cart`);
  }
}

function clearCart() {
  if (AppState.cart.length === 0) return;
  AppState.cart = [];
  AppState.appliedCoupon = null;
  saveCartToStorage();
  renderCart();
  showToast('Cart cleared');
}

// ==========================================
// 7. COUPON APPLICATION
// ==========================================

function applyCoupon(code) {
  const cleanCode = (code || '').toUpperCase().trim();
  const coupon = PROMO_CODES[cleanCode];

  if (!coupon) {
    showToast('Invalid coupon code. Try QUICK20 or FREESHIP!', 'danger');
    return;
  }

  const calc = getCartCalculations();
  if (calc.subtotal < coupon.minOrder) {
    showToast(`Coupon requires a minimum order of $${coupon.minOrder.toFixed(2)}`, 'danger');
    return;
  }

  AppState.appliedCoupon = coupon;
  renderCart();
  showToast(`Success! Coupon "${cleanCode}" applied 🎉`, 'success');
}

function removeCoupon() {
  AppState.appliedCoupon = null;
  renderCart();
  showToast('Coupon removed');
}

// ==========================================
// 8. DRAWER & MODAL MANAGEMENT
// ==========================================

function openCart() {
  document.getElementById('cartOverlay')?.classList.add('open');
  document.getElementById('cartDrawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

function openCheckout() {
  if (AppState.cart.length === 0) {
    showToast('Your cart is empty. Please add some dishes first!', 'danger');
    return;
  }
  closeCart();

  const calc = getCartCalculations();
  const summaryEl = document.getElementById('checkoutSummaryTotal');
  if (summaryEl) summaryEl.textContent = `$${calc.grandTotal.toFixed(2)}`;

  document.getElementById('checkoutModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function openQuickView(id) {
  const item = FOOD_ITEMS.find(f => f.id === id);
  if (!item) return;

  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('quickViewContent');
  if (!modal || !body) return;

  const inCart = AppState.cart.find(c => c.id === item.id);
  const currentQty = inCart ? inCart.quantity : 1;

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 2rem; align-items: start;">
      <div style="border-radius: var(--radius-lg); overflow: hidden; background: var(--gray-100);">
        <img 
          src="${item.image}" 
          alt="${escapeHtml(item.name)}" 
          style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3.5;" 
          onerror="this.onerror=null; this.src='${FALLBACK_IMAGE_DATA_URI}'"
        />
      </div>
      <div>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
          <span class="diet-indicator ${item.isVeg ? 'veg' : 'nonveg'}"></span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">${item.category}</span>
          <span style="color: var(--gray-400);">·</span>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--gray-500);">${item.prepTime}</span>
        </div>

        <h2 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--gray-900); margin-bottom: 0.5rem;">${escapeHtml(item.name)}</h2>
        <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 1rem; color: #f59e0b; font-weight: 700;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>${item.rating}</span>
          <span style="color: var(--gray-400); font-weight: 500;">(${item.reviews} verified reviews)</span>
          <span style="color: var(--gray-300); margin: 0 0.25rem;">·</span>
          <span style="color: var(--gray-500); font-size: 0.85rem;">🔥 ${item.calories}</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--gray-600); line-height: 1.6; margin-bottom: 1.25rem;">${escapeHtml(item.description)}</p>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--gray-700); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Fresh Ingredients:</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${item.ingredients.map(ing => `<span style="background: var(--gray-100); padding: 0.25rem 0.65rem; border-radius: var(--radius-full); font-size: 0.8rem; color: var(--gray-700);">${escapeHtml(ing)}</span>`).join('')}
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.25rem; border-top: 1px solid var(--gray-200);">
          <div class="food-card-price tabular-nums" style="font-size: 1.5rem;">$${item.price.toFixed(2)}</div>
          <button class="btn btn-primary" onclick="addToCart('${item.id}'); closeQuickView();">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 9. CHECKOUT & ORDER SUBMISSION
// ==========================================

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const emailInput = document.getElementById('custEmail');
  const addressInput = document.getElementById('custAddress');
  const cityInput = document.getElementById('custCity');
  const zipInput = document.getElementById('custZip');
  const notesInput = document.getElementById('custNotes');

  // Validate form fields
  let isValid = true;

  function validateField(input, condition) {
    if (!condition) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  }

  validateField(nameInput, nameInput.value.trim().length >= 3);
  validateField(phoneInput, /^[0-9+\s-]{7,15}$/.test(phoneInput.value.trim()));
  validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()));
  validateField(addressInput, addressInput.value.trim().length >= 5);
  validateField(cityInput, cityInput.value.trim().length >= 2);
  validateField(zipInput, zipInput.value.trim().length >= 3);

  if (!isValid) {
    showToast('Please fix the highlighted fields in the form', 'danger');
    return;
  }

  // Display processing state
  const submitBtn = document.getElementById('placeOrderBtn');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
    Confirming Order...
  `;

  const calc = getCartCalculations();
  const orderNumber = `QB-${Math.floor(100000 + Math.random() * 900000)}`;

  // Simulated order creation delay (700ms)
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    const newOrder = {
      orderId: orderNumber,
      date: new Date().toISOString(),
      customer: {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        address: `${addressInput.value.trim()}, ${cityInput.value.trim()} ${zipInput.value.trim()}`,
        notes: notesInput ? notesInput.value.trim() : ''
      },
      items: JSON.parse(JSON.stringify(AppState.cart)),
      totals: { ...calc },
      statusStep: 1, // 1: Placed, 2: Preparing, 3: On The Way, 4: Delivered
      estimatedTime: '25-35 minutes'
    };

    // Save order
    AppState.orders.unshift(newOrder);
    saveOrdersToStorage();

    // Clear cart
    AppState.cart = [];
    AppState.appliedCoupon = null;
    saveCartToStorage();
    renderCart();

    // Close checkout and show confirmation
    closeCheckout();
    showOrderConfirmation(newOrder);
    triggerConfetti();
    showToast(`Order ${orderNumber} placed successfully! 🎉`, 'success');
  }, 750);
}

// ==========================================
// 10. ORDER CONFIRMATION & LIVE TRACKER
// ==========================================

function showOrderConfirmation(order) {
  AppState.currentViewingOrder = order;

  const modal = document.getElementById('confirmationModal');
  if (!modal) return;

  document.getElementById('confOrderId').textContent = `Order #${order.orderId}`;
  document.getElementById('confCustomerName').textContent = order.customer.name;
  document.getElementById('confAddress').textContent = order.customer.address;
  document.getElementById('confGrandTotal').textContent = `$${order.totals.grandTotal.toFixed(2)}`;

  // Render receipt items
  const receiptItemsEl = document.getElementById('confReceiptItems');
  if (receiptItemsEl) {
    receiptItemsEl.innerHTML = order.items.map(item => `
      <div class="receipt-row">
        <span>${item.quantity}x ${escapeHtml(item.name)}</span>
        <span class="tabular-nums">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }

  updateTrackerDisplay(order.statusStep);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeConfirmation() {
  document.getElementById('confirmationModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function updateTrackerDisplay(currentStep) {
  const steps = [
    { num: 1, label: 'Order Placed' },
    { num: 2, label: 'Kitchen Preparing' },
    { num: 3, label: 'Out for Delivery' },
    { num: 4, label: 'Delivered' }
  ];

  const container = document.getElementById('orderStatusStepper');
  if (!container) return;

  container.innerHTML = steps.map(step => {
    let stateClass = '';
    let iconContent = step.num;

    if (step.num < currentStep) {
      stateClass = 'completed';
      iconContent = '✓';
    } else if (step.num === currentStep) {
      stateClass = 'active';
      iconContent = step.num;
    }

    return `
      <div class="step-node ${stateClass}">
        <div class="step-circle">${iconContent}</div>
        <div class="step-label">${step.label}</div>
      </div>
    `;
  }).join('');

  const statusMsgEl = document.getElementById('trackerStatusMessage');
  if (statusMsgEl) {
    if (currentStep === 1) statusMsgEl.textContent = 'Kitchen received your order. Ingredients being prepped!';
    else if (currentStep === 2) statusMsgEl.textContent = 'Chef is cooking your hot & fresh meal in the kitchen 👨‍🍳';
    else if (currentStep === 3) statusMsgEl.textContent = 'Delivery hero is on the way to your address 🛵';
    else if (currentStep === 4) statusMsgEl.textContent = 'Order has been delivered! Enjoy your meal 😋';
  }
}

/**
 * Interactive simulation to advance order progress
 */
function advanceOrderStep() {
  if (!AppState.currentViewingOrder) return;

  let step = AppState.currentViewingOrder.statusStep;
  if (step < 4) {
    step += 1;
    AppState.currentViewingOrder.statusStep = step;

    // Update in stored array
    const found = AppState.orders.find(o => o.orderId === AppState.currentViewingOrder.orderId);
    if (found) found.statusStep = step;
    saveOrdersToStorage();

    updateTrackerDisplay(step);

    const msgs = [
      '',
      'Order Placed',
      'Food is now sizzling in the kitchen!',
      'Delivery partner picked up your order and is en route!',
      'Order marked as Delivered! Thank you for choosing QuickBite!'
    ];
    showToast(msgs[step], 'success');
  } else {
    showToast('This order is already completed and delivered!', 'success');
  }
}

// ==========================================
// 11. ORDER HISTORY MODAL
// ==========================================

function openOrderHistory() {
  const modal = document.getElementById('historyModal');
  const container = document.getElementById('historyListContainer');
  if (!modal || !container) return;

  if (AppState.orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--gray-500);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">📦</div>
        <h4 style="font-family: var(--font-display); font-size: 1.15rem; color: var(--gray-800); margin-bottom: 0.35rem;">No previous orders yet</h4>
        <p style="font-size: 0.9rem;">Once you place a demo order, it will appear here so you can re-order or track it.</p>
      </div>
    `;
  } else {
    container.innerHTML = AppState.orders.map(order => `
      <div style="border: 1px solid var(--gray-200); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1rem; background: var(--gray-50);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <div>
            <span style="font-family: var(--font-mono); font-weight: 700; color: var(--gray-900);">#${order.orderId}</span>
            <span style="font-size: 0.8rem; color: var(--gray-500); margin-left: 0.5rem;">${new Date(order.date).toLocaleDateString()}</span>
          </div>
          <span style="font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-full); background: ${order.statusStep === 4 ? 'var(--success-light)' : 'var(--primary-light)'}; color: ${order.statusStep === 4 ? 'var(--success)' : 'var(--primary)'};">
            ${order.statusStep === 4 ? 'Delivered' : `Step ${order.statusStep}/4 Active`}
          </span>
        </div>

        <div style="font-size: 0.88rem; color: var(--gray-600); margin-bottom: 0.75rem;">
          ${order.items.map(i => `${i.quantity}x ${escapeHtml(i.name)}`).join(', ')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--gray-200);">
          <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; color: var(--gray-900);">
            Total: $${order.totals.grandTotal.toFixed(2)}
          </span>
          <button class="btn btn-secondary btn-sm" onclick="reOrder('${order.orderId}')">
            Re-Order
          </button>
        </div>
      </div>
    `).join('');
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderHistory() {
  document.getElementById('historyModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function reOrder(orderId) {
  const order = AppState.orders.find(o => o.orderId === orderId);
  if (!order) return;

  order.items.forEach(orderItem => {
    const existing = AppState.cart.find(c => c.id === orderItem.id);
    if (existing) {
      existing.quantity += orderItem.quantity;
    } else {
      AppState.cart.push({ ...orderItem });
    }
  });

  saveCartToStorage();
  renderCart();
  closeOrderHistory();
  openCart();
  showToast('Items added to your cart!');
}

// ==========================================
// 12. TOAST NOTIFICATIONS & CONFETTI
// ==========================================

function showToast(message, type = 'normal') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const count = 90;
  const colors = ['#ff5428', '#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'];

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: canvas.width * 0.5 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -12 - 4,
      gravity: 0.35,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }

  let animationFrame;
  let startTime = Date.now();

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - startTime;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (elapsed < 3000) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}

// Utility: Prevent XSS
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>"']/g, match => {
    const escapes = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return escapes[match];
  });
}

// ==========================================
// 13. DOM EVENTS & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Load data
  loadCartFromStorage();
  loadOrdersFromStorage();

  // 2. Initial renders
  renderMenu();
  renderCart();

  // 3. Search input events
  const searchInput = document.getElementById('menuSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle('visible', e.target.value.length > 0);
      }
      renderMenu();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      AppState.searchQuery = '';
      searchClearBtn.classList.remove('visible');
      renderMenu();
    });
  }

  // 4. Sort select event
  const sortSelect = document.getElementById('menuSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderMenu();
    });
  }

  // 5. Scroll header elevation
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  // 6. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 7. Cart coupon input
  const couponSubmitBtn = document.getElementById('applyCouponBtn');
  const couponInputField = document.getElementById('couponInputField');
  if (couponSubmitBtn && couponInputField) {
    couponSubmitBtn.addEventListener('click', () => {
      applyCoupon(couponInputField.value);
    });
    couponInputField.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') applyCoupon(couponInputField.value);
    });
  }

  // 8. Checkout Form
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // 9. Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent. We will get back to you shortly.', 'success');
      contactForm.reset();
    });
  }

  // 10. Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our secret daily deals 🔥', 'success');
      newsletterForm.reset();
    });
  }

  // 11. FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      const wasActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!wasActive) {
        parent.classList.add('active');
      }
    });
  });
});

// Expose globals for inline HTML event handlers
window.setCategory = setCategory;
window.setDietFilter = setDietFilter;
window.resetAllFilters = resetAllFilters;
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.applyCoupon = applyCoupon;
window.removeCoupon = removeCoupon;
window.openCart = openCart;
window.closeCart = closeCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.openOrderHistory = openOrderHistory;
window.closeOrderHistory = closeOrderHistory;
window.advanceOrderStep = advanceOrderStep;
window.closeConfirmation = closeConfirmation;
window.reOrder = reOrder;
