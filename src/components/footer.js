import React, { Component } from 'react'

const style = {
    background: {
        /*display: 'flex',
        flexWrap: 'wrap',*/
        width: '100%'
    },

    phantom: {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%'
    }
};

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="footer" style={style.background}>
                <div style={style.phantom}/>
                <div className="row">
                    <div className="column sm-2-4 column footer-1">
                        <div className="wrap-col" style={{marginLeft: '60px'}}>
                            <h3 className="widget-title">About</h3>
                            <p>brewcrew helps groups find bars in their area that will make everyone happy.</p>
                            <ul className="quicklinks">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column sm-1-4 column footer-2">
                        <div className="wrap-col">
                            <h3 className="widget-title">Contact Us</h3>
                            <p>Call us:</p>
                            <strong>281-444-4444</strong>
                            <p>Address:</p>
                            <strong>9990 Richmond Avenue, <br />South Building, Ste. 102, <br />Houston, TX 77042</strong>
                            <p>Email:</p>
                            <strong>info@brewcrew.com</strong>
                        </div>
                    </div>
                    <div className="column sm-1-4 column footer-3">
                        <div className="wrap-col">
                            <h3 className="widget-title">Socials</h3>
                            <ul className="social-buttons">
                                <li style={{margin: '10px'}}><a href="https://github.com/kndelacerda/brewcrew"><i className="fa fa-github-square fa-lg"></i></a></li>
                                <li style={{margin: '10px'}}><a href="#"><i className="fa fa-twitter-square fa-lg"></i></a></li>
                                <li style={{margin: '10px'}}><a href="#"><i className="fa fa-facebook-square fa-lg"></i></a></li>
                                <li style={{margin: '10px'}}><a href="#"><i className="fa fa-linkedin-square fa-lg"></i></a></li>
                                {/* <li><a href="#"><i class="fa fa-pinterest"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="copyright">
                        © brewcrew
                    </div>
                </div>
            </div>
        );
    }
}


export default Footer;