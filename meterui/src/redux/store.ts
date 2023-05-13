import { createSlice,configureStore } from '@reduxjs/toolkit';
import { initialStateAStoreType,initialStoreType} from './types';
import { Reducer } from './reducer';

const initialStore = {
  profile: {},
  balance: '',
  dateCreated: '',
  location: '',
  editAccount: false
} as initialStoreType;

const storeSlice = createSlice({
  name: 'store',
  initialState: { initialStore },
  reducers: {
    reducerf: Reducer
  }
});


export const { reducerf } = storeSlice.actions;

export const store = configureStore({
    reducer: {
        store: storeSlice.reducer,
    }
});