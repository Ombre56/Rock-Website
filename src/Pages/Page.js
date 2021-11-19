import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Header/Header';
import Articles from '../Articles/Articles';
// import Staff from '../Staff/Staff';
// import Portofolio from '../Portfolio/Portfolio';
// import Contact from '../Contact/Contact';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/articles" component={Articles} />
                {/* <Route path="/staff" component={Staff} />
                <Route path="/portfolio" component={Portofolio} />
                <Route path="/contact" component={Contact} />
                <Route component={ErrorPage} /> */}
            </Switch>
        </>
    );
}

export default Page;