import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const defaultState = {
  suiteInfo: {
    testSuiteName: window.tests.testSuite,
    idConfig: window.tests.id
  },
  tests: {
    all: window.tests.tests,
    filtered: window.tests.tests,
    filterStatus: 'all'
  },
  scrubber: {
    visible: false,
    mode: 'scrub',
    test: {}
  },
  layoutSettings: {
    textInfo: false,
    refImage: true,
    testImage: true,
    diffImage: true
  }
};

const store = createStore(
  rootReducer,
  defaultState,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
