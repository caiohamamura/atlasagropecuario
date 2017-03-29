import * as initialState from './initialState'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

class ActionHandler {
  constructor() {
    this.state = null;
    this.handlers = {

      'REC_DATA': ({ data }) =>
        ({
          loading: false,
          [this.state.transition === false || (data.geo && data.geo.length > 0) ? 'data' : 'tempdata']: data,
          isError: state.transition ? state.isError : typeof (data) === 'string',
        }),

      'REQ_DATA': (action) =>
        ({
          loading: true,
          tempdata: '',
        }),

      'TRANS_END': () =>
        ({
          transition: false,
          data: state.tempdata ? state.tempdata : state.data,
          isError: (state.tempdata ? state.tempdata : state.data) && typeof (state.tempdata ? state.tempdata : state.data) === 'string',
        }),

      'DOWNLOAD_LAYER': ({ layer }) =>
        ({
          download: {
            layer: layer,
            show: true,
          }
        }),

      'HIDE_DOWNLOAD': () =>
        ({
          download: { show: false },
          user: { ...this.state.user, textfield: "" }
        }),

      'HIDE_LEGEND': () =>
        ({
          legend: { show: false }
        }),

      'SHOW_LEGEND': () =>
        ({
          legend: { show: true }
        }),

      'SHOW_FEEDBACK': () =>
        ({
          feedback: { show: true },
        }),

      'HIDE_FEEDBACK': () => {
        return {
          feedback: { show: false },
          user: { ...this.state.user, textfield: "", assunto : "cm" }
        }
      },

      'LAYERS_SELECTOR_TOGGLE': () => {
        console.log('toggle');
        return {
          layerSelector: { show: !this.state.layerSelector.show }
        }
      },

      'OPEN_METADATA': ({ layer }) =>
        ({
          metadata: {
            layer: layer,
            show: true,
          }
        }),

      'HIDE_METADATA': () =>
        ({
          metadata: { show: false }
        }),


        'SET_INFO_WINDOW': ({value}) => {
          return {
            infoWindow: value
          }
        },

      'UPDATE_FORM': ({ what, value }) => {
        var newState = {};
        newState[what] = value;
        return {
          user: { ...this.state.user, ...newState }
        }
      },

      'RECEIVE_USER': ({ user }) => ({
        user: { ...this.state.user, ...user }
      }),

      'HIDE_WELCOME': () =>
        ({
          welcome: { show: false }
        }),

        'RECEIVE_TRANSLATION': ( { data } ) => (
          {
            translation: data,
          }
        )

    };
  }

  modifyState(state, modifyState) {
    return Object.assign({},
      state,
      modifyState
    )
  }

  getNewState(state, action) {
    var modifyStateObject = this.handlers[action.type](action);
    return this.modifyState(state, modifyStateObject);
  }
}


const actionHandler = new ActionHandler();

// Reducer with handlers mapping
const reducers = function (state = {}, action) {
  actionHandler.state = state;
  return actionHandler.handlers.hasOwnProperty(action.type)
    ? actionHandler.getNewState(state, action)
    : state
}

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const store = createStoreWithMiddleware(reducers, initialState.state);


store.dispatch(initialState.initialDispatch())