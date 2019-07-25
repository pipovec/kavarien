import Home from '@/views/Home'
import Products from '@/views/Products'
import Gallery from '@/views/Gallery'
import Contact from '@/views/Contact'
import page404 from '@/views/page404'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/*', component: page404 }
]
