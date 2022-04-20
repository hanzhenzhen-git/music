import HZZDiscover from '@/pages/discover';
import HZZMine from '@/pages/mine';
import HZZFriends from '@/pages/friends';

const routes = [
    {
        path: "/",
        exact: true,
        component: HZZDiscover,
    },
    {
        path: "/mine",
        exact: true,
        component: HZZMine,
    },
    {
        path: "/friends",
        exact: true,
        component: HZZFriends,
    }
]

export default routes;