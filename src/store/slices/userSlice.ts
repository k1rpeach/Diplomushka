import { createSlice } from "@reduxjs/toolkit";

interface iUserSliceState {
    user: IUser | null;
}

export interface IUser {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: string;
    city: string;
}

const initialState: iUserSliceState = {
    user: null,
};

export const userSlice = createSlice ({
    name: "UserSlice",
    initialState: initialState,
    reducers: {
        changeUser(state, action) {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer
export const { changeUser } = userSlice.actions