import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';

const routeList = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]
export default routeList;