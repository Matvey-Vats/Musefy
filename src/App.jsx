import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='catalog' element={<Catalog />} />
					<Route path='contact' element={<Contact />} />
					<Route path='about' element={<About />} />
					<Route path='cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
