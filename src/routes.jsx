import { And } from './pages/Compuertas/And'
import { Nand } from './pages/Compuertas/Nand'
import { Nor } from './pages/Compuertas/Nor'
import { Not } from './pages/Compuertas/Not'
import { Or } from './pages/Compuertas/Or'
import { Xor } from './pages/Compuertas/Xor'

// Icon Imports
import {
  MdHome,
  MdAssignmentInd,
  MdContentPaste,
  MdPerson
} from 'react-icons/md'

const routes = [
  {
    name: 'And',
    path: '/admin/and',
    icon: <MdHome className='h-6 w-6' />,
    component: <And />
  },
  {
    name: 'Nand',
    path: '/admin/nand',
    icon: <MdAssignmentInd className='h-6 w-6' />,
    component: <Nand />
  },
  {
    name: 'Nor',
    path: '/admin/nor',
    icon: <MdAssignmentInd className='h-6 w-6' />,
    component: <Nor />
  },
  {
    name: 'Not',
    icon: <MdContentPaste className='h-6 w-6' />,
    path: '/admin/not',
    component: <Not />
  },
  {
    name: 'Or',
    path: '/admin/or',
    icon: <MdPerson className='h-6 w-6' />,
    component: <Or />
  },
  {
    name: 'Xor',
    path: '/admin/xor',
    icon: <MdPerson className='h-6 w-6' />,
    component: <Xor />
  }
]

export default routes
