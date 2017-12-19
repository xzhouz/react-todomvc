const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'ALL':
      return 'ALL'
    case 'ACTIVE':
      return 'ACTIVE'
    case 'COMPLETED':
      return 'COMPLETED'
    default:
      return state
  }
}

export default filter

