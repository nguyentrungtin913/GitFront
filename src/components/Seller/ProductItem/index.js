import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { API_URL } from "./../../../constants";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { onAddToCart } from './../../../helpers/cartHelper';
class ProductItem extends Component {

  onAddToCart = (id) => {
    onAddToCart(id);
  }

  render() {
    let { product, classes } = this.props;
    let note = product.note ?? '1 cái' ;
    let extra = "";
    if (product.extra === 1) {
      extra = "/images/new.png";
    } else if (product.extra === 2) {
      extra = "/images/hot.webp";
    }

    let priceExport = new Intl.NumberFormat("de-DE").format(
      product.priceExport
    );


    return (
      <div className="col-md-6 col-lg-4">
        <div className={`box ${classes.borderBox}`} >
          <div className="box-img">
            <LazyLoadImage
              className={classes.imageProduct}
              src={`${API_URL}/image/${product.image}`}
              alt="" />
            <LazyLoadImage
              className={{}}
              style={{ position: "absolute", width: "100px", top: "7%", right: "20%" }}
              src={extra}
              alt="" />
          </div>
          <div className="detail-box">
            <div className="container">
              <div class="row">
                <div class="col-8">
                  <h2>{product.name}</h2>
                </div>
                <div class="col">
                  <h3>( {note} )</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div className="price_box">
                    <h3> {priceExport}<sup>đ</sup></h3>
                  </div>
                </div>
                
              </div>
              <div class="row">
                <div class="col">
                  <button className={classes.button} onClick={() => this.onAddToCart(product.id)}><i className="fad fa-cart-arrow-down fa-3x" style={{ color: 'rgb(13 49 151)' }}></i></button>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ProductItem);
