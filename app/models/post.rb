class Post < ApplicationRecord
  validates :user, :title, :content, :category, :subcategory, presence: true

  belongs_to :user
end
