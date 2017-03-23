import React from 'react';
import Slider from 'react-slick';
import FontAwesome from 'react-fontawesome';

class CategoryOneSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  nextArrow(props) {
    return (
      <div {...this.props} className="next-arrow">
        <FontAwesome
          className='fa-chevron-right'
          name='chevron-right'
          id='fa-chevron-right' />
      </div>
    );
  }

  prevArrow(props) {
    return (
      <div {...this.props} className="prev-arrow">
        <FontAwesome
          className='fa-chevron-left'
          name='chevron-left'
          id='fa-chevron-left' />
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
      <div className="category-one-div">
        <div className="category-one-title">
          Category One
        </div>
        <div className="category-one-slider">
          <Slider className="slider-container" {...settings}>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227510/7_afgeh3.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227510/8_apgnhx.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla5_nuqs5l.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/3_abguqq.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/2_nhrebe.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/2_nhrebe.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/1_bhjdiy.jpg"/>
          </Slider>
        </div>
      </div>
    );
  }
}

export default CategoryOneSlider;
