10.times do
  Recipe.create(
    name: Faker::Food.dish,
    
  )
end

puts "10 Recipes Seeded"