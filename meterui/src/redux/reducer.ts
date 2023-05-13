import { PayloadAction } from '@reduxjs/toolkit';
import { initialStateAStoreType,initialStoreType} from './types';



export const Reducer = (state: initialStateAStoreType, action: PayloadAction<initialStoreType>) => {
  state.initialStore = {...state.initialStore,...action.payload};
  console.log('',state.initialStore)
};