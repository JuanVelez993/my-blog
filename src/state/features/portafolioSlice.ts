import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 export interface Entry {
    id: string;
    name:string,
    url: string,
    description: string
}

interface AddEntry {
    id: string;
    name: string,
    url: string,
    description: string
}
export interface PortafolioState {
    value: Entry[];
}

const initialState: PortafolioState = {
    value: [{
        id: "first",
        name: "Portfolio1",
        url: "https://github.com/JuanVelez993/webDevelopment",
        description: "First portfolio",
    },
        {
            id: "second",
            name: "Portfolio2",
            url: "https://github.com/JuanVelez993/ChallengeDDD",
            description: "Second portfolio",
        },],
};


export const portafolioSlice = createSlice({
    name: "portafolio",
    initialState,
    reducers: {
       addEntry: (state, action:PayloadAction<AddEntry>) => {
            state.value.push(action.payload);
        }
        
}});

export const { addEntry } = portafolioSlice.actions;

export default portafolioSlice.reducer;