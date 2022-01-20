import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'surfboard',
  initialState: {
    id: 0,
    brand:'',
    size: '',
    available:'',
    image: '',
    info: ''
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setAvailable: (state, action) => {
      state.available = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    }
  }
});

export const {setId, setBrand, setSize, setAvailable, setImage, setInfo} = slice.actions;
export default slice.reducer;