function position(letter) {
  //   const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m', 'n','o','p','q','r','s','t','u','v','w','x','y','z']

  return `Position of alphabet: ${
    letter.charCodeAt(0) - "a".charCodeAt(0) + 1
  }`;
}

// console.log( position('c') ) // Position of alphabet: 3
// Explanation:

// letter.charCodeAt(0) gives the ASCII (character) code of the letter.
// Subtracting 'a'.charCodeAt(0) aligns the code to zero-based indexing (i.e., 'a' to 0, 'b' to 1, and so on).
// Adding 1 adjusts it to a one-based position in the alphabet.