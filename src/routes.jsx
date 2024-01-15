import { And } from './pages/Compuertas/And'
import { Nand } from './pages/Compuertas/Nand'
import { Nor } from './pages/Compuertas/Nor'
import { Not } from './pages/Compuertas/Not'
import { Or } from './pages/Compuertas/Or'
import { Xor } from './pages/Compuertas/Xor'

const routes = [
  {
    name: 'And',
    path: '/admin/and',
    component: <And />
  },
  {
    name: 'Nand',
    path: '/admin/nand',
    component: <Nand />
  },
  {
    name: 'Nor',
    path: '/admin/nor',
    component: <Nor />
  },
  {
    name: 'Not',
    path: '/admin/not',
    component: <Not />
  },
  {
    name: 'Or',
    path: '/admin/or',
    component: <Or />
  },
  {
    name: 'Xor',
    path: '/admin/xor',
    component: <Xor />
  }
]

export default routes
