import React from 'react';
import Slider from 'react-slick';
import FontAwesome from 'react-fontawesome';

class CategoryThreeSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  nextArrow(props) {
    return (
      <div {...this.props} className="next-arrow">
        <FontAwesome
          className='fa-angle-right'
          name='angle-right'
          id='fa-angle-right' />
      </div>
    );
  }

  prevArrow(props) {
    return (
      <div {...this.props} className="prev-arrow">
        <FontAwesome
          className='fa-angle-left'
          name='angle-left'
          id='fa-angle-left' />
      </div>
    );
  }

  render() {
    let nextArrow = this.nextArrow(this.props);
    let prevArrow = this.prevArrow(this.props);

    let settings = {
      dots: false,
      arrows: true,
      nextArrow: nextArrow,
      prevArrow: prevArrow,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }, {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    return (
      <div className="category-three-div">
        <div className="category-three-title">
          Category Three
        </div>
        <div className="category-three-slider">
          <Slider className="slider-container" {...settings}>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/4_jgixjd.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla7_bgd2nk.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/1_bhjdiy.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla8_qj9fpq.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/3_abguqq.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla2_nep093.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/9_br0xy6.jpg"/>
          </Slider>
        </div>
      </div>
    );
  }
}

export default CategoryThreeSlider;
