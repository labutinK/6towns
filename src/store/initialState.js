export const initialState = {
  currentTownId: 1,
  offers: [
    {
      "id": 1,
      "name": `Beautiful & luxurious apartment at great location`,
      "city": {
        "name": `Amsterdam`
      },
      "mark": false,
      "stars": 4,
      "img": `./img/apartment-01.jpg`,
      "price": 120,
      "type": `Apartment`,
      "coords": [`52.3909553943508`, `4.85309666406198`],
      "photos": [
        `img/room.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "whatsInside": [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      "fav": true,
      "host": {
        id: 2,
        name: `Angelina`,
        status: `Pro`,
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        avatar: `img/avatar-angelina.jpg`,
      },
      "features": [
        {
          type: `class`,
          text: `Apartment`,
        },
        {
          type: `contains`,
          text: `3 Bedrooms`,
        },
        {
          type: `canliveamount`,
          text: `Max 3 adults`,
        }
      ]
    },
    {
      "id": 2,
      "name": `Wood and stone place`,
      "mark": true,
      "city": {
        "name": `Paris`
      },
      "stars": 5,
      "img": `./img/room.jpg`,
      "price": 80,
      "type": `Private room`,
      "coords": [`52.369553943508`, `4.85309666406198`],
      "photos": [
        `img/room.jpg`,
        `img/apartment-03.jpg`,
        `img/apartment-01.jpg`,
      ],
      "whatsInside": [
        `Wi-Fi`,
        `Towels`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      "fav": true,
      "host": {
        id: 1,
        name: `Max`,
        status: `Pro`,
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        avatar: `img/avatar-max.jpg`,
      },
      "features": [
        {
          type: `class`,
          text: `Apartment`,
        },
        {
          type: `contains`,
          text: `3 Bedrooms`,
        },
        {
          type: `canliveamount`,
          text: `Max 3 adults`,
        }
      ]
    },
    {
      "id": 3,
      "name": `Canal View Prinsengracht`,
      "city": {
        "name": `Hamburg`
      },
      "mark": false,
      "stars": 5,
      "img": `./img/apartment-02.jpg`,
      "price": 132,
      "type": `Apartment`,
      "coords": [`52.3909553943508`, `4.929309666406198`],
      "photos": [
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "whatsInside": [
        `Washing machine`,
        `Heating`,
        `Baby seat`,
        `Dishwasher`,
        `Fridge`,
      ],
      "fav": true,
      "host": {
        id: 3,
        name: `Angelina`,
        status: `Pro`,
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        avatar: `img/avatar-max.jpg`,
      },
      "features": [
        {
          type: `class`,
          text: `Apartment`,
        },
        {
          type: `contains`,
          text: `3 Bedrooms`,
        },
        {
          type: `canliveamount`,
          text: `Max 3 adults`,
        }
      ]
    },
    {
      "id": 4,
      "name": `Nice, cozy, warm big bed apartment`,
      "mark": true,
      "stars": 4,
      "city": {
        "name": `Dusseldorf`
      },
      "img": `./img/apartment-03.jpg`,
      "price": 180,
      "type": `Apartment`,
      "coords": [`52.3809553943508`, `4.939309666406198`],
      "photos": [
        `img/apartment-02.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "whatsInside": [
        `Washing machine`,
        `Baby seat`,
        `Fridge`,
      ],
      "fav": true,
      "host": {
        id: 2,
        name: `Angelina`,
        status: `Pro`,
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        avatar: `img/avatar-angelina.jpg`,
      },
      "features": [
        {
          type: `class`,
          text: `Apartment`,
        },
        {
          type: `contains`,
          text: `3 Bedrooms`,
        },
        {
          type: `canliveamount`,
          text: `Max 3 adults`,
        }
      ]
    },
    {
      "id": 7,
      "name": `Nice, cozy, warm big bed apartment`,
      "mark": true,
      "stars": 4,
      "city": {
        "name": `Paris`
      },
      "img": `./img/apartment-03.jpg`,
      "price": 180,
      "type": `Apartment`,
      "coords": [`52.3809553943508`, `4.939309666406198`],
      "photos": [
        `img/apartment-02.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "whatsInside": [
        `Washing machine`,
        `Baby seat`,
        `Fridge`,
      ],
      "fav": true,
      "host": {
        id: 2,
        name: `Angelina`,
        status: `Pro`,
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        avatar: `img/avatar-angelina.jpg`,
      },
      "features": [
        {
          type: `class`,
          text: `Apartment`,
        },
        {
          type: `contains`,
          text: `3 Bedrooms`,
        },
        {
          type: `canliveamount`,
          text: `Max 3 adults`,
        }
      ]
    },
  ]
};
