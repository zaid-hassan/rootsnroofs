import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentProject: null,
}

export const isCurrentProject = createSlice({
    name: 'isCurrentProject',
    initialState,
    reducers: {
        setCurrentProject: (state, action) => {
            state.currentProject = action.payload;
        },
    }
})

export const {setCurrentProject} = isCurrentProject.actions;
export default isCurrentProject.reducer;