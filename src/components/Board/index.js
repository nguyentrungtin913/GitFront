/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import styles from "./styles";
import { SELLER_ROUTES } from "./../../constants";
import { NavLink } from "react-router-dom";
import Menu from "./../../containers/Seller/Menu";

class Board extends Component {
  openNav = () => {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
  }
  render() {
    const { children, classes } = this.props;
    return (
      <>
        <div className="hero_area">
          <div className="hero_bg_box">
            <img src="/images/header.jpg" alt="" />
          </div>
          <header className="header_section">
            <div className={`container-fluid ${classes.container}`}>
              <nav className={`navbar navbar-expand-lg custom_nav-container ${classes.nav}`} id="fixNav">
                <NavLink
                  key={'/home'}
                  to={'/home'}
                  exact={false}
                  id="title"
                  style={{ margin: '-10px 0 15px 0' }}
                  className={`navbar-brand ${classes.navLink}`}
                >
                  <span className={classes.title}>{'Photocopy Bảo Nam'}</span>
                </NavLink>

                <div className="" id="">
                  <div className="container">
                    <div className=" mr-auto flex-column flex-lg-row align-items-center">
                      <ul className="navbar-nav justify-content-between ">
                        <div className="User_option" id="cart" style={{ marginTop: "-40px" }}>
                        <li className="" id="home" style={{display: "none"}}>
                            <NavLink
                              key={'/home'}
                              to={'/home'}
                              exact={true}
                              className={classes.menuLink}
                              activeClassName={classes.menuLinkActive}
                            >
                              <button className="btn nav_search-btn" >
                              <i className="fas fa-home-lg-alt fa-2x"></i>
                              </button>
                            </NavLink>
                          </li>
                          <li className="">
                            <NavLink
                              key={'/cart'}
                              to={'/cart'}
                              exact={true}
                              className={classes.menuLink}
                              activeClassName={classes.menuLinkActive}
                            >
                              <button className="btn nav_search-btn" >
                                <i className="fad fa-shopping-cart fa-2x"></i>
                              </button>
                            </NavLink>
                          </li>
                          <li className="">
                            <NavLink
                              key={'/search'}
                              to={'/search'}
                              exact={true}
                              className={classes.menuLink}
                              activeClassName={classes.menuLinkActive}
                            >
                              <button className="btn nav_search-btn" >
                              <i className="fas fa-search fa-2x"></i>
                              </button>
                            </NavLink>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>

                  <div className="custom_menu-btn" style={{ top: '-10px' }}>
                    <button onClick={() => this.openNav()}>
                      <span className="s-1"> </span>
                      <span className="s-2"> </span>
                      <span className="s-3"> </span>
                    </button>
                  </div>
                  <div id="myNav" className="overlay">
                    <div className="overlay-content">
                      {SELLER_ROUTES.map((item) => {
                        if (item.path !== '/product') {
                          return (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              exact={item.exact}
                              className={classes.menuLink}
                              activeClassName={classes.menuLinkActive}
                            >
                              {item.name}
                            </NavLink>
                          );
                        }
                      })}

                      <div className="dropdown">
                        <button
                          className={`${classes.button} ${classes.menuLink}`}
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Loại Sản Phẩm
                        </button>

                        <Menu key={"1a"} onClose={() => this.openNav()} />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <section className="slider_section" style={{marginBottom: '-50px', marginTop: '60px'}}>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h5>
                            01
                          </h5>
                          <h1>
                            Sản Phẩm <br />
                            Chất Lượng Cao
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h5>
                            02
                          </h5>
                          <h1>
                            Mẫu Mã <br />
                            Đa Dạng
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
              </ol>
            </div>
          </section>
        </div>
        {children}
        <div>
          <div className="social-button">
            <div className="social-button-content" style={{ marginLeft: '-20px' }}>
              <a href="https://www.facebook.com/nam.ngonguyenbao.1" className="mes">
                <img src="/images/iconFacebook.png" alt="facebook" style={{ width: '40px' }} />
                <span>Nhắn tin Facebook</span>
              </a>
              <a href="http://zalo.me/0942323664" className="zalo">
                <img src="/images/iconZalo.png" alt="zalo" style={{ width: '40px' }} />
                <span>Zalo: 094.2323.664</span>
              </a>
            </div>
          </div>
        </div>
        <section className="container-fluid footer_section">
          <div className="container" style={{ fontSize: '13pt' }}>
            <div className="row m-2">
              <div className="col-sm-6 col-md-6 col-lg-6 mx-auto footer-col">
                <h4>
                  Liên hệ chúng tôi
                </h4>
                <div className="contact_nav">
                  <a href="https://www.google.com/maps/place/VPP-Photo+B%E1%BA%A3o+Nam/@10.4220607,105.3739718,18.7z/data=!4m5!3m4!1s0x0:0x6c08ea7797a70826!8m2!3d10.4217276!4d105.3739035">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    <span>
                      Vị trí
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Điện thoại: +84 94 2323 664
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      Email : photocopybaonam@gmail.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 footer-col">
                <div className="footer_detail">
                  <div className="map_container">
                    <div className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.262230504435!2d105.37389748621715!3d10.420186611705928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c08ea7797a70826!2sVPP-Photo%20B%E1%BA%A3o%20Nam!5e0!3m2!1svi!2s!4v1654923718861!5m2!1svi!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info">

            </div>
          </div>
        </section>
        <button
          type="button"
          // className="btn btn-danger btn-floating"
          id="btn-back-to-top"
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <i className="fas fa-arrow-alt-to-top fa-2x" style={{ margin: '2px' }}></i>
        </button>
      </>
    );
  }
}

Board.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func
  })
};

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Board);
