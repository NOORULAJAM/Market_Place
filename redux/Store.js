
const { createStore } = require("@reduxjs/toolkit");
const { Reducer } = require("./Reducers");

export const myStore = createStore(Reducer)