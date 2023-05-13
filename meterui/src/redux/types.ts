// types.ts
interface ProfileType{
    fullname?: string,
    userId?: string,
    language?: string,
    location?: string,
    title?: string,
    mobile?: string,
    email?: string,
    editProfile?: boolean
}

interface initialStoreType {
    profile?: ProfileType |{},
    balance?: string,
    dateCreated?: string,
    location?: string,
    editAccount?: boolean
}

interface initialStateProfileType{
    ProfileValue:ProfileType |{}
}

interface initialStateAStoreType{
    initialStore:initialStoreType | {}
}

export type { initialStateAStoreType, initialStoreType};
