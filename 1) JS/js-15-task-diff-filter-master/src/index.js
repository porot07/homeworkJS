// Task: Filter Set
// See README

export default (words, stopWords) => new Set(Array.from(words).filter((word) => !stopWords.has(word)));
