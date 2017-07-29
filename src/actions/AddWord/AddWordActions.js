let id = 0;
export const addWord = word => ({
  type: 'ADD_WORD',
  id: id++,
  word,
});

export const resetWords = () => ({
  type: 'RESET_WORDS'
});
