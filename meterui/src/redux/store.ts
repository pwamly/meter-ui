import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// ============ types =============

interface ProfileType{
    fullname: string,
    userId: string,
    language: string,
    location: string,
    title: string,
    mobile: string,
    email: string,
    editProfile: boolean
}

interface accountType {
    accountName: string,
    balance: string,
    dateCreated: string,
    location: string,
    editAccount: boolean
}

// ============ store =============

const ProfileValue = {
    fullname: '',
    userId: '',
    language: '',
    location: '',
    title: '',
    mobile: '',
    email: '',
    editProfile: false
} as ProfileType

const accountValue = {
    accountName: '',
    balance: '',
    dateCreated: '',
    location: '',
    editAccount: false
} as accountType

interface initialStateProfileType{
    ProfileValue:ProfileType
}

interface initialStateAccountType{
    accountValue:accountType
}

const userSlice = createSlice({
    name: 'profile',
    initialState: { ProfileValue },
    reducers: {
        editProfile: (state:initialStateProfileType) => {
            state.ProfileValue.editProfile = !state.ProfileValue.editProfile;

        }

    }

});

const accountSlice = createSlice({
    name: 'account',
    initialState: { accountValue },
    reducers: {
        editAccount: (state:initialStateAccountType, action:PayloadAction<string>) => {
            state.accountValue.accountName = action.payload;

        }

    }

});

// ============ reducers =============

export const { editProfile } = userSlice.actions;
export const { editAccount } = accountSlice.actions;


// ============ stores =============

export const store = configureStore({
    reducer: {
        profile: userSlice.reducer,
        account: accountSlice.reducer
    }
});