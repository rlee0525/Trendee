class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :content, null: false
      t.string :category, null: false
      t.string :subcategory, null: false
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :country

      t.timestamps
    end

    add_index :posts, :user_id, unique: true
  end
end
