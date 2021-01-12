//Código do desafio:
const inputs = [
  '3',
  'abc',
  'dae',
  'abcde',
  '2',
  'abc',
  'def',
  '3',
  'dbc',
  'dae',
  'dbcde',
  '3',
  'abcd',
  'def',
  'abcd',
  '0'
]
let i = 0; //para uso local

let N;
const limit = Math.pow(10, 5);
let words, isBad;

while (true) {
  words = []
  // N = parseInt(gets()) //para uso na DIO
  N = parseInt(inputs[i]) //para uso local

  if (N === 0 || (N < 1 || N > limit)) break;

  for (let index = 0; index < N; index++) {
    // word = gets() //para uso na DIO
    word = inputs[++i] //para uso local

    if (!(/^[a-z]{1,100}$/g.test(word))) continue; //skip invalid word

    words = [...words, word]
  }

  isBad = words.some((currentWord, i, words) => {
    const pattern = new RegExp(`^(${currentWord}).+`)

    for (const word of words) {
      if (pattern.test(word)) return true
    }

    const same = words.reduce((total, w) => {
      total += w === currentWord ? 1 : 0
      return total
    }, 0)

    return same > 1;
  })

  console.log(isBad ? 'Conjunto Ruim' : 'Conjunto Bom');
  i++ //para uso local
}