import {POPULAR_SORT} from "../const/const";

export const initialState = {
  currentTown: `Paris`,
  sort: POPULAR_SORT,
  hoverOfferId: 0,
  offers: [
    {
      "id": 1,
      "name": `Beautiful & luxurious apartment at great location`,
      "city": {
        "name": `Amsterdam`
      },
      "isPremium": false,
      "stars": 4,
      "img": `./img/apartment-01.jpg`,
      "price": 120,
      "type": `Apartment`,
      "location": {
        "latitude": 52.3909553943508,
        "longitude": 4.85309666406198,
        "zoom": 8
      },
      "images": [
        `img/room.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "goods": [
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
      "isFavorite": true,
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
      "isPremium": true,
      "city": {
        "name": `Paris`
      },
      "stars": 5,
      "img": `./img/room.jpg`,
      "price": 80,
      "type": `Private room`,
      "location": {
        "latitude": 52.369553943508,
        "longitude": 4.85309666406198,
        "zoom": 8
      },
      "images": [
        `img/room.jpg`,
        `img/apartment-03.jpg`,
        `img/apartment-01.jpg`,
      ],
      "goods": [
        `Wi-Fi`,
        `Towels`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      "isFavorite": true,
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
      ],
    },
    {
      "id": 3,
      "name": `Canal View Prinsengracht`,
      "city": {
        "name": `Hamburg`
      },
      "isPremium": false,
      "stars": 5,
      "img": `./img/apartment-02.jpg`,
      "price": 132,
      "type": `Apartment`,
      "location": {
        "latitude": 52.3909553943508,
        "longitude": 4.929309666406198,
        "zoom": 8
      },
      "images": [
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "goods": [
        `Washing machine`,
        `Heating`,
        `Baby seat`,
        `Dishwasher`,
        `Fridge`,
      ],
      "isFavorite": false,
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
      ],
    },
    {
      "id": 4,
      "name": `Nice, cozy, warm big bed apartment`,
      "isPremium": true,
      "stars": 4,
      "city": {
        "name": `Dusseldorf`
      },
      "img": `./img/apartment-03.jpg`,
      "price": 180,
      "type": `Apartment`,
      "location": {
        "latitude": 52.3809553943508,
        "longitude": 4.939309666406198,
        "zoom": 8
      },
      "images": [
        `img/apartment-02.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "goods": [
        `Washing machine`,
        `Baby seat`,
        `Fridge`,
      ],
      "isFavorite": true,
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
      ],
    },
    {
      "id": 7,
      "name": `Nice, cozy, warm big bed apartment`,
      "isPremium": true,
      "stars": 4,
      "city": {
        "name": `Paris`
      },
      "img": `./img/apartment-03.jpg`,
      "price": 180,
      "type": `Apartment`,
      "location": {
        "latitude": 52.3809553943508,
        "longitude": 4.939309666406198,
        "zoom": 8
      },
      "images": [
        `img/apartment-02.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      "goods": [
        `Washing machine`,
        `Baby seat`,
        `Fridge`,
      ],
      "isFavorite": true,
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
      ],
    },
  ]
};
