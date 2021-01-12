//Código do desafio:
const inputs = [ //para uso local
    'aeiou',
    'o rato roeu a roupa do rei de roma',
    '4310',
    't3st3 p4r4 c0d1f1c4r',
    'kwy',
    'the quick brown fox jumps over the lazy dog',
    ''
  ] //para uso local
  let i = 0 // para uso local
  
  let alienVowels = ''
  let sentence = ''
  const notInAlphabet = /[^A-Za-z0-9 ]/g
  
  while (true) {
    // alienVowels = gets() //para uso na DIO
    alienVowels = inputs[i++] //para uso local
  
    if (!alienVowels || alienVowels === '') break;
  
    alienVowels = alienVowels.replace(/ /g, '')
  
    // sentence = gets() //para uso na DIO
    sentence = inputs[i++] //para uso local
  
    if (notInAlphabet.test(alienVowels) || notInAlphabet.test(sentence)) continue;
  
    console.log(count(alienVowels, sentence))
  }
  
  function count(substr, str) {
    return substr.split('').reduce((acc, character) => {
      acc += (str || '').match(new RegExp(`${character}`, 'g'))?.length || 0
      return acc
    }, 0)
  }