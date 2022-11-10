let cities = [
  {
  
    "name": "Paris",
    "zone": "Nort",
    "photo": "https://ak.picdn.net/shutterstock/videos/12657851/thumb/1.jpg",
    "population": 10516110,
    "userId": "636d82abcedcaf6f80f42e71"
  },
  {
   
    "name": "Roma",
    "zone": "East",
    "photo": "https://i.pinimg.com/originals/b9/83/6b/b9836b8d84be73dac0dcf4f0a0f11c3e.png",
    "population": 2857321,
    "userId": "636d82abcedcaf6f80f42e72"
  },
  {
   
    "name": "Praga",
    "zone": "Center",
    "photo": "https://p4.wallpaperbetter.com/wallpaper/822/89/150/urban-prague-wallpaper-preview.jpg",
    "population": 2300000,
    "userId": "636d82abcedcaf6f80f42e6f"
  },
  {
   
    "name": "Viena",
    "zone": "Center",
    "photo": "https://p4.wallpaperbetter.com/wallpaper/782/462/370/vienna-wallpaper-preview.jpg",
    "population": 1700000,
    "userId": "636d82abcedcaf6f80f42e70"
  },
  {
    
    "name": "Londres",
    "zone": "West",
    "photo": "https://fondosmil.com/fondo/15092.jpg",
    "population": 9950000,
    "userId": "636d82abcedcaf6f80f42e71"
  },
  {
    
    "name": "Lisboa",
    "zone": "Nort",
    "photo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fondosdepantalla.top%2Flisboa-la-bella-4k-wallpapers%2F&psig=AOvVaw2n-mjOjIX_9wrmgfH8VIRl&ust=1667497390668000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjtpf6FkPsCFQAAAAAdAAAAABAI",
    "population": 552975,
    "userId": "636d82abcedcaf6f80f42e72"
  },
  {
    
    "name": "Atenas",
    "zone": "South",
    "photo": "https://i.pinimg.com/originals/68/1d/7f/681d7fbbfe7ae57e14a38c44727c17fa.png",
    "population": 6000000,
    "userId": "636d82abcedcaf6f80f42e6f"
  },
  {
    
    "name": "Milan",
    "zone": "South",
    "photo": "https://p4.wallpaperbetter.com/wallpaper/689/392/890/night-the-city-castle-italy-wallpaper-preview.jpg",
    "population": 3235561,
    "userId": "636d82abcedcaf6f80f42e70"
  },
  {
   
    "name": "Venecia",
    "zone": "South",
    "photo": "https://besthqwallpapers.com/Uploads/24-10-2021/178620/thumb2-venice-4k-grand-canal-summer-italian-cities.jpg",
    "population": 49997,
    "userId": "636d82abcedcaf6f80f42e71"
  },
  {
  
    "name": "Bruselas",
    "zone": "West",
    "photo": "https://wallpaperaccess.com/full/134407.jpg",
    "population": 179277,
    "userId": "636d82abcedcaf6f80f42e72"
  },
  {
    
    "name": "Amsterdan",
    "zone": "Nort",
    "photo": "https://p4.wallpaperbetter.com/wallpaper/84/478/489/amsterdam-netherlands-europe-canal-wallpaper-preview.jpg",
    "population": 17193499,
    "userId": "636d82abcedcaf6f80f42e6f"
  },
  {
   
    "name": "Madrid",
    "zone": "Southwest",
    "photo": "https://images.ecestaticos.com/0gt-6Wb8jUgeowDZ1m25WQcjkU0=/27x0:2191x1623/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F179%2Ff1f%2Fdcf%2F179f1fdcf5b593850440442c5372f5d4.jpg",
    "population": 1500000,
    "userId": "636d82abcedcaf6f80f42e70"
  }
  ]
  
  require('dotenv').config()
  require('../database')
  const City = require('../../models/City')

  cities.forEach(elemento =>{
    City.create({
        name: elemento.name,
        zone: elemento.zone,
        photo: elemento.photo,
        population: elemento.population,
        userId: elemento.userId
    })
  })