// ========================
//         Solution
// ========================

// Complete the vowelsAndConsonants function.
// Print your output using 'console.log()'.

function vowelsAndConsonants(s) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var consonants = "";

  for (let index = 0; index < s.length; index++) {
    if (vowels.indexOf(s[index]) !== -1) {
      console.log(s[index]);
    } else {
      consonants += s[index] + '\n';
    }
  }
  console.log(consonants);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
