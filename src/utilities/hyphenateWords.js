function hyphenateWords(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/ig , "-")
}

export default hyphenateWords
