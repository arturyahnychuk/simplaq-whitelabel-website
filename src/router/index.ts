import { createRouter, createWebHistory } from 'vue-router'
/* Home */
import Home from '@/views/HomeView.vue'
/* News */
import News from '@/views/news/News.vue'
import NewsSingle from '@/views/news/NewsSingle.vue'
/* Events */
import Events from '@/views/events/Events.vue'
import EventsSingle from '@/views/events/EventsSingle.vue'
/* Shop */
import Shop from '@/views/shop/Shop.vue'
import ShopSingle from '@/views/shop/ShopSingle.vue'
/* Dine */
import Dine from '@/views/dine/Dine.vue'
import DineSingle from '@/views/dine/DineSingle.vue'
/* Serviices */
import Services from '@/views/services/Services.vue'
import ServicesSingle from '@/views/services/ServicesSingle.vue'
/* Entertaiin */
import Entertain from '@/views/entertain/Entertain.vue'
import EntertainSingle from '@/views/entertain/EntertainSingle.vue'
/* Sales */
import Sales from '@/views/sales/Sales.vue'
import SalesSingle from '@/views/sales/SalesSingle.vue'
/* Directory */
import Directory from '@/views/directory/Directory.vue'
/* Auth */
import Login from '@/views/auth/LoginView.vue'
import Register from '@/views/auth/RegisterView.vue'
/* Auth - Password */
import ForgotPassword from '@/views/auth/password/ForgotPassword.vue'
import SetnewPassword from '@/views/auth/password/SetnewPassword.vue'
/* Legal */
import Privacy from '@/views/legal/Privacy.vue'
/* Lite */
import Lite from '@/views/lite/LiteView.vue'
import LiteSingleReward from '@/views/lite/LiteSingleRewardView.vue'
/* Dashboard */
import Dashboard from '@/views/dashboard/Dashboard.vue'
/* Dashboard - Tabs */
import ProfileTab from '@/views/dashboard/Tabs/profile/Profile.vue'
import FavoritesTab from '@/views/dashboard/Tabs/favorites/Favorites.vue'
import SupportTab from '@/views/dashboard/Tabs/support/Support.vue'
import PointsTab from '@/views/dashboard/Tabs/points/Points.vue'
import MyPointsTab from '@/views/dashboard/Tabs/points/MyPoints.vue'
import GetPointsTab from '@/views/dashboard/Tabs/points/GetPoints.vue'
import AwardsTab from '@/views/dashboard/Tabs/points/Awards.vue'
import MyReceiptsTab from '@/views/dashboard/Tabs/my_receipts/MyReceipts.vue'
import MyRewardsTab from '@/views/dashboard/Tabs/my_rewards/MyRewards.vue'
import PaymentMethodsTab from '@/views/dashboard/Tabs/payment_methods/PaymentMethods.vue'
import PurchasesTab from '@/views/dashboard/Tabs/purchases/Purchases.vue'
/* Rewards */
import RewardsCatalogView from '@/views/rewards/RewardsCatalog.vue'
import RewardsSingle from '@/views/rewards/RewardsSingle.vue'
/* FAQ */
import FAQview from '@/views/faq/FAQ.vue'

/* User Store */
import { useUserStore } from '@/stores/user/user'

import Routes from './routes'
import Dashboard_ENUM from './dashboardEnums'
import { useLoaderStore } from '@/stores/loader'
import LoaderVue from '@/components/loader/Loader.vue'

