import React, { Component } from 'react';
import Footer from './footer';

export default class Body extends Component {
    render() {
        return (
            <body className="index-page">
                <div className="wrap-body" style={{width:'100%'}}>
                    <header id="header">
                        <div className="wrap-header">
                            {/*<!--Main Header-->*/}
                            <div className="main-header">
                                <div className="zerogrid">
                                    <div className="row">
                                        <div className="hero-heading">
                                            {/*<!--<span>brewcrew</span>-->*/}
                                            <img src="../../../style/images/logo/logoround.png" />
                                            <div className="tl"></div>
                                            <div className="tr"></div>
                                            <div className="br"></div>
                                            <div className="bl"></div>
                                        </div>
                                        <div className="heading-text">
                                            <h2>Have a lituation?</h2>
                                            <p>Let us choose where to start your night</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    <section id="container">

                        <div className="wrap-container">
                            {/*<!--content-box-1-->*/}
                            <section className="content-box box-1">
                                <div className="">
                                    <div className="row wrap-box">
                                        {/*<!--Start Box-->*/}
                                        <div className="header">
                                            <h2>How We Work</h2>
                                            <p className="intro"><a href="#.html">Sign in</a> and tell us about yourself.<br />We will help you decide on a bar to begin your night!</p>
                                        </div>
                                        <div className="content">
                                            <div id="owl-slide" className="owl-carousel">
                                                <div className="item">
                                                    <img src="../../../style/images/bars/bar_food.jpg" /*style={{marginLeft: '10', marginRight: '10'}}*/ />
                                                    <div className="carousel-caption" style={{justifyContent: 'center'}}>
                                                        <div className="carousel-caption-inner">
                                                            <p className="carousel-caption-title"><a href="#">Hungry?</a></p>
                                                            {/*<!--<p className="carousel-caption-category"><a href="#" rel="category tag">Wheat</a>,
                                                                <a href="#" rel="category tag">Seeds</a>, <a href="#" rel="category tag">Field</a>-->*/}
                                                            <p className="carousel-caption-category">Let us choose where to dine.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <img src="../../../style/images/bars/bar_dj_music.jpg" />
                                                    <div className="carousel-caption">
                                                        <div className="carousel-caption-inner">
                                                            <p className="carousel-caption-title"><a href="#">Wanna dance?</a></p>
                                                            {/*<!--<p className="carousel-caption-category"><a href="#" rel="category tag">Vegetables</a>,
                                                                <a href="#" rel="category tag">Potatoes</a>, <a href="#" rel="category tag">Garden</a>-->*/}
                                                            <p className="carousel-caption-category">We know all the spots.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <img src="../../../style/images/bars/bar_tap.jpg" />
                                                    <div className="carousel-caption">
                                                        <div className="carousel-caption-inner">
                                                            <p className="carousel-caption-title"><a href="#">Just want a brew?</a></p>
                                                            {/*<!--<p className="carousel-caption-category"><a href="#" rel="category tag">Fruit</a>,
                                                                <a href="#" rel="category tag">Berries</a>, <a href="#" rel="category tag">Vitamin</a>-->*/}
                                                            <p className="carousel-caption-category">We'll narrow down the selections for you.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*<!--content-box-2-->*/}
                            <section className="content-box box-2">
                                <div className="zerogrid">
                                    <div className="row wrap-box">
                                        {/*<!--Start Box-->*/}
                                        <div className="column sm-1-2">
                                            <div className="wrap-col">
                                                <img src="../../../style/images/bars/empty_bar.jpg" />
                                            </div>
                                        </div>
                                        <div className="column sm-1-2">
                                            <div className="wrap-col">
                                                <p>We're experienced in nights out and know how difficult it can be to choose a spot which will please everyone in your party. Just have your group sign in, fill out your individual preferences, and we will present you
                                                    with some selections that will please everyone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*<!--content-box-3-->*/}
                            <section className="content-box box-3 boxstyle-2">
                                <div className="zerogrid">
                                    <div className="row wrap-box">
                                        {/*<!--Start Box-->*/}
                                        <div className="row clearfix">
                                            <div className="column md-1-2 sm-1-2 xs-1-2"><img src="../../../style/images/bars/shot_glass.jpg" alt="" /></div>
                                            <div className="column md-1-3 sm-1-2 xs-1-2">
                                                <a className="button button-skin button-service">More Information</a>
                                                <img src="../../../style/images/bars/bar_shot_single.jpg" alt="" className="hidden-xs" style={{margin: '0 0 0 -80px'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <Footer />

                            {/*<!--content-box-4
                            <section className="content-box box-4">
                                <div className="zerogrid">
                                    <div className="row wrap-box">
                                        {/*<!Start Box-->
                            <!--<div className="header">
                                            <h2>Latest News</h2>
                                            <p className="intro">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                        </div>
                                        <div className="content">
                                            <div className="column sm-1-3">
                                                <div className="wrap-col">
                                                    <div className="box-entry">
                                                        <div className="box-entry-inner">
                                                            <img src="images/bars/bar_cocktails.jpg" className="img-responsive" />
                                                            <div className="entry-details">
                                                                <div className="entry-des">
                                                                    <span><a href="#">08th Apr 2017</a></span>
                                                                    <h3><a href="#">Make Ahead Super Green Vegan Quinoa Sandwich.</a></h3>
                                                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column sm-1-3">
                                                <div className="wrap-col">
                                                    <div className="box-entry">
                                                        <div className="box-entry-inner">
                                                            <img src="images/design/3.jpg" className="img-responsive" />
                                                            <div className="entry-details">
                                                                <div className="entry-des">
                                                                    <span><a href="#">08th Apr 2017</a></span>
                                                                    <h3><a href="#">Make Ahead Super Green Vegan Quinoa Sandwich.</a></h3>
                                                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column sm-1-3">
                                                <div className="wrap-col">
                                                    <div className="box-entry">
                                                        <div className="box-entry-inner">
                                                            <img src="images/design/4.jpg" className="img-responsive" />
                                                            <div className="entry-details">
                                                                <div className="entry-des">
                                                                    <span><a href="#">08th Apr 2017</a></span>
                                                                    <h3><a href="#">Make Ahead Super Green Vegan Quinoa Sandwich.</a></h3>
                                                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>-->*/}

                            {/*<!--content-box-5-->
                            <!--<section className="content-box box-5 boxstyle-1">
                                <div className="zerogrid-full">
                                    <div className="row wrap-box">-->
                            <!--Start Box-->
                            <!--<div className="">
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/1.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">8</div>
                                                            <div className="portfolio-month">November</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/2.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">5</div>
                                                            <div className="portfolio-month">November</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/3.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">13</div>
                                                            <div className="portfolio-month">October</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/4.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">21</div>
                                                            <div className="portfolio-month">October</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/5.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">28</div>
                                                            <div className="portfolio-month">October</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/6.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">4</div>
                                                            <div className="portfolio-month">September</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/7.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">30</div>
                                                            <div className="portfolio-month">September</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/8.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">8</div>
                                                            <div className="portfolio-month">December</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/9.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">8</div>
                                                            <div className="portfolio-month">December</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="column lg-1-5 sm-1-3 xs-1-2 portfolio-box">
                                                <a className="" href="single.html">
                                                    <div className="portfolio-image" style="background-image: url('images/design/10.jpg')"></div>
                                                    <div className="portfolio-caption">
                                                        <div className="portfolio-time">
                                                            <div className="portfolio-day">8</div>
                                                            <div className="portfolio-month">December</div>
                                                            <div className="portfolio-year">2016</div>
                                                        </div>
                                                        <div className="portfolio-details">
                                                            <div className="portfolio-title">Listen to Future</div>
                                                            <div className="portfolio-cat">Music, Single</div>
                                                            <div className="portfolio-comments"><i className="fa fa-comments"></i>0</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>-->*/}

                            {/*content-box-6-->*/}
                            <section className="content-box box-6 box-style-3">
                                <div className="zerogrid">
                                    <div className="row wrap-box">
                                        {/*Start Box*/}
                                        <div className="">
                                            <div className="box-text">
                                                <div className="header">
                                                    <h2>Questions?</h2>
                                                    <p className="intro">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming<br /> id quod mazim placerat facer possim assum. </p>
                                                </div>
                                                <div className="content">
                                                    <div className="subscribe-form">
                                                        <form role="form" id="contactForm" data-toggle="validator">
                                                            <div className="row">
                                                                <div className="column sm-1-3">
                                                                    <div className="wrap-col">
                                                                        <input type="text" name="name" id="name" placeholder="Enter Your Email" required="required" />
                                                                        <div className="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="column sm-1-3">
                                                                    <div className="wrap-col">
                                                                        <input type="email" name="email" id="email" placeholder="Enter Your Email" required="required" />
                                                                        <div className="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="column sm-1-3">
                                                                    <div className="wrap-col">
                                                                        <input type="text" name="subject" id="subject" placeholder="Enter Your Subject" />
                                                                        <div className="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="column full">
                                                                    <div className="wrap-col">
                                                                        <textarea id="message" placeholder="Message"></textarea>
                                                                        <div className="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="column full">
                                                                    <div className="wrap-col">
                                                                        <button className="button button-skin button-subscribe" type="submit" name="Submit">Send</button>
                                                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                    </section>
                           {/*} <!--Footer-->*/}
                    {/*<footer id="footer">
                        <div className="zerogrid wrap-footer">
                            <div className="row">
                                <div className="column sm-2-4 column footer-1">
                                    <div className="wrap-col">
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
                                            <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                            <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                            <!--<li><a href="#"><i className="fa fa-pinterest"></i></a></li>-->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-footer">
                                <div class="copyright">
                                    © brewcrew
                                </div>
                            </div>
                        </div>

                    </footer>*/}
                </div>
            </body>

        );
    }
}