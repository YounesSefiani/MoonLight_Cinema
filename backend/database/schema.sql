create table movies (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  poster VARCHAR(255) NOT NULL,
  background VARCHAR(255) NOT NULL,
  logo VARCHAR(255) NULL,
  release_date DATE NOT NULL,
  genre VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  casting VARCHAR(500) NOT NULL,
  duration VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL,
  trailer VARCHAR(255) NOT NULL,
  state ENUM("upcoming", "available", "lastChance", "event") NOT NULL,
  rated ENUM("Tout Public", "-10", "-12", "-16") NOT NULL
);
/*--------------------------------------------------UPCOMING / PROCHAINEMENT-----------------------------------------------------------*/
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Back to Black","https://image.tmdb.org/t/p/original/ApPQke9zdv3e47fqruyPdRS7lqQ.jpg", "https://image.tmdb.org/t/p/original/xjamzDgw4cznAjIFK9WpmK2AZhY.jpg", "https://image.tmdb.org/t/p/original/cvE3riJKIVDiZcscw736IFa3xTd.png", "2024-04-24", "Musique, Drame", "Sam Taylor-Johnson", "Marisa Abela, Jack O'Connell, Eddie Marsan, Lesley Manville...", "2h02", "Back to Black retrace la vie et la musique d'Amy Winehouse, à travers la création de l'un des albums les plus iconiques de notre temps, inspiré par son histoire d’amour passionnée et tourmentée avec Blake Fielder-Civil.", "https://www.youtube.com/embed/12ikIb0QGtc?si=4yRoi8EmbCXOYXeL", "upcoming", "Tout Public");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Challengers","https://image.tmdb.org/t/p/original/qHP98uEugqaGyo5BzO8v7Ua0JXA.jpg", "https://image.tmdb.org/t/p/original/504GSaoxBA5nLlcMsJfjzLZEKUp.jpg", "https://image.tmdb.org/t/p/original/yzCkkj57aZs4NwypF20CsbxZYZ1.png", "2024-04-24", "Romance, Drame", "Luca Guadagnino", "Zendaya, Mike Faist, Josh O'Connor, Darnell Appling...", "2h12", "Une joueuse de tennis devenue entraîneuse, Tashi, décide de se consacrer à la carrière de son mari, Art, le faisant passer d'un joueur médiocre en un champion du Grand Chelem de renommée mondiale. Pour le sortir d'une récente série de défaites, elle le fait participer à un tournoi Challenger où il se retrouve face à Patrick, son ancien meilleur ami et l'ancien petit-ami de Tashi.", "https://www.youtube.com/embed/Kk5qof29AW0?si=1oFPn5YfcV9RyzGR", "upcoming", "-12");

/*----------------------------------------------AVAILABLE / DISPONIBLE EN SALLES-------------------------------------------------------*/
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Drive-Away Dolls","https://image.tmdb.org/t/p/original/mCo6CBc3Zzr2vbVTq3nHrlyaUZA.jpg", "https://image.tmdb.org/t/p/original/8N3Fv34UTMXbIbdk3DBtasqvwFi.jpg", "https://image.tmdb.org/t/p/original/aMdHapYrSrsM4xzj73F8wd4SreE.png", "2024-04-03", "Comédie, Crime", "Ethan Coen", "Margaret Qualley, Geraldine Viswanathan...", "1h24", "Jamie regrette sa rupture avec sa petite amie, tandis que Marian a besoin de se détendre. À la recherche d'un nouveau départ, ils se lancent dans un road trip inattendu à Tallahassee, mais les choses tournent mal lorsqu'ils croisent la route d'un groupe de criminels incompétents.", "https://www.youtube.com/embed/dNzhUC9EqzY?si=1Z1HhxrKunI44Uai", "available", "-12");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Monkey Man","https://image.tmdb.org/t/p/original/b4fn3VIdVTT3SX0rFMNFbl5xuvg.jpg", "https://image.tmdb.org/t/p/original/9NSXdVHeSfSHUv49OzLispFcpz1.jpg", "https://image.tmdb.org/t/p/original/o82gaKQpIkQcY7geM5X69GZ9qG5.png", "2024-04-17", "Action, Thriller", "Dev Patel", "Dev Patel, Sikandar Kher, Pitobash, Sobhita Dhulipala...", "2h", "En Inde, un jeune homme sort de prison. Il se retrouve dans un monde où règne la cupidité des chefs d'entreprise et, à l'inverse, l'érosion des valeurs spirituelles.", "https://www.youtube.com/embed/UNukJ0Y02nw?si=xafJOwQSHICuEY8f", "available", "-12");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Nous, Les Leroy","https://image.tmdb.org/t/p/original/aKv41BvlvThRxNGtxDPwHxpa4yb.jpg", "https://image.tmdb.org/t/p/original/iB89DMAWEWYrMEnL3xUgF4emMAF.jpg", null, "2024-04-10", "Comédie", "Florent Bernard", "Charlotte Gainsbourg, José Garcia, Lili Aubry, Hadrien Heaulmé...", "1h43", "Sandrine Leroy annonce à son mari Christophe qu’elle veut divorcer. Leurs enfants ont bientôt l’âge de quitter la maison. Dans une opération de la dernière chance aussi audacieuse qu’invraisemblable, Christophe organise un week-end pour sauver son mariage : un voyage passant par les endroits clés de l’histoire de leur famille. Un voyage qui ne va pas être de tout repos.", "https://www.youtube.com/embed/6bR1Uh7gEjI?si=jN6sEBqImnac710F", "available", "Tout Public");


