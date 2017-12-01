export function updateName(player = '', newName= '', state = {}) {

  return Object.assign(
    {},
    state,
    {displayNames: {...state.displayNames, [player]: newName}}
  )

}
