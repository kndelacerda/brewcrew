import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import DrawerLeft from './drawer';
import { grey50, darkBlack } from 'material-ui/styles/colors';

const style = {
    background: {
        backgroundColor: grey50,
        textColor: darkBlack,
        display: 'flex'
    }
};

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <div>
                <FlatButton label="Sign In" containerElement={<Link to="/signin" />} />

                <Link className="nav-link" to="/signup">
                    <FlatButton label="Sign Up" />
                </Link>
            </div>
        );
    }
}

const Logged = (props) => (
    <div className="nav-item">
        <Link className="nav-link" to="/signout">
            <FlatButton label="Sign Out" />
        </Link>
    </div>    
);

class Header extends Component {
    // renderLinks() {
    //     if (this.props.authenticated) {
    //         // show a link to sign out
    //         return (
    //             <div className="nav-item">
    //                 <Link className="nav-link" to="/signout">
    //                     <FlatButton label="Sign Out" />
    //                 </Link>
    //             </div>);
    //     } else {
    //         // show a link to sign in or sign up
    //         return [
    //             <div>
    //             <div className="nav-item" key={1}>
    //                 <Link className="nav-link" to="/signin">
    //                     <FlatButton label="Sign In" />
    //                 </Link>
    //             </div>,
    //             <div className="nav-item" key={2}>
    //                 <Link className="nav-link" to="/signup">
    //                     <FlatButton label="Sign Up" />
    //                 </Link>
    //             </div>
    //             </div>
    //         ];
    //     }
    // }

    render() {
        return (
            <div style={style.background}>
                <AppBar 
                    title={<span>brewcrew</span>}
                    iconElementLeft={<DrawerLeft />}
                    iconElementRight={this.props.authenticated ? <Logged /> : <Login />/*this.renderLinks()*/}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);