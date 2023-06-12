import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

// function getErrorMessage(error: unknown) {
//     if (error instanceof Error) return error.message
//     return String(error)
// }

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetch()) //диспатчим actionCreator 
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchSuccess(response.data))
//     }
//     catch (e) {
//         dispatch(userSlice.actions.usersFetchError(getErrorMessage(e)))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)