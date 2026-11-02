import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Products from './page/product.jsx'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/products">Products</Link>{' '}
        <Link to="/categories">Categories</Link>
      </nav>
      <button onClick={() => navigate('/products')}>Go to Products</button>
    </div>
  )
}

function Categories() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Categories</h1>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/products">Products</Link>{' '}
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  )
}
