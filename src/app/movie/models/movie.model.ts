export interface Movie {
  id: number,
  name: string,
  genre: string,
  image: string,
  releaseYear: string,
  score: number,
  sinopsis: string
}

export const movies: Movie[] = [
  {
    id: 1,
    name: "Game Night",
    genre: "Action",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "2018",
    score: 6.9,
    sinopsis: "A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters."
  },
  {
    id: 2,
    name: "Area X: Annihilation",
    genre: "Adventure",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg",
    releaseYear: "2018",
    score: 6.8,
    sinopsis: "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply."
  },
  {
    id: 3,
    name: "Hannah",
    genre: "Drama",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
    releaseYear: "2017",
    score: 5.9,
    sinopsis: "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment."
  },
  {
    id: 4,
    name: "The Lodgers",
    genre: "Drama",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "2017",
    score: 5.1,
    sinopsis: "A family curse confines orphaned twins Rachel and Edwards to their home, in punishment for their ancestors' sins. Bound to the rules of a haunting childhood lullaby, the twins must never let any outsiders inside the house."
  },
  {
    id: 5,
    name: "Beast of Burden",
    genre: "Action",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg",
    releaseYear: "2018",
    score: 3.6,
    sinopsis: "Sean Haggerty only has an hour to deliver his illegal cargo. An hour to reassure a drug cartel, a hitman, and the DEA that nothing is wrong. An hour to make sure his wife survives. And he must do it all from the cockpit of his Cessna."
  },
  {
    id: 6,
    name: "The Chamber",
    genre: "Horror",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVlODgwMjgtZGUzMy00ZTY1LWIyMDEtYTI2Y2JlYzVjZTNkXkEyXkFqcGdeQXVyNTg0MDM1MzY@._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "1996",
    score: 6.0,
    sinopsis: "A young man fresh out of law school tries to win a reprieve for his racist grandfather who is on death row."
  },
  {
    id: 7,
    name: "Survivors Guide to Prison",
    genre: "Documentary",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzhmNmI5MDMtZDEyOC00ODkyLTkwODItODQzODAzY2QyZjVlXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SY500_CR0,0,357,500_AL_.jpg",
    releaseYear: "2018",
    score: 7.1,
    sinopsis: "Today, you're more likely to go to prison in the United States than anywhere else in the world. So in the unfortunate case it should happen to you - this is the Survivors Guide to Prison."
  },
  {
    id: 8,
    name: "Red Sparrow",
    genre: "Mystery",
    // tslint:disable-next-line: max-line-length
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY500_CR0,0,337,500_AL_.jpg",
    releaseYear: "2018",
    score: 6.6,
    sinopsis: "Ballerina Dominika Egorova is recruited to 'Sparrow School', a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations."
  },
];
