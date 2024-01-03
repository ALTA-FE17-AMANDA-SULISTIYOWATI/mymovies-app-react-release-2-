import React from "react"
import StarIcon from "../icons/star"

type Movie = {
  adult: boolean
  backdrop_path: React.ReactNode
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const nowPlayingMovies: Movie[] = [
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 1,
    original_language: "en",
    original_title: "TOP GUN: Maverick",
    overview: "",
    popularity: 0,
    poster_path: "/images/Topgun.png",
    release_date: "",
    title: "TOP GUN: Maverick",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 2,
    original_language: "en",
    original_title: "Spiderman: into the spider verse",
    overview: "",
    popularity: 0,
    poster_path: "/images/spiderman.png",
    release_date: "",
    title: "Spiderman: into the spider verse",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 3,
    original_language: "en",
    original_title: "Black Panther: Wakanda Forever",
    overview: "",
    popularity: 0,
    poster_path: "/images/blackpanther.png",
    release_date: "",
    title: "Black Panther: Wakanda Forever",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 4,
    original_language: "en",
    original_title: "Batman V Superman",
    overview: "",
    popularity: 0,
    poster_path: "/images/batman.png",
    release_date: "",
    title: "Batman V Superman",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 5,
    original_language: "en",
    original_title: "Wonder Woman",
    overview: "",
    popularity: 0,
    poster_path: "/images/wonderwoman.jpeg",
    release_date: "",
    title: "Wonder Woman",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 6,
    original_language: "en",
    original_title: "Aquaman and the Lost Kingdom",
    overview: "",
    popularity: 0,
    poster_path: "/images/aquaman.jpeg",
    release_date: "",
    title: "Aquaman and the Lost Kingdom",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 7,
    original_language: "en",
    original_title: "One Piece",
    overview: "",
    popularity: 0,
    poster_path: "/images/onepiece.jpeg",
    release_date: "",
    title: "One Piece",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 8,
    original_language: "en",
    original_title: "Trolls Band Together",
    overview: "",
    popularity: 0,
    poster_path: "/images/trolls.jpeg",
    release_date: "",
    title: "Trolls Band Together",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 9,
    original_language: "en",
    original_title: "Elemental",
    overview: "",
    popularity: 0,
    poster_path: "/images/elemental.jpeg",
    release_date: "",
    title: "Elemental",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 10,
    original_language: "en",
    original_title: "Chicken Run: Dawn of the Nugget",
    overview: "",
    popularity: 0,
    poster_path: "/images/chicken.jpeg",
    release_date: "",
    title: "Chicken Run: Dawn of the Nugget",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 11,
    original_language: "en",
    original_title: "Silent Night",
    overview: "",
    popularity: 0,
    poster_path: "/images/silent.jpeg",
    release_date: "",
    title: "Silent Night",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 12,
    original_language: "en",
    original_title: "Godzilla Minus One",
    overview: "",
    popularity: 0,
    poster_path: "/images/godzilla.jpeg",
    release_date: "",
    title: "Godzilla Minus One",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 13,
    original_language: "en",
    original_title: "Migration",
    overview: "",
    popularity: 0,
    poster_path: "/images/migration.jpeg",
    release_date: "",
    title: "Migration",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 14,
    original_language: "en",
    original_title: "Wish",
    overview: "",
    popularity: 0,
    poster_path: "/images/wish.jpeg",
    release_date: "",
    title: "Wish",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 15,
    original_language: "en",
    original_title: "PAW Patrol : The Mighty Movie",
    overview: "",
    popularity: 0,
    poster_path: "/images/paw.jpeg",
    release_date: "",
    title: "PAW Patrol : The Mighty Movie",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
]

export const favoriteMovies: Movie[] = [
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 1,
    original_language: "en",
    original_title: "Aquaman and the Lost Kingdom",
    overview: "",
    popularity: 0,
    poster_path: "/images/aquaman.jpeg",
    release_date: "",
    title: "Aquaman and the Lost Kingdom",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 2,
    original_language: "en",
    original_title: "Silent Night",
    overview: "",
    popularity: 0,
    poster_path: "/images/silent.jpeg",
    release_date: "",
    title: "Silent Night",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 3,
    original_language: "en",
    original_title: "Trolls Band Together",
    overview: "",
    popularity: 0,
    poster_path: "/images/trolls.jpeg",
    release_date: "",
    title: "Trolls Band Together",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 4,
    original_language: "en",
    original_title: "Godzilla Minus One",
    overview: "",
    popularity: 0,
    poster_path: "/images/godzilla.jpeg",
    release_date: "",
    title: "Godzilla Minus One",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 5,
    original_language: "en",
    original_title: "Migration",
    overview: "",
    popularity: 0,
    poster_path: "/images/migration.jpeg",
    release_date: "",
    title: "Migration",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 6,
    original_language: "en",
    original_title: "Wish",
    overview: "",
    popularity: 0,
    poster_path: "/images/wish.jpeg",
    release_date: "",
    title: "Wish",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 7,
    original_language: "en",
    original_title: "Elemental",
    overview: "",
    popularity: 0,
    poster_path: "/images/elemental.jpeg",
    release_date: "",
    title: "Elemental",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 8,
    original_language: "en",
    original_title: "The Last Of Us Season 1",
    overview: "",
    popularity: 0,
    poster_path: "/images/last2.png",
    release_date: "",
    title: "The Last Of Us Season 1",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
]