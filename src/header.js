import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Headlines from './headlines';
import Categories from './categories';
import Button from '@material-ui/core/Button';

class Header extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="head">
                    <div className="headerobjectswrapper">
                        
                        <header>News Paper</header>
                        
                    </div>
                    {/* <div class="subhead">Headlines</div> */}
                </div>

                <div className="cat_list">
                <Router>
                    <div className="router_wrap">
                    <ul className="navList">
                        <Button variant="" color="secondary"> <li><Link to="/">Home</Link></li></Button>
                        <Button variant="" color="secondary"><li><Link to="/categories/bitcoin">Bitcoin</Link></li></Button>
                        <Button variant="" color="secondary"><li><Link to="/categories/apple">Apple</Link></li></Button>
                        <Button variant="" color="secondary"><li><Link to="/categories/WSJ">WSJ</Link></li></Button>
                        <Button variant="" color="secondary"><li><Link to="/categories/NY Times">NY Times</Link></li></Button>

                    </ul>
                    <Route exact path="/" component={Headlines} />
                    <Route path="/categories/:name" component={Categories} />
                    </div>
                </Router>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;