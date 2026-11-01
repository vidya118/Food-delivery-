# QuickBite – Online Food Delivery Website

A complete, modern, professional food delivery web application built entirely using **pure HTML5, CSS3, and Vanilla JavaScript**. Designed with zero third-party framework dependencies, zero build-step requirements, and persistent state stored in `localStorage`.

---

## 📁 Complete Folder Structure

```text
quickbite-food-delivery/
│
├── index.html        # Complete semantic HTML5 structure and accessible layout
├── style.css         # Modern, responsive CSS3 styling, custom properties & animations
├── script.js         # Vanilla JavaScript logic: menu catalog, cart, filters, checkout & tracker
├── README.md         # Documentation, local run instructions & GitHub guide
└── metadata.json     # Project descriptor and application metadata
```

---

## 🚀 Key Features

1. **Modern Food Delivery UI**:
   - Clean white background with warm orange/red accents (`#ff5428`, `#ea4219`).
   - Distinctive typography using Google Fonts (`Plus Jakarta Sans` and `Inter`).
   - Smooth hover micro-interactions, responsive card grids, and layered box shadows.

2. **Navigation Bar**:
   - Sticky header with backdrop blur on scroll.
   - Quick links: Home, Categories, Menu, Deals, About, Reviews, Contact.
   - Dynamic Cart toggle button displaying real-time item count badge with animated bounce feedback.
   - Fully responsive mobile drawer navigation.

3. **Hero Section**:
   - Compelling headline and express delivery highlights.
   - Trust indicators: 30-min average delivery, 4.9★ rating (15,000+ reviews), 100% hygienic packaging.
   - High-fidelity culinary photography showcase with floating delivery time & rating badges.

4. **Popular Categories & Promo Deals**:
   - Visual category tiles: Pizza, Burgers, Biryani, Desserts, Drinks, and Wraps & Pasta.
   - Working promo code cards (`QUICK20`, `FREESHIP`, `FIRSTBITE`) with 1-click "Apply" buttons.

5. **Dynamic Food Menu & Search**:
   - 24 realistic dishes across 6 categories with preparation time, calories, and prices.
   - Instant live search by dish name, category, or ingredients.
   - Dietary filter tabs: Pure Vegetarian (🌱) and Non-Vegetarian (🍖).
   - Sorting by Featured, Price (Low to High), Price (High to Low), and Highest Rating.
   - Empty search results state with a 1-click "Reset All Filters" button.

6. **Quick Dish Details Modal**:
   - Pop-up modal displaying high-res photos, preparation time, calorie counts, customer reviews, and complete ingredient tags.

7. **Shopping Cart with LocalStorage Persistence**:
   - Slide-over cart drawer opening smoothly from the right with backdrop overlay.
   - Itemized list with thumbnail, unit price, quantity stepper (`- 1 +`), item subtotal, and trash removal.
   - Animated progress bar indicating progress toward Free Delivery ($30 threshold).
   - Promo coupon input with instant validation and discount deduction.
   - Automatic calculation of subtotal, delivery fee, packaging fee, discount, and grand total.
   - Full persistence in `localStorage`: your cart is preserved across page refreshes.

8. **Checkout Form with Validation**:
   - Complete customer delivery form: Full Name, Phone Number, Email, Delivery Street Address, City, ZIP Code, and Optional Delivery Notes.
   - Real-time field validation with visual error indicators and clear error messages.
   - Cash on Delivery (COD Demo Mode) selection.
   - Submitting triggers a realistic loading state before order creation.

9. **Order Confirmation & Live Order Tracker**:
   - Celebratory canvas confetti particle burst.
   - Generated unique Order ID (e.g., `#QB-849201`).
   - Itemized summary receipt with delivery destination.
   - 4-step live tracker:
     1. Order Placed ✓
     2. Kitchen Preparing Meal 👨‍🍳
     3. Out for Delivery 🛵
     4. Delivered! 🎉
   - Interactive **"Simulate Next Step ⚡"** button allowing users to advance the delivery status in real-time.
   - Orders saved to `localStorage` under past order history.

10. **Order History Modal**:
    - Accessible via "My Orders" in the header to review previous orders with a 1-click "Re-Order" feature.

11. **About, Testimonials, Contact & FAQ**:
    - Brand story, core pillars, and statistics counter.
    - Verified customer reviews with star ratings and photos.
    - Interactive contact form with submission alert.
    - Working FAQ accordion with smooth open/collapse animations.

---

## 💻 How to Run Locally

Because this project uses pure HTML5, CSS3, and Vanilla JavaScript, it requires **no Node.js build process, no npm install, and no backend server** to run!

### Method 1: Direct File Opening (Simplest)
1. Download or clone this repository to your local computer.
2. Locate the project folder.
3. Double-click `index.html` to open it in your default web browser (Chrome, Firefox, Safari, Edge, etc.).

### Method 2: Local HTTP Server (Recommended)
If you prefer running through a local web server (to test service workers or absolute URLs):

- **Using VS Code Live Server**:
  1. Open the folder in VS Code.
  2. Right-click `index.html` and click **"Open with Live Server"**.

- **Using Python (pre-installed on macOS/Linux)**:
  ```bash
  cd quickbite-food-delivery
  python3 -m http.server 8000
  ```
  Open `http://localhost:8000` in your browser.

- **Using Node `npx serve`**:
  ```bash
  npx serve .
  ```

---

## 🐙 How to Upload the Project to GitHub

Follow these steps to publish the project to your GitHub account:

### Step 1: Initialize Git in your project folder
Open your terminal (or Command Prompt) in the project directory:
```bash
cd path/to/quickbite-food-delivery
git init
git add .
git commit -m "Initial commit: QuickBite online food delivery website"
```

### Step 2: Create a new repository on GitHub
1. Log in to [GitHub](https://github.com).
2. Click the **"+"** icon in the top right corner and select **"New repository"**.
3. Name your repository (e.g. `quickbite-food-delivery`).
4. Keep it Public or Private as preferred. Do **not** initialize with a README (you already have one).
5. Click **"Create repository"**.

### Step 3: Link and push your code
Copy the commands shown on GitHub and run them in your terminal:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/quickbite-food-delivery.git
git push -u origin main
```

### Step 4 (Optional): Host it for FREE on GitHub Pages
1. Go to your repository settings on GitHub (**Settings** tab).
2. Click on **Pages** in the left sidebar under "Code and automation".
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Within 1–2 minutes, your website will be live at `https://<YOUR-USERNAME>.github.io/quickbite-food-delivery/`!

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA attributes, form controls, and `<canvas>`.
- **CSS3**: CSS Custom Properties (variables), Flexbox, CSS Grid, clamp typography, keyframe animations, glassmorphism backdrop filters, and responsive media queries.
- **Vanilla JavaScript (ES6+)**:
  - Pure DOM manipulation and event delegation.
  - Client-side data store with 24 dishes.
  - Cart state management with `localStorage` persistence.
  - Dynamic live filtering, regex validation, and interactive order simulation.
  - Canvas-based celebratory confetti effect.

---

## 📄 License
This project is open-source and free to use for personal, portfolio, and educational projects.
