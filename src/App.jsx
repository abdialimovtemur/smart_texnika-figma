import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/main-layout/main-layout'
import { Home } from './pages/home/home'
import datas from "./data/data"
import { Product } from './pages/home/product'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path='product/:id' element={<Product/>} />
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
