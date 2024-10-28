function position(letter) {
  //   const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m', 'n','o','p','q','r','s','t','u','v','w','x','y','z']

  return `Position of alphabet: ${
    letter.charCodeAt(0) - "a".charCodeAt(0) + 1
  }`;
}

// console.log( position('c') ) // Position of alphabet: 3
