# 🎁 AARAA Gift Shop — Backend API

E-commerce backend for AARAA Gift Shop built with **Node.js**, **Express**, and **MongoDB**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
#    Edit .env with your MongoDB URI and JWT secret

# 3. Seed sample data (28 products, 8 categories, 1 admin user)
npm run seed

# 4. Start development server
npm run dev
```

Server runs at `http://localhost:5000`

## Admin Credentials (after seeding)

| Email | Password |
|-------|----------|
| admin@aaragiftshop.com | admin123456 |

## API Endpoints

### Products
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/products` | List all (filter/sort/search/paginate) | — |
| GET | `/api/products/featured` | Featured products | — |
| GET | `/api/products/bestsellers` | Best sellers | — |
| GET | `/api/products/category/:id` | By category | — |
| GET | `/api/products/:id` | Single product | — |
| POST | `/api/products` | Create | Admin |
| PUT | `/api/products/:id` | Update | Admin |
| DELETE | `/api/products/:id` | Delete | Admin |

### Categories
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/categories` | Hierarchical list | — |
| GET | `/api/categories/all` | Flat list | — |
| GET | `/api/categories/:slug` | By slug | — |
| POST | `/api/categories` | Create | Admin |
| PUT/DELETE | `/api/categories/:id` | Update/Delete | Admin |

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Login (returns JWT) |
| GET | `/api/auth/profile` | Get profile (auth) |
| PUT | `/api/auth/profile` | Update profile (auth) |
| POST | `/api/auth/address` | Add address (auth) |
| DELETE | `/api/auth/address/:id` | Remove address (auth) |

### Cart, Wishlist, Orders, Reviews
All require authentication (`Bearer <token>` header).

| Resource | Endpoints |
|----------|-----------|
| Cart | `GET/POST/PUT/DELETE /api/cart` |
| Wishlist | `GET/POST/DELETE /api/wishlist` |
| Orders | `GET/POST /api/orders`, `PUT /api/orders/:id/pay`, `PUT /api/orders/:id/cancel` |
| Reviews | `GET /api/reviews/product/:id`, `POST/PUT/DELETE /api/reviews` |

### Other
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/newsletter` | Subscribe |
| POST | `/api/contact` | Contact form |
| GET | `/api/stores` | Store locations |

### Admin
All require admin token.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/dashboard` | Stats & revenue |
| GET | `/api/admin/orders` | All orders |
| PUT | `/api/admin/orders/:id` | Update order status |
| GET | `/api/admin/users` | All users |
| PUT | `/api/admin/users/:id` | Toggle user status |

## Query Parameters

```
GET /api/products?search=brass&minPrice=100&maxPrice=1000&sort=-price&page=1&limit=12&tags=Best Seller&category=ID
```

## Tech Stack

Express 4 · MongoDB + Mongoose · JWT Auth · bcrypt · Helmet · Rate Limiting · Morgan
