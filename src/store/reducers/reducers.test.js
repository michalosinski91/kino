import reducer from "./reducers";

test("should return the empty initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    showSearchBar: false,
    showTicketPurchaseForm: false,
    showFilter: false,
    genres: [
      {
        name: "Akcja",
        filter: false,
      },
      {
        name: "Animacja",
        filter: false,
      },
      {
        name: "Dramat",
        filter: false,
      },
      {
        name: "Horror",
        filter: false,
      },
      {
        name: "Komedia",
        filter: false,
      },
      {
        name: "Rodzinny",
        filter: false,
      },
      {
        name: "Romans",
        filter: false,
      },
      {
        name: "Thriller",
        filter: false,
      },
    ],
    age: [
      {
        category: "Familijny",
        filter: false,
      },
      {
        category: "13+",
        filter: false,
      },
      {
        category: "17+",
        filter: false,
      },
    ],
    films: [],
  });
});

test("should hide SearchBar if it is visible", () => {
  expect(
    reducer(
      { showSearchBar: true },
      {
        type: "TOGGLE_SEARCHBAR",
      }
    )
  ).toEqual({
    showSearchBar: false,
  });
});

test("should show SearchBar if it is hidden", () => {
  expect(
    reducer(
      { showSearchBar: false },
      {
        type: "TOGGLE_SEARCHBAR",
      }
    )
  ).toEqual({
    showSearchBar: true,
  });
});

test("should hide TicketPurchaseForm if it is visible", () => {
  expect(
    reducer(
      { showTicketPurchaseForm: true },
      {
        type: "TOGGLE_TICKETPURCHASEFORM",
      }
    )
  ).toEqual({
    showTicketPurchaseForm: false,
  });
});

test("should show TicketPurchaseForm if it is hidden", () => {
  expect(
    reducer(
      { showTicketPurchaseForm: false },
      {
        type: "TOGGLE_TICKETPURCHASEFORM",
      }
    )
  ).toEqual({
    showTicketPurchaseForm: true,
  });
});

test("should hide Filter if it is shown", () => {
  expect(reducer({ showFilter: true }, { type: "TOGGLE_FILTER" })).toEqual({
    showFilter: false,
  });
});

test("should show Filter if it is hidden", () => {
  expect(reducer({ showFilter: false }, { type: "TOGGLE_FILTER" })).toEqual({
    showFilter: true,
  });
});

test("should toggle genre.filter to true if it is false", () => {
  const mockGenre = "Komedia";
  expect(
    reducer(
      {
        genres: [
          { name: mockGenre, filter: false },
          { name: "Dramat", filter: false },
        ],
      },
      { type: "TOGGLE_GENRE_FILTER", genre: mockGenre }
    )
  ).toEqual({
    genres: [
      { name: mockGenre, filter: true },
      { name: "Dramat", filter: false },
    ],
  });
});

test("should toggle genre.filter to false if it is true", () => {
  const mockGenre = "Romans";
  expect(
    reducer(
      {
        genres: [
          { name: mockGenre, filter: true },
          { name: "Dramat", filter: true },
        ],
      },
      { type: "TOGGLE_GENRE_FILTER", genre: mockGenre }
    )
  ).toEqual({
    genres: [
      { name: mockGenre, filter: false },
      { name: "Dramat", filter: true },
    ],
  });
});

test("should toggle age.filter to true if it is false", () => {
  const mockAge = "12+";
  expect(
    reducer(
      {
        age: [
          { category: mockAge, filter: false },
          { category: "15+", filter: false },
        ],
      },
      { type: "TOGGLE_AGE_FILTER", age: mockAge }
    )
  ).toEqual({
    age: [
      { category: mockAge, filter: true },
      { category: "15+", filter: false },
    ],
  });
});

test("should toggle age.filter to false if it is true", () => {
  const mockAge = "15+";
  expect(
    reducer(
      {
        age: [
          { category: mockAge, filter: true },
          { category: "18+", filter: true },
        ],
      },
      { type: "TOGGLE_AGE_FILTER", age: mockAge }
    )
  ).toEqual({
    age: [
      { category: mockAge, filter: false },
      { category: "18+", filter: true },
    ],
  });
});

