import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './reducers';
import storage from 'redux-persist/lib/storage';
import devToolsEnhancer from 'remote-redux-devtools';
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, devToolsEnhancer())
const persistor = persistStore(store)
export { store, persistor }