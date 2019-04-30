// Expenses Reducer

const appsReducer = [];

export default (state = appsReducer, action) => {

  switch (action.type) {
    case 'REMOVE_APP':
      return state.filter(({ appId }) => appId !== action.id);
    case 'EDIT_APP':
      return state.map((app) => {
        if (app.appId === action.id) {
          return {
            ...app,
            ...action.updates,
          }
        } else {
          return app;
        };
      });

    case 'SET_APPS':
      return action.apps;
    default:
      return state;
  }
};
