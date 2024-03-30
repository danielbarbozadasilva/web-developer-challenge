import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'message',
  initialState: {
    loading: false,
    all: []
  },
  reducers: {
    addMessage(state, { payload }) {
      state.all.push(payload);
    },
    removeMessage(state, { payload }) {
      state.all = state.all.filter((item) => item._id !== payload);
    },
    listAllMessages(state) {}
  }
})

export const { addMessage, removeMessage, listAllMessages } = slice.actions
export default slice.reducer