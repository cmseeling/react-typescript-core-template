import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
//import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducers } from './store';
export default function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;
    //const createStoreWithMiddleware = compose(
    //    applyMiddleware(thunk, routerMiddleware(history)),
    //    devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
    //)(createStore);
    var createStoreWithMiddleware = compose(applyMiddleware(routerMiddleware(history)), devToolsExtension ? devToolsExtension() : function (next) { return next; })(createStore);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(reducers);
    /*
     * inital any casting suggested as fix from https://stackoverflow.com/questions/46266536/resolve-cannot-invoke-an-expression-whose-type-lacks-a-call-signature-typescri?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
     */
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    /*
     * 'as any' suggested as temp fix from https://github.com/reduxjs/redux/issues/2709
     */
    return combineReducers(Object.assign({}, allReducers, { routing: routerReducer }));
}
//# sourceMappingURL=configureStore.js.map