import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainNavBar from '../main_navbar/main_navbar_container';
import MainSearch from '../main_search/main_search_container';
import FeaturedSlider from '../main_sliders/featured_slider';
import KeepedUsersSlider from '../main_sliders/keeped_users';
import CategoryOneSlider from '../main_sliders/category_one';
import CategoryTwoSlider from '../main_sliders/category_two';
import CategoryThreeSlider from '../main_sliders/category_three';
import KeepedPostsSlider from '../main_sliders/keeped_posts';
import Footer from '../footer/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <MainNavBar />
        
        <div className="home-main-container">
          <MainSearch />

          <div className="splash-body">
            <div className="splash-main">
              <FeaturedSlider />
              <KeepedUsersSlider />
              <CategoryOneSlider />
              <CategoryTwoSlider />
              <CategoryThreeSlider />
              <KeepedPostsSlider />
            </div>
          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
