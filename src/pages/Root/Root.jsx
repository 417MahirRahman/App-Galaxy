import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Banner1 from '../../components/Banner/Banner1';
import Banner2 from '../../components/Banner/Banner2';

const Root = () => {
    return (
        <div data-theme="light">
            <NavBar></NavBar>
            <Banner1></Banner1>
            <Banner2></Banner2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;