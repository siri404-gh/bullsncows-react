let id = 0;
export const addWord = word => ({
  type: 'ADD_WORD',
  id: id++,
  word,
});

export const addAllWords = words => ({
  type: 'ADD_ALL_WORDS',
  words,
});

export const resetWords = _ => ({
  type: 'RESET_WORDS',
});


