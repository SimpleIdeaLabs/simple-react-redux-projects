export const moviesList = () => {
    return {
      type: 'MOVIES_LIST',
      payload: [
        {id:2, title: 'Empire Strikes Back'}
      ]
    }
}

export const directorsList = () => {
  return {
    type: 'DIR_LIST',
    payload: [
      { id: 2, name: 'George Lucas' }
    ]
  }
}