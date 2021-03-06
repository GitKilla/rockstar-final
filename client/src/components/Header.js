import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null: 
                return 'null';
            case false: 
                return <li><a href='/login'>Login</a></li>;
            default: 
                return <li><a href='/api/logout'>Logout</a></li>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys': '/'}
                    className="left brand-logo">&nbsp;Rockstar
                    </Link>

                        <ul id="nav-mobile" className="right">
                            <li><a>{this.renderContent()}</a></li>
                        </ul>

                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);