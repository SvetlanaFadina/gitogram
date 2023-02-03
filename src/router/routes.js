import { auth } from '../pages/auth'
import { feeds } from '../pages/feeds'
import { storyPage } from '../pages/storyPage'
import { root } from '../pages/rootPage'

export default [{
  path: '/',
  component: feeds,
  name: 'feeds'
},
{
  path: '/storyPage',
  component: storyPage,
  name: 'stories'
},
{
  path: '/auth',
  component: auth,
  name: 'auth'
},
{
  path: '/root',
  component: root,
  name: 'root'
}
]
