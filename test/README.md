# Cherry Cheeks

A responsive cosmetics website for **Cherry Cheeks**, a Seoul-based makeup and skincare brand owned by Mr. Kim MinJuu. The site lets visitors discover the brand, browse products, and place an order. It also has an admin area for the shop owner.

This is a front-end project built by a team of four at **Flash Solution** (1 to 28 October 2026).

## Links

| What | Link |
|---|---|
| Live website | `ADD-LIVE-URL-HERE` |
| GitHub repository | https://github.com/dariyatum/cherry-cheeks-app |
| Figma mock-up | `ADD-FIGMA-LINK-HERE` |
| Trello board | `ADD-TRELLO-LINK-HERE` |

## Team

| Name | Role | Main work |
|---|---|---|
| `Name 1` | Front-end developer | `e.g. Navbar, Footer, Home` |
| `Name 2` | Front-end developer | `e.g. Cart and checkout` |
| `Name 3` | Front-end developer | `e.g. Login and Register` |
| `Name 4` | Front-end developer | `e.g. Admin pages` |

## Tech stack

- **React** with **Vite**
- **React Router** (`react-router-dom`) for pages
- **Tailwind CSS v4** for styling
- **lucide-react** for icons
- **Docker** for running the project the same way on every computer
- **Git and GitHub** for teamwork, **Trello** for tasks, **Figma** for design

## Features

**Visitors**
- Home page with hero, categories, featured products loaded from JSON, and customer reviews
- About page
- Products page and product detail page
- Contact page
- Cart and a checkout flow: billing and shipping, payment, order review, order confirmation
- Login, register, and profile

**Admin**
- Admin sidebar layout
- Overview dashboard with revenue, orders, customers, products, a sales chart, low stock list, and recent orders (calculated from the JSON data)
- Customers page with search, and Add, Edit, and Delete in a modal

## Getting started

### Requirements

- Node.js 20 or newer (check with `node -v`)
- Git
- Docker (optional)

### Run the project

```bash
git clone https://github.com/dariyatum/cherry-cheeks-app.git
cd cherry-cheeks-app
npm install
npm run dev
```

Open the address shown in the terminal, usually http://localhost:5173.

> Run `npm run dev` in **one** terminal only. A second copy moves the site to another port (5174, 5175, and so on).

### Run with Docker

```bash
docker build -t cherry-cheeks-app .
docker run -p 5173:5173 cherry-cheeks-app
```

Or with Docker Compose:

```bash
docker compose up --build
```

On Linux you may need `sudo` before each `docker` command.

### Other commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks the code for problems |

## Project structure

```
cherry-cheeks-app/
├── public/
│   ├── student-data/      JSON data from the course (products, accounts, invoices, ...)
│   └── logo1.png
├── src/
│   ├── assets/images/     photos used by the pages
│   ├── components/        shared parts (Navbar, Footer, Button, ProductCard, Modal, AdminSidebar, ...)
│   ├── context/           login and shared state
│   ├── hooks/             custom hooks
│   ├── pages/
│   │   ├── public/        pages anyone can open
│   │   ├── user/          pages for customers
│   │   └── admin/         pages for the admin
│   ├── App.jsx            all routes
│   ├── main.jsx           app entry
│   └── index.css          Tailwind setup and brand colors
├── Dockerfile
├── compose.yaml
└── package.json
```

## Data

The data comes from JSON files in `public/student-data/` and is loaded in the browser with `fetch` and `async/await`.

| File | Used for |
|---|---|
| `products.json` | Home featured products, admin low stock, product counts |
| `accounts.json` | Admin customers and customer names |
| `invoices.json` | Admin revenue, orders, sales chart, and recent orders |
| `categories.json` | Category names |
| `carts.json`, `stock-receipts.json`, `suppliers.json` | Available for cart and stock features |

**Important:** the browser cannot write to a JSON file. Add, Edit, and Delete in the admin pages only change what is shown on screen. When the page is refreshed, the original data comes back. Saving for real needs a back-end API.

## Design

Brand colors are set in `src/index.css`:

| Name | Color |
|---|---|
| Cherry (main) | `#8b3a55` |
| Blush | `#f9eeed` |
| Sand | `#e8dccf` |
| Cream | `#faf6f1` |

Headings use the serif font **Cormorant Garamond**. The layout is responsive for desktop, tablet, and mobile.

## Login and roles

There are two roles: **user** and **admin**. Admin pages are under `/admin`.

```
Admin demo account:  ADD-EMAIL / ADD-PASSWORD
User demo account:   ADD-EMAIL / ADD-PASSWORD
```

> The login runs in the browser only, so it is a demo and not real security. A real site needs a back-end that checks the login and the role.

## Deployment

The site is deployed to `Vercel / WMAD VPS` (choose one) at `ADD-LIVE-URL-HERE`.

1. Create the production build:

   ```bash
   npm run build
   ```

2. The result is in the `dist/` folder.
3. Upload or serve `dist/` with the web server. For a React Router site, the server must send every address to `index.html`. On nginx this is `try_files $uri /index.html;`.
4. Open the live URL and test the pages, links, and the data files.

Do not upload `.env` files or secrets to GitHub.

## Git workflow

- `main` holds the working version. Do not work directly on it.
- Create a branch for each task, for example `feature/admin-customers`.
- Commit small changes with clear messages, such as `feat: add Footer component`.
- Open a Pull Request and ask a teammate to review it before merging.
- Commit at least once a day.

## Known limits

- Admin Add, Edit, and Delete are not saved after a page refresh.
- Product photos are placeholders because the JSON data has no pictures.
- The Admin Products and Orders pages are still placeholders.
- Login is a front-end demo only.

## Credits

- Client: Mr. Kim MinJuu, Cherry Cheeks
- Built by the Flash Solution front-end team
- Data provided by our trainer
- Photos: list the source of every image here, including any AI-generated images