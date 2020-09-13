import React, {Fragment} from 'react';
import './Home.css';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <Fragment>
            <div className="home">
                <div className="home__body">
                    <h1 className="home__title">the ultimate fantasy trading app</h1>
                    <p className="home__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum aliquid, odio commodi excepturi ducimus quas sed reiciendis pariatur repellendus quidem cum, ipsum voluptate aliquam quae voluptatem laudantium mollitia amet. Join the community and put your trading skills to the test</p>
                    <a href="#" className="home__button">Signup Today!</a>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Home;