/*-----------------------------------------------LAST CHANCE / DERNIERE CHANCE---------------------------------------------------------*/
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Heureux Gagnants","https://image.tmdb.org/t/p/original/bkhbJUiOrkdNE58uWltqjXcrZKu.jpg", "https://image.tmdb.org/t/p/original/78kyaS397KywhGINuDJj4JHzI6W.jpg", "https://image.tmdb.org/t/p/original/6F0WjdCgwNZ7wUsXlVadgU4Sqjt.png", "2024-03-13", "Comédie", "Maxime Govare", "Audrey Lamy, Fabrice Eboué, Anouk Grinberg, Pauline Clément...", "1h43", "1 chance sur 19 millions. Plus de probabilité d’être frappé par une météorite que de gagner au loto. Pour nos heureux gagnants, le rêve va rapidement se transformer en cauchemar, et leur vie va voler en éclat dans un spectaculaire feu d’artifices de comédie noire et de sensations fortes.", "https://www.youtube.com/embed/0OzUchjeraY?si=ogkTUwytMPaJh1yd", "lastChance", "Tout Public");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Immaculée","https://image.tmdb.org/t/p/original/8sHTTsIBp8yHAy4bcAIgLR5doF8.jpg", "https://image.tmdb.org/t/p/original/7guGy80c590TtgtnmPhQ8H8xSdQ.jpg", "https://image.tmdb.org/t/p/original/jiAGvwv3Z6ebUKKFsyRXLKNVpKR.png", "2024-03-20", "Horreur", "Michael Mohan", "Sydney Sweeney, Alvaro Morte, Benedetta Porcaroli, Dora Romano...", "1h29", "La dévote, Cecilia, se voit offrir la possibilité d'entrer dans un couvent italien. L'accueil chaleureux est bientôt interrompu lorsqu'elle comprend que cette maison de Dieu recèle de sombres et horribles secrets.", "https://www.youtube.com/embed/SWbLlLqvIAo?si=02-LvP69eN08nn-q", "lastChance", "-12");

