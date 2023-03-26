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
    layout: '/admin',
    path: 'and',
    icon: <MdHome className='h-6 w-6' />,
    component: <And />
  },
  {
    name: 'Nand',
    layout: '/admin',
    path: 'nand',
    icon: <MdAssignmentInd className='h-6 w-6' />,
    component: <Nand />
  },
  {
    name: 'Nor',
    layout: '/admin',
    path: 'nor',
    icon: <MdAssignmentInd className='h-6 w-6' />,
    component: <Nor />
  },
  {
    name: 'Not',
    layout: '/admin',
    icon: <MdContentPaste className='h-6 w-6' />,
    path: 'not',
    component: <Not />
  },
  {
    name: 'Or',
    layout: '/admin',
    path: 'or',
    icon: <MdPerson className='h-6 w-6' />,
    component: <Or />
  },
  {
    name: 'Xor',
    layout: '/admin',
    path: 'xor',
    icon: <MdPerson className='h-6 w-6' />,
    component: <Xor />
  }
]

export default routes
