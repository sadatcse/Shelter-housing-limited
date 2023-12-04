
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Comon/Footer/Footer';
import Banner from '../Section/Homepage/Banner';
import Header from '../Comon/Header/Header';
import Stat from '../Section/Homepage/Stat';
import Upcoming from '../Section/Homepage/Upcoming';

const Root = () => {

    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default Root;