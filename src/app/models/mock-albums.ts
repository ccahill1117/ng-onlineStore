import { Album } from './album.model'

export const ALBUMS: Album[] = [

  new Album({title: "Pulse", artist: "Pink Floyd",
  description: "A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.", id: 1}),
  new Album({title: "Funhouse", artist:"The Stooges",
  description:"The second  album from the American rock band, released in 1970 by Elektra Records.", id:2}),
  new Album({title:"Twilight of the Thunder God", artist:"Amon Amarth",
  description:"Seventh album by the Swedish band, released in 2008, based on Thor's battle with the serpent Jörmungandr.", id:3}),
  new Album({title:"Dilate", artist:"Ani DiFranco",
  description:"Her highest-selling and most acclaimed album, released in 1996.", id:4}),
  new Album({title:"Chopin - Complete Nocturnes", artist:"Brigitte Engerer",
  description:"Released in 2010, this is Engerer's own rendition of the classical composer Chopin.", id:5}),
  new Album({title:"Axis Bold As Love", artist:"The Jimi Hendrix Experience",
  description:"Second studio album by the English-American band, released in 1967.", id:6})

]
