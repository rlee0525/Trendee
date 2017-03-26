@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing,
                  :brand,
                  :category,
                  :day_rate,
                  :id,
                  :lat,
                  :listing_title,
                  :lng,
                  :review_count
    json.set! :lessor,
              listing.lessor.username
    json.set! :brand,
              listing.brand.name
    json.set! :category,
              listing.category.name
    json.set! :rating_average,
              listing.rating_average
    json.photos listing.photos do |photo|
      json.image_url photo.image_url
      json.photo_id photo.id
    end
  end
end
