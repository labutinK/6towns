export const CHANGING_TOWN = `CHANGING_TOWN`;
export const FILLING_OFFERS = `FILLING_OFFERS`;

export const ActionsCreator = {
  townChange: (town) => ({
    type: CHANGING_TOWN,
    payload: town
  }),
  fillOffers: () => ({
    type: FILLING_OFFERS
  }),
};