/*----------------------------------------------------event / EVENEMENTS--------------------------------------------------------------*/
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Hana-Bi","https://image.tmdb.org/t/p/original/nCSZGZOrxQocyvb5AVTSeoCJ54Q.jpg", "https://image.tmdb.org/t/p/original/lcq2owjYI7liuJOGi82KuThHT9x.jpg", "https://image.tmdb.org/t/p/original/tAmdDJYOcjHKMrHS9n83mmtHof3.png", "1997-11-05", "Crime, Drame", "Takeshi Kitano", "Takeshi Kitano, Kayoko Kishimoto, Ren Osugi, Susumu Terajima...", "1h43", "Terriblement traumatisé par la fin prochaine de sa femme et la paralysie d'un de ses collegues, blessé au cours d'une fusillade, le détective Nishi quitte la police. Il va commettre un hold-up pour soulager les miseres de ceux qui l'entourent. La sérénite du dernier voyage qu'il entreprend avec sa femme, vers le mont Fuji, va etre brisée par l'arrivée de yakusas vengeurs.", "https://www.youtube.com/embed/HfFSPuVl5xI?si=tdgTwR_N6A0dHywt", "event", "-12");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Après la tempête","https://image.tmdb.org/t/p/original/rxHPccT2l2Fa55URsbkrVIdIgXz.jpg", "https://image.tmdb.org/t/p/original/6v9G4Sc5ciRUoJ2wkutX3JBQj9K.jpg", null, "2017-04-26", "Drame", "Hirokazu Kore-eda", "Hiroshi Abe, Kirin Kiki, Yoko Maki, Taiyo Yoshizawa...", "1h58", "Malgré un début de carrière d’écrivain prometteur, Ryota accumule les désillusions. Divorcé de Kyoko, il gaspille le peu d’argent que lui rapporte son travail de détective privé en jouant aux courses, jusqu’à ne plus pouvoir payer la pension alimentaire de son fils de 11 ans, Shingo. A présent, Ryota tente de regagner la confiance des siens et de se faire une place dans la vie de son fils. Cela semble bien mal parti jusqu’au jour où un typhon contraint toute la famille à passer une nuit ensemble…", "https://www.youtube.com/embed/wQmOc1jvkKQ?si=2fxLvRKyKm7ff2EZ", "event", "-12");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Ju-on : The Grudge","https://image.tmdb.org/t/p/original/avAWDsoAT0khoM7zAyRLGsRbk4D.jpg", "https://image.tmdb.org/t/p/original/7sK1fJTh6ndhI7gRg1L9VS4260r.jpg", "https://image.tmdb.org/t/p/original/okteoSado7TPvuHxbaM9J9KHk8e.png", "2003-01-25", "Horreur", "Takashi Shimizu", "Megumi Okina, Misa Uehara, Misaki Ito, Kanji Tsuda...", "1h32", "Rika, une assistante sociale, se rend dans une maison sur laquelle pèse une malédiction, pour s'occuper de Sashie, une vieille dame alitée. Elle y découvre un petit garçon enfermé dans un placard, avant d'être agressée par un esprit malfaisant. Quelques jours auparavant, Hitomi, le fils de Sashie, s'était également fait attaquer par le spectre après avoir été témoin de l'apparition du même petit garçon. Lorsque la soeur d'Hitomi débarque à son tour, elle découvre une Rika en état de choc. Intervient alors Toyama, un policer chargé d'enquêter quelques années plus tôt sur la tragédie qui a secoué cette demeure maudite : un homme y avait tué sa femme, et leur jeune fils n'a jamais été retrouvé...", "https://www.youtube.com/embed/BxbBdEA7ZCQ?si=az98q94Pgy8b9Gwo", "event", "-12");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Princesse Mononoké","https://image.tmdb.org/t/p/original/1AfSDxBTYYtQRVY2V1ISgxXNPVx.jpg", "https://image.tmdb.org/t/p/original/gl0jzn4BupSbL2qMVeqrjKkF9Js.jpg", "https://image.tmdb.org/t/p/original/w29hHfCISGc0C82VgcOxKHTIBQZ.png", "2000-01-12", "Animation", "Hayao Miyazaki", "Youji Matsuda, Yuriko Ishida, Yûko Tanaka, Kaoru Kobayashi...", "2h15", "Au XVᵉ siècle, durant l’ère Muromachi, la forêt japonaise, jadis protégée par des animaux géants, se dépeuple à cause de l’homme. Un sanglier transformé en démon dévastateur en sort et attaque le village d’Ashitaka, futur chef du clan Emishi. Touché par le sanglier qu’il a tué, celui‐ci est forcé de partir à la recherche du dieu Cerf pour lever la malédiction qui lui gangrène le bras.", "https://www.youtube.com/embed/8tpd5SAUAkM?si=wiJve3eC0P4A0FMl", "event", "Tout Public");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Dragon Ball Super - Broly","https://image.tmdb.org/t/p/original/uMEgkyiPznZP5AiMSWAk2jsj5gC.jpg", "https://image.tmdb.org/t/p/original/gXSpNiP9a5uq0mo1hcfp2PVUsOV.jpg", "https://image.tmdb.org/t/p/original/rdR1JgooiVKsiXGPggAO8wyVoOq.png", "2019-03-13", "Animation", "Akira Toriyama", "Masako Nozawa, Aya Hisakawa, Ryou Horikawa, Toshio Furukawa...", "1h40", "Quelque temps après le Tournoi du Pouvoir, la Terre est paisible. Son Goku et ses amis ont repris leur vie. Cependant, avec son expérience du Tournoi, Son Goku passe son temps à s'entraîner pour continuer à s'améliorer car ce dernier est conscient qu'il reste encore beaucoup d'individus plus forts à découvrir au sein des autres univers. Lorsqu'un jour, le vaisseau de Freezer refait surface sur la Terre. Celui-ci est accompagné d'un Saiyan, nommé Broly, avec son père, Paragus. La surprise de Son Goku et Vegeta est immense puisque les Saiyans sont censés avoir été complètement anéantis lors de la destruction de la planète Vegeta. Ils n'ont donc pas d'autre choix que de s'affronter, mais ce nouvel ennemi s'adapte très vite aux adversaires qu'il affronte…", "https://www.youtube.com/embed/8ES48oK88JQ?si=V4I7mosVuHd6LbtP", "event", "Tout Public");
INSERT INTO movies (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, trailer, state, rated)
VALUES ("Your Name","https://image.tmdb.org/t/p/original/t8MEqePIZWWdYOOlxCc9LnAywnj.jpg", "https://image.tmdb.org/t/p/original/e7TRYDKXHQD6xLcmA1b0OtVt0E0.jpg", "https://image.tmdb.org/t/p/original/zKI7UKmsB5ywy6Rjs3wWvBfhafJ.png", "2016-12-28", "Animation", "Makoto Shinkai", "Ryunosuke Kamiki, Mone Kamishiraishi, Ryo Narita, Aoi Yuki...", "1h47", "Mitsuha est une lycéenne, la fille du maire d'une petite ville nichée entre les montagnes. Vivant avec sa petite sœur et sa grand-mère, c'est une demoiselle franche qui n'hésite pas à dire qu'elle n'a pas envie de participer aux rituels shinto, ou d'aider son père dans ses campagnes électorales. En fait, elle rêve de pouvoir quitter cette ville où elle s'ennuie, pour partir tenter sa chance à la capitale. Taki est un lycéen, un tokyoïte qui travaille à mi-temps dans un restaurant italien, tout en aspirant à des études d'architecture ou dans les Beaux-Arts. Chaque nuit, il fait un rêve étrange, où il devient… une lycéenne campagnarde, vivant dans une petite ville entre les montagnes. Quel secret se cache derrière ces rêves mutuels, qui unissent ces deux êtres qui ne se sont jamais rencontrés ?", "https://www.youtube.com/embed/AROOK45LXXg?si=ZXT1e8KiB2TDrqUj", "event", "Tout Public");


