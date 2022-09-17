import Home from '../pages/Home'
import { Navigate } from 'react-router-dom'

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
    {
        path: '',
        element: <Navigate to='home' />

        // element: <Navigate to={React.getCookie('user')?React.getCookie('user')==='root'?'/manageproject':'/userproject':'/dlzc'} />
    }
]
export default routes 