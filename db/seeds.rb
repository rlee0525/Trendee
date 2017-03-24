User.destroy_all
Post.destroy_all

uid1 = User.create!(username: "RaymondLee", password: "password", email: "raylee0525@gmail.com", first_name: "Raymond", last_name: "Lee")
p1 = Post.create!(user_id: uid1.id, title: "First Post", content: "This is the first post. Just for testing", category: "Technology / Cars", subcategory: "Technology")
