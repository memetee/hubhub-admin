const reducers = {
  addNumber(state, action) {
    state.count += action.payload
  }
}

export default reducers;