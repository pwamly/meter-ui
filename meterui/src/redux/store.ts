import { configureStore, createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'profile',
    initialState: {
            fullname: '',
            userId: '',
            language: '',
            location: '',
            title: '',
            mobile: '',
            email: '',
            editProfile: false
        
    },
    reducers: {
        editProfile: (state) => {
            state.editProfile = !state.editProfile;
            
        }

    }

});

const accountSlice = createSlice({
    name: 'account',
    initialState: {
            accountName: '',
            balance: '',
            dateCreated: '',
            location: '',
            editAccount: false
        
    },
    reducers: {
        editAccount: (state,action) => {
            state.accountName = action.payload;
            
        }

    }

});

export const { editProfile } = userSlice.actions;
export const { editAccount } = accountSlice.actions;


export const store = configureStore({
    reducer: { 
        profile: userSlice.reducer,
        account: accountSlice.reducer
     }
});