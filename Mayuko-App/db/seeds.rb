# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create([
  {product: "犬"},
  {product: "猫"},
  {product: "馬"},
  {product: "牛"}
])

User.create([
  {firstname:"まゆこ",
   lastname:"きてら",
   age:27},
   {firstname:"太郎",
   lastname:"山田",
   age:27},
   {firstname:"花子",
   lastname:"山田",
   age:27}
])