test("should fetch movies from the DB", () => {
  expect(
    reducer(
      {
        films: [],
      },
      { type: "GET_MOVIES" }
    )
  ).toEqual({
    films: [
      {
        title: "The Green Knight",
        year: "2020",
        rated: "N/A",
        release: "2020.05.29",
        duration: "125 min",
        genre: "Drama, Horror",
        director: "David Lowery",
        writer: "David Lowery",
        actors: "Dev Patel, Alicia Vikander, Joel Edgerton, Sarita Choudhury",
        plot:
          "A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight.",
        country: "USA, Ireland",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNWE1ZGE5Y2QtYWE4Yi00YjM0LThhNWYtMWM1OGJjNDU3YzMyXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
      },
      {
        title: "Tenet",
        year: "2020",
        rated: "N/A",
        release: "2020.07.17",
        duration: "N/A",
        genre: "Action, Drama, Thriller",
        director: "Christopher Nolan",
        writer: "Christopher Nolan",
        actors:
          "Elizabeth Debicki, Robert Pattinson, Aaron Taylor-Johnson, Kenneth Branagh",
        plot:
          "An action epic revolving around international espionage, time travel, and evolution. Possibly about a man trying to prevent World War 3 through time travel and rebirth.",
        country: "USA, UK",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNmMwYzFlNTEtYTc0NC00NGY4LTgzNzItZGFiYTViY2QzNzU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      },
      {
        title: "Mulan",
        year: "2020",
        rated: "PG-13",
        release: "2020.07.24",
        duration: "115 min",
        genre: "Action, Drama, Family",
        director: "Niki Caro",
        writer: "Rick Jaffa, Amanda Silver, Elizabeth Martin, Lauren Hynek",
        actors: "Yifei Liu, Donnie Yen, Li Gong, Jet Li",
        plot:
          "A young Chinese maiden disguises herself as a male warrior in order to save her father. A live-action feature film based on Disney's 'Mulan.'",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjFlZjZkMTYtODM2Zi00OTM4LWIwYTktOTFjMmQzZDEzZDc4XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
      },
      {
        title: "The SpongeBob Movie: Sponge on the Run",
        year: "2020",
        rated: "N/A",
        release: "2020.08.07",
        duration: "N/A",
        genre: "Animation, Comedy, Family",
        director: "Tim Hill",
        writer: "Tim Hill",
        actors: "Keanu Reeves, Clancy Brown, Awkwafina, Tom Kenny",
        plot:
          "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.",
        country: "South Korea, USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BODIwMmQxNDktOWZjZC00NWI4LTg1NjktMGViOTE4ZTA4ZGY5XkEyXkFqcGdeQXVyNjg5MjU3NjE@._V1_SX300.jpg",
      },
      {
        title: "A Quiet Place Part II",
        year: "2020",
        rated: "PG-13",
        release: "2020.09.04",
        duration: "97 min",
        genre: "Drama, Thriller",
        director: "John Krasinski",
        writer: "Scott Beck, John Krasinski, Bryan Woods",
        actors: "Emily Blunt, Millicent Simmonds, Cillian Murphy, Noah Jupe",
        plot:
          "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMmE3OGY2NzMtMGJmOS00NGViLWI4NjYtMjhlNTMxZjA5MDExXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      },
      {
        title: "Candyman",
        year: "2020",
        rated: "N/A",
        release: "2020.09.25",
        duration: "N/A",
        genre: "Horror, Thriller",
        director: "Nia DaCosta",
        writer: "Jordan Peele, Win Rosenfeld, Nia DaCosta",
        actors:
          "Yahya Abdul-Mateen II, Teyonah Parris, Nathan Stewart-Jarrett, Colman Domingo",
        plot:
          "A \"spiritual sequel\" to the 1992 horror film 'Candyman' that returns to the now-gentrified Chicago neighborhood where the legend began.",
        country: "Canada, USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BM2RiMzdmZjYtY2VhZS00YzQ4LWIzNjItYWY5ZTFiNTI0ZGU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        title: "Black Widow",
        year: "2020",
        rated: "Unrated",
        release: "2020.11.06",
        duration: "N/A",
        genre: "Action",
        director: "Cate Shortland",
        writer: "Jac Schaeffer, Ned Benson, Eric Pearson",
        actors:
          "Florence Pugh, Robert Downey Jr., Scarlett Johansson, David Harbour",
        plot:
          "A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGRlNTY3NGYtM2YzZS00N2YyLTg0ZDYtNmY2ZDg2NDM3N2JlXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
      },
      {
        title: "No Time to Die",
        year: "2020",
        rated: "PG-13",
        release: "2020.11.25",
        duration: "163 min",
        genre: "Action, Thriller",
        director: "Cary Joji Fukunaga",
        writer:
          "Neal Purvis, Robert Wade, Cary Joji Fukunaga, Phoebe Waller-Bridge",
        actors: "Ana de Armas, Daniel Craig, Ralph Fiennes, Léa Seydoux",
        plot:
          "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        country: "UK, USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGEwMDU2ZDQtZmE5Zi00YjFiLWIwYWItOGMyMzY5MzljOWU3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg",
      },
      {
        title: "Soul",
        year: "2020",
        rated: "N/A",
        release: "2020.11.20",
        duration: "N/A",
        genre: "Animation, Comedy, Family",
        director: "Pete Docter, Kemp Powers(co-director)",
        writer: "Pete Docter, Mike Jones, Kemp Powers",
        actors: "Jamie Foxx, Tina Fey, Quest Love, Phylicia Rashad",
        plot:
          "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2YxY2M5N2YtZmJhNS00YTE1LWE5OTQtMTYyYzkyMzIzOTE1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      },
      {
        title: "Free Guy",
        year: "2020",
        rated: "N/A",
        release: "2020.12.11",
        duration: "N/A",
        genre: "Action, Comedy",
        director: "Shawn Levy",
        writer: "Matt Lieberman, Matt Lieberman, Zak Penn",
        actors: "Jodie Comer, Taika Waititi, Ryan Reynolds, Joe Keery",
        plot:
          "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzE5YzVjZmEtNGYwZi00YjljLWExMzYtZjlkYTk4NDc0MmI5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      },
      {
        title: "Top Gun: Maverick",
        year: "2020",
        rated: "N/A",
        release: "2020.12.23",
        duration: "N/A",
        genre: "Action, Drama",
        director: "Joseph Kosinski",
        writer: "Ehren Kruger, Eric Warren Singer, Christopher McQuarrie",
        actors: "Tom Cruise, Jennifer Connelly, Val Kilmer, Ed Harris",
        plot:
          "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        country: "USA, Hong Kong",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNTEyYTA5YWYtYmIxYS00NWRlLWExNjMtNjliZmVlZDgxNTBlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      },
      {
        title: "Ghostbusters: Afterlife",
        year: "2021",
        rated: "N/A",
        release: "2021.03.05",
        duration: "N/A",
        genre: "Comedy, Action",
        director: "Jason Reitman",
        writer: "Gil Kenan, Jason Reitman",
        actors: "Paul Rudd, Mckenna Grace, Carrie Coon, Sigourney Weaver",
        plot:
          "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
        country: "USA, Canada",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMGZmOGJjYjYtMWFkZi00NTE2LTk5NjktOGZiNDM2ZjBiMjk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      },
      {
        title: "Wonder Woman 1984",
        year: "2020",
        rated: "PG-13",
        release: "2020.08.14",
        duration: "N/A",
        genre: "Action",
        director: "Patty Jenkins",
        writer: "Geoff Johns, Patty Jenkins",
        actors: "Pedro Pascal, Connie Nielsen, Gal Gadot, Robin Wright",
        plot:
          "Plot unknown. A sequel to the 2017 superhero film 'Wonder Woman.'",
        country: "UK, Mexico, Spain, Canada, USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYzAyOGJkMzUtMmRjYS00NGJmLWExNGEtYzI2YjVmMmQzMzFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      },
      {
        title: "Parasite",
        year: "2019",
        rated: "R",
        release: "2019.11.08",
        duration: "132 min",
        genre: "Comedy, Drama, Thriller",
        director: "Bong Joon Ho",
        writer: "Bong Joon Ho, Bong Joon Ho, Jin Won Han",
        actors: "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo, Woo-sik Choi",
        plot:
          "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        country: "South Korea",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      },
      {
        title: "Us",
        year: "2019",
        rated: "R",
        release: "2019.03.22",
        duration: "116 min",
        genre: "Horror, Thriller",
        director: "Jordan Peele",
        writer: "Jordan Peele",
        actors: "Lupita Nyong'o, Winston Duke, Elisabeth Moss, Tim Heidecker",
        plot:
          "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
        country: "USA, China, Japan",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
      },
      {
        title: "Knives Out",
        year: "2019",
        rated: "PG-13",
        release: "2019.11.27",
        duration: "131 min",
        genre: "Comedy, Drama, Thriller",
        director: "Rian Johnson",
        writer: "Rian Johnson",
        actors: "Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis",
        plot:
          "A detective investigates the death of a patriarch of an eccentric, combative family.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg",
      },
      {
        title: "Toy Story 4",
        year: "2019",
        rated: "G",
        release: "2019.06.21",
        duration: "100 min",
        genre: "Animation, Comedy, Family",
        director: "Josh Cooley",
        writer: "John Lasseter, Andrew Stanton, Josh Cooley, Valerie LaPointe",
        actors: "Tom Hanks, Tim Allen, Annie Potts, Tony Hale",
        plot:
          'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg",
      },
      {
        title: "Little Women",
        year: "2019",
        rated: "PG",
        release: "2019.12.25",
        duration: "135 min",
        genre: "Drama, Romance",
        director: "Greta Gerwig",
        writer: "Greta Gerwig, Louisa May Alcott",
        actors: "Saoirse Ronan, Emma Watson, Florence Pugh, Eliza Scanlen",
        plot:
          "Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      },
      {
        title: "Booksmart",
        year: "2019",
        rated: "R",
        release: "2019.05.24",
        duration: "102 min",
        genre: "Comedy",
        director: "Olivia Wilde",
        writer: "Emily Halpern, Sarah Haskins, Susanna Fogel, Katie Silberman",
        actors:
          "Kaitlyn Dever, Beanie Feldstein, Jessica Williams, Jason Sudeikis",
        plot:
          "On the eve of their high school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into one night.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjEzMjcxNjA2Nl5BMl5BanBnXkFtZTgwMjAxMDM2NzM@._V1_SX300.jpg",
      },
      {
        title: "The Farewell",
        year: "2019",
        rated: "PG",
        release: "2019.08.09",
        duration: "100 min",
        genre: "Comedy, Drama",
        director: "Lulu Wang",
        writer: "Lulu Wang",
        actors: "Shuzhen Zhao, Awkwafina, X Mayo, Hong Lu",
        plot:
          "A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMWE3MjViNWUtY2VjYS00ZDBjLTllMzYtN2FkY2QwYmRiMDhjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg",
      },
      {
        title: "Once Upon a Time... in Hollywood",
        year: "2019",
        rated: "R",
        release: "2019.07.26",
        duration: "161 min",
        genre: "Comedy, Drama",
        director: "Quentin Tarantino",
        writer: "Quentin Tarantino",
        actors: "Leonardo DiCaprio, Brad Pitt, Margot Robbie, Emile Hirsch",
        plot:
          "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        country: "USA, UK, China",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
      },
      {
        title: "Ford v Ferrari",
        year: "2019",
        rated: "PG-13",
        release: "2019.11.15",
        duration: "152 min",
        genre: "Action, Drama",
        director: "James Mangold",
        writer: "Jez Butterworth, John-Henry Butterworth, Jason Keller",
        actors: "Matt Damon, Christian Bale, Jon Bernthal, Caitriona Balfe",
        plot:
          "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
        country: "USA, France",
        poster:
          "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
      },
      {
        title: "Honey Boy",
        year: "2019",
        rated: "R",
        release: "2019.11.27",
        duration: "94 min",
        genre: "Drama",
        director: "Alma Har'el",
        writer: "Shia LaBeouf",
        actors: "Shia LaBeouf, Lucas Hedges, Noah Jupe, Byron Bowers",
        plot:
          "A young actor's stormy childhood and early adult years as he struggles to reconcile with his father and deal with his mental health.",
        country: "USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZWQ5YThjZjAtNWM3ZC00MDJjLWIzNDktY2Y2Y2FmMTFiNWJmXkEyXkFqcGdeQXVyMTA2MDQ3MTQ3._V1_SX300.jpg",
      },
      {
        title: "The Lego Movie 2: The Second Part",
        year: "2019",
        rated: "PG",
        release: "2019.02.08",
        duration: "107 min",
        genre: "Animation, Action, Comedy, Family",
        director: "Mike Mitchell",
        writer:
          "Phil Lord , Christopher Miller, Phil Lord , Christopher Miller , Matthew Fogel",
        actors: "Chris Pratt, Elizabeth Banks, Will Arnett, Tiffany Haddish",
        plot:
          "It's been five years since everything was awesome and the citizens are facing a huge new threat: Lego Duplo invaders from outer space, wrecking everything faster than they can rebuild.",
        country: "Denmark, Norway, Australia, USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTkyOTkwNDc1N15BMl5BanBnXkFtZTgwNzkyMzk3NjM@._V1_SX300.jpg",
      },
      {
        title: "Jojo Rabbit",
        year: "2019",
        rated: "PG-13",
        release: "2019.11.08",
        duration: "108 min",
        genre: "Comedy, Drama",
        director: "Taika Waititi",
        writer: "Taika Waititi, Christine Leunens",
        actors:
          "Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson, Taika Waititi",
        plot:
          "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home.",
        country: "New Zealand, Czech Republic, USA",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
      },
      {
        title: "Shazam!",
        year: "2019",
        rated: "PG-13",
        release: "2019.04.05",
        duration: "132 min",
        genre: "Action, Comedy",
        director: "David F. Sandberg",
        writer:
          "Henry Gayden, Henry Gayden, Darren Lemke , Bill Parker, C.C. Beck",
        actors: "Zachary Levi, Mark Strong, Asher Angel, Jack Dylan Grazer",
        plot:
          "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
        country: "USA, Canada",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
      },
      {
        title: "How to Train Your Dragon: The Hidden World",
        year: "2019",
        rated: "PG",
        release: "2019.02.22",
        duration: "104 min",
        genre: "Animation, Action, Family",
        director: "Dean DeBlois",
        writer: "Dean DeBlois, Cressida Cowell",
        actors:
          "Jay Baruchel, America Ferrera, F. Murray Abraham, Cate Blanchett",
        plot:
          'When Hiccup discovers Toothless isn\'t the only Night Fury, he must seek "The Hidden World", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.',
        country: "USA, Japan",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg",
      },
    ],
  });
});
