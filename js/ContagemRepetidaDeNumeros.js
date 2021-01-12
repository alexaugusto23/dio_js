//Código do desafio:
/**
 * AVISO!
 * Na saída proposta da DIO é exigido que a expressão 'vez(es)' seja impressa não importa a quantidade de repetições.
 * Nesta solução, é implementado a saída tanto em singular quanto no plural.
 */
const inputs = [ //para uso local
    '7',
    '8',
    '10',
    '8',
    '260',
    '4',
    '10',
    '10',
  ] //para uso local
  
  
  // const nCases = parseInt(gets()) //para uso na DIO
  const nCases = parseInt(inputs[0]) //para uso local
  let input = 0
  let numbers = []
  
  for (let i = 1; i <= nCases; i++) {
    // input = parseInt(gets()) //para uso na DIO
    input = parseInt(inputs[i]) //para uso local
  
    if ((input < 1 || input > 2000)) {
      //skip invalid entry
      continue;
    }
  
    numbers = [...numbers, input];
  }
  
  const distinctNumbers = Array.from(new Set(numbers))
    .sort((a, b) => a - b)
    .map(v => ([v, 0]))
  
  let countNumberMap = new Map(distinctNumbers)
  
  numbers.forEach(n => {
    countNumberMap.set(n, countNumberMap.get(n) + 1)
  })
  
  for (const [number, times] of countNumberMap) {
    console.log(`${number} aparece ${times} vez${times > 1 ? 'es' : ''}`) // saída com singular ou plural
    // console.log(`${number} aparece ${times} vez(es)`) //saída exigida na DIO
  }