CREATE TABLE screens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  capacity INT NOT NULL
);

INSERT INTO screens (name, capacity)
VALUES ("Nolan", 200);
INSERT INTO screens (name, capacity)
VALUES ("Stone", 200);
INSERT INTO screens (name, capacity)
VALUES ("Kitano", 150);
INSERT INTO screens (name, capacity)
VALUES ("Nolan", 125);
INSERT INTO screens (name, capacity)
VALUES ("Efira", 100);
INSERT INTO screens (name, capacity)
VALUES ("Foster", 80);
INSERT INTO screens (name, capacity)
VALUES ("Kurosawa", 50);
INSERT INTO screens (name, capacity)
VALUES ("S.Coppola", 50);


CREATE TABLE projections (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movies_id INT,
  screens_id INT,
  date_hour DATETIME,
  FOREIGN KEY (movies_id) REFERENCES movies(id),
  FOREIGN KEY (screens_id) REFERENCES screens(id)  
);

INSERT INTO projections (movies_id, screens_id, date_hour)
VALUES (1, 1, '2024-03-27 20:00:00');

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, password)
VALUES ("sam.lake@hotmail.fr", "12345678");

CREATE TABLE profils (
id INT AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(100) NOT NULL,
lastname VARCHAR(100) NOT NULL,
birthdate DATE NOT NULL,
profil_image varchar(100) NULL,
gender ENUM("Male", "Female", "Non-Binary", "Transgender", "Other"),
creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
user_id INT NOT NULL,
CONSTRAINT fk_profil_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
INSERT INTO profils (firstname, lastname, birthdate, profil_image, gender, user_id)
VALUES ("Sam", "Lake", "1975-04-03", null, "Male", 1);

CREATE TABLE tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  users_id INT,
  projections_id INT,
  quantity INT,
  price_total DECIMAL(10, 2),
  date_purchase DATETIME,
  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (projections_id) REFERENCES projections(id)
);