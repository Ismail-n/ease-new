import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  someOtherProperty : "fan"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLogin: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
      state.value = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value = 0;
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLogin, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer