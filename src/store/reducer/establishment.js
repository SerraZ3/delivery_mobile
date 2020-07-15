const INITIAL_STATE = {
  name: '',
  description: '',
  address: [],
  typeEstablishment: {},
  images: [],
};

function establishment(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ESTABLISHMENT':
      return {...action.data};

    default:
      return state;
  }
}

export default establishment;
