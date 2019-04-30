import fetch from "../services/backend.service";


// REMOVE_APP
export const removeApp = ({ id } = {}) => ({
  type: 'REMOVE_APP',
  id
});

export const startRemoveApp = ({ id }) => {
  return (dispatch) => {
    dispatch(removeApp({ id }));
  };
};

// SET_APPS
export const setApps = (apps) => ({
  type: 'SET_APPS',
  apps
})

export const startSetApps = () => {
  return (dispatch) => {
    return fetch('data.json', 2500)
      .then((response) => {
        return response.json()
      }).then(json => {
        let allapps = []
        allapps = json.apps
        console.log(allapps);
        dispatch(setApps(allapps));
        console.log(json);
        return json;
      })
      .catch((e) => {
        console.log("eror is coming...");
      })

  };
};

// EDIT_APP
export const editApp = (id, updates) => ({
  type: 'EDIT_APP',
  id,
  updates
});

export const startEditApp = (id, updates) => {
  return (dispatch) => {
    dispatch(editApp(id, updates));
  };
};