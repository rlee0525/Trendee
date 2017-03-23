import React from 'react';
import Slider from 'react-slick';
import FontAwesome from 'react-fontawesome';

class FeaturedSlider extends React.Component {
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
      <div className="featured-div">
        <div className="featured-title">
          Featured
        </div>
        <div className="featured-slider">
          <Slider className="slider-container" {...settings}>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/1_bhjdiy.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227510/5_zrkwbs.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227510/7_afgeh3.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227509/9_br0xy6.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490227510/6_o8ndem.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla5_nuqs5l.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
            <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla6_savm0g.jpg"/>
          </Slider>
        </div>
      </div>
    );
  }
}

export default FeaturedSlider;
