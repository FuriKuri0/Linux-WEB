import Home from '../pages/Home'

import Setting from '../pages/Setting'
import { Navigate } from 'react-router-dom'
import User from '../pages/User'
import TSC from '../pages/TSC'
import Chart from '../pages/Chart'
import Warning from '../pages/Warning'
import Record from '../pages/Record'
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
    //TSC
    {
        path: '/tsc',
        element: <TSC />,
    },
    //Chart
    {
        path: '/chart',
        element: <Chart />,
    },
    //Record
    {
        path: '/record',
        element: <Record />,
    },
    //Waring
    {
        path: '/warning',
        element: <Warning />,
    },
    {
        path: '',
        element: <Navigate to='/home' />

        // element: <Navigate to={React.getCookie('user')?React.getCookie('user')==='root'?'/manageproject':'/userproject':'/dlzc'} />
    }
]
export default routes 