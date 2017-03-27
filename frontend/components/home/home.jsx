import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainNavBar from '../main_navbar/main_navbar_container';
import MainSearch from '../main_search/main_search_container';
import UserLocation from '../user_location/user_location';
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
          <span id="home-title">Discover<p id="home-title-2"> the next trend.</p></span>
          <MainSearch />
          <UserLocation />

          <div className="slider-body">
            <div className="slider-main">
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

export default withRouter(Home);
