import { auth } from '../pages/auth'
import { feeds } from '../pages/feeds'
import { storyPage } from '../pages/storyPage'

export default [{
  path: '/',
  component: feeds,
  name: 'feeds'
},
{
  path: '/storyPage/:initialSlideId',
  component: storyPage,
  name: 'stories'
},
{
  path: '/auth',
  component: auth,
  name: 'auth'
}
]
