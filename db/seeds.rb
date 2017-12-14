20.times do
  Blog.create(
    name: Faker::TwinPeaks.quote,
    body: Faker::Lovecraft.paragraphs,
    read: false,
  )
end
