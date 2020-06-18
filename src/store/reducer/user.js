const INITIAL_STATE = {
  auth: {
    token: null,
    refresh_token: null,
    type: 'bearer',
  },
  user: {
    email: null,
    name: null,
    cpf: null,
    date_birth: null,
    id: null,
    roles: [],
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, user: {...state.user, ...action.user}};
    case 'ADD_AUTH':
      return {...state, auth: {...state.auth, ...action.auth}};
    default:
      return state;
      break;
  }
}

export default user;
