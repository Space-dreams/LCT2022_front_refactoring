import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    profession: [],
    stacks: [],
    country: [],
    allIdeas: [],
    myIdeas: [],
    comments: []
};

export const setProfession = createAsyncThunk(
    'user/setProfession',
    async () => {
        const response = await fetch('/api/v1/profession/')
            .then((data) => data.json());
        return response;
    }
);

export const setStacks = createAsyncThunk(
    'user/setStacks',
    async () => {
        const response = await fetch('/api/v1/stacks/')
            .then((data) => data.json());
        return response;
    }
);

export const setCountry = createAsyncThunk(
    'user/setCountry',
    async () => {
        const response = await fetch('/api/v1/country/')
            .then((data) => data.json());
        return response;
    }
);

export const setComment = createAsyncThunk(
    'user/setComment',
    async (id) => {
        const response = await fetch(`/api/v1/comment/${id}/`)
            .then((data) => data.json());
        return response;
    }
);

export const setAllIdeas = createAsyncThunk(
    'user/setAllIdeas',
    async () => {
        const response = await fetch('/api/v1/all_ideas/')
            .then((data) => data.json());
        return response;
    }
);

export const setMyIdeas = createAsyncThunk(
    'user/setMyIdeas',
    async (id) => {
        const response = await fetch(`/api/v1/user_ideas/${id}/`)
            .then((data) => data.json());
        return response;
    }
);


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        newComment: (state, action) => {
            state.comments.push(action.payload);
        },
        newMyIdea: (state, action) => {
            state.myIdeas.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(setProfession.fulfilled, (state, action) => {
                state.profession = action.payload;
            })
            .addCase(setCountry.fulfilled, (state, action) => {
                state.country = action.payload;
            })
            .addCase(setComment.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addCase(setAllIdeas.fulfilled, (state, action) => {
                state.allIdeas = action.payload;
            })
            .addCase(setMyIdeas.fulfilled, (state, action) => {
                state.myIdeas = action.payload;
            })
            .addCase(setStacks.fulfilled, (state, action) => {
                state.stacks = action.payload;
            });
    },
});

export const { newComment, newMyIdea } = dataSlice.actions;

export default dataSlice.reducer
