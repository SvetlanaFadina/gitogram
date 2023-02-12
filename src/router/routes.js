import { auth } from '../pages/auth'
import { feeds } from '../pages/feeds'
import { storyPage } from '../pages/storyPage'
import { profile } from '../pages/profile'

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
},
{
  path: '/profile',
  component: profile,
  name: 'profile'
}

]
