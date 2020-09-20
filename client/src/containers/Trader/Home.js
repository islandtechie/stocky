import React, {Fragment} from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';
import Stocks from '../../components/Stocks/Stocks';
import Search from './Search';


const Home = ( props ) => {
   

    return (
        <Fragment>
            <UserInfo />
            <Search />
            <Stocks />
        </Fragment>
    )
}

export default Home;
