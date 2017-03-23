import React from 'react';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: {
                    "Arts / Entertainment / Reviews": ["Books", "Movies", "Music", "Concert / Exhibition", "Arts", "Games"],
                    "Travel / Leisure": ["Travel", "Camping", "Outdoor Activities"],
                    "Cooking / Food / Drink": ["Cooking", "Restaurants", "Wine", "Bars", "Dessert"],
                    "Photos / Essays / Nature": ["Photos", "Painting", "Essays / Novels"],
                    "Technology / Cars": ["Technology", "Cars"],
                    "Sports": ["Football", "Baseball", "Basketball", "Ice Hockey", "Soccer", "Tennis", "Golf", "Others"],
                    "Politics / News": ["Politics", "Economics", "News"],
                    "Daily / Child / Education": ["Daily", "Pets", "Education", "Foreign Language"],
                    "Fashion / Beauty / Interior Design": ["Interior Design", "Fashion", "Beauty"]
                  },
      categoriesSelected: ""
    };

    this.displaySubCategories = this.displaySubCategories.bind(this);
  }

  update(property, category) {
    return e => this.setState({
      [property]: category
    });
  }

  displaySubCategories() {
    let categories = this.state.categories;
    let categorySelected = this.state.categoriesSelected;
    let subCategories = categories[this.state.categoriesSelected];
    let subcategoriesDropDown;

    if (categorySelected) {
      subcategoriesDropDown = subCategories.map(subcategory => (
        <li>
          {subcategory}
        </li>
      ))
    }

    return (
      <div className="subcategories-list-dropdown">
        <ul>
          {subcategoriesDropDown}
        </ul>
      </div>
    )
  }

  render() {
    let categoriesList = Object.keys(this.state.categories);

    let categoriesDropDown = categoriesList.map(category => (
      <li onMouseOver={this.update("categoriesSelected", category)}>
        {category}
      </li>
    ));

    return (
      <div className="categories-dropdown">
        <div className="categories-list-dropdown">
          <ul>
            {categoriesDropDown}
          </ul>
        </div>
        {this.displaySubCategories()}
      </div>
    )
  }
}

export default Categories