const routes = [
  {
    path: '/',
    name: Routes.HOME,
    component: Home
  },
  {
    path: '/news',
    name: Routes.NEWS,
    component: News
  },
  {
    path: '/news/:id',
    name: Routes.NEWS_SINGLE,
    component: NewsSingle
  },
  {
    path: '/events',
    name: Routes.EVENTS,
    component: Events
  },
  {
    path: '/events/:id',
    name: Routes.EVENTS_SINGLE,
    component: EventsSingle
  },
  {
    path: '/shop',
    name: Routes.SHOP,
    component: Shop
  },
  {
    path: '/shop/:id',
    name: Routes.SHOP_SINGLE,
    component: ShopSingle
  },
  {
    path: '/dine',
    name: Routes.DINE,
    component: Dine,
  },
  {
    path: '/dine/:id',
    name: Routes.DINE_SINGLE,
    component: DineSingle
  },
  {
    path: '/services',
    name: Routes.SERVICES,
    component: Services,
  },
  {
    path: '/services/:id',
    name: Routes.SERVICES_SINGLE,
    component: ServicesSingle
  },
  {
    path: '/entertain',
    name: Routes.ENTERTAIN,
    component: Entertain,
  },
  {
    path: '/entertain/:id',
    name: Routes.ENTERTAIN_SINGLE,
    component: EntertainSingle
  },
  {
    path: '/sales',
    name: Routes.SALES,
    component: Sales,
  },
  {
    path: '/sales/:id',
    name: Routes.SALES_SINGLE,
    component: SalesSingle,
  },
  {
    path: '/directory',
    name: Routes.DIRECTORY,
    component: Directory,
  },
  {
    path: '/login',
    name: Routes.LOGIN,
    meta: {
      isGuest: true
    },
    component: Login
  },
  {
    path: '/register',
    name: Routes.REGISTER,
    meta: {
      isGuest: true
    },
    component: Register
  },
  {
    path: '/forgot-password',
    name: Routes.FORGOT_PASSWORD,
    meta: {
      isGuest: true
    },
    component: ForgotPassword
  },
  {
    path: '/setnew-password',
    name: Routes.SETNEW_PASSWORD,
    meta: {
      isGuest: true
    },
    component: SetnewPassword
  },
  {
    path: '/privacy',
    name: Routes.PRIVACY,
    // meta: {
    //   requiresAuth: true
    // },
    component: Privacy,
  },
  {
    path: '/lite',
    name: Routes.LITE,
    meta: {
      requiresAuth: true
    },
    component: Lite
  },
  {
    path: '/my-reward',
    name: Routes.MY_REWARD,
    meta: {
      requiresAuth: true
    },
    component: LiteSingleReward,
    children: [
      {
        path: '/my-reward/:id',
        name: Routes.MY_REWARDS_SINGLE,
        component: LiteSingleReward
      }
    ]
  },
  {
    path: '/rewards',
    name: Routes.REWARDS,
    component: RewardsCatalogView
  },
  {
    path: '/rewards/:id',
    name: Routes.REWARDS_SINGLE,
    component: RewardsSingle
  },
  {
    path: '/dashboard',
    name: Dashboard_ENUM.PROFILE,
    meta: {
      requiresAuth: true
    },
    redirect: '/dashboard/profile',
    component: Dashboard,
    children: [
      {
        path: 'profile',
        name: Dashboard_ENUM.PROFILE_TAB,
        component: ProfileTab
      },
      {
        path: 'my-favorites',
        name: Dashboard_ENUM.FAVORITES_TAB,
        component: FavoritesTab
      },
      {
        path: 'support',
        name: Dashboard_ENUM.SUPPORT_TAB,
        component: SupportTab
      },
      {
        path: 'points',
        name: Dashboard_ENUM.POINTS_TAB,
        component: PointsTab,
        redirect: '/points/my-points',
        children: [
          {
            path: 'my-points',
            name: Dashboard_ENUM.MY_POINTS_TAB,
            component: MyPointsTab
          },
          {
            path: 'get-points',
            name: Dashboard_ENUM.GET_POINTS_TAB,
            component: GetPointsTab
          },
          {
            path: 'get-points/awards',
            name: Dashboard_ENUM.AWARDS_TAB,
            component: AwardsTab
          }
        ]
      },
      {
        path: 'my-receipts',
        name: Dashboard_ENUM.MY_RECEIPTS_TAB,
        component: MyReceiptsTab
      },
      {
        path: 'my-rewards',
        name: Dashboard_ENUM.MY_REWARDS_TAB,
        component: MyRewardsTab
      },
      {
        path: 'payment-methods',
        name: Dashboard_ENUM.PAYMENT_METHODS_TAB,
        component: PaymentMethodsTab
      },
      {
        path: 'purchases',
        name: Dashboard_ENUM.PURCHASES_TAB,
        component: PurchasesTab
      }
    ]
  },
  {
    path: '/faq',
    name: Routes.FAQ,
    component: FAQview
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  const loader = useLoaderStore()
  loader.setLoading(true)
  if (to.meta.requiresAuth && !user.token) {
    next({ name: Routes.LOGIN })
  } else if (to.meta.isGuest && user.token) {
    next({ name: Routes.HOME })
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {
  const loader = useLoaderStore()
  window.scrollTo(0, 0)
  loader.setLoading(false)
})

export default router
