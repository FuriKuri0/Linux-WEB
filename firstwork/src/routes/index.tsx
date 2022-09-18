import Home from '../pages/Home'
import Setting from '../pages/Setting'
import { Navigate } from 'react-router-dom'
import User from '../pages/User'
const routes = [
    //主页
    {
        path: '/home',
        element: <Home />,
        // children: [
        //     {
        //         path: 'namel',
        //         element:<Namel/>,
        //     },
        //     {
        //         path: '',
        //         element: <Navigate to='namel' />
        //     }
        // ]
    },
    //设置
    {
        path: '/setting',
        element: <Setting />,
    },
    //用户分路
    {
        path: '/user',
        element: <User />,
    },
    {
        path: '',
        element: <Navigate to='/home' />

        // element: <Navigate to={React.getCookie('user')?React.getCookie('user')==='root'?'/manageproject':'/userproject':'/dlzc'} />
    }
]
export default routes 