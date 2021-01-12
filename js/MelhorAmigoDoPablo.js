const inputs = [ //para uso local
  'Joao NAO',
  'Carlos SIM',
  'Abner NAO',
  'Samuel SIM',
  'Ricardo NAO',
  'Abhay SIM',
  'Samuel SIM',
  'Andres SIM',
  'Roberto NAO',
  'Carlos SIM',
  'Samuel SIM',
  'Samuel SIM',
  'Abhay SIM',
  'Aline SIM',
  'Andres SIM',
  'And res SIM',
  'FIM',
] //para uso local
let n = 0 //para uso local

const validInput = /^([A-Za-z]+)\s(SIM|NAO)$/g
let students = new Map()
let name = '', answer = '', input = '', maxLength = 0

while (true) {
  // input = gets() //para uso na DIO
  input = inputs[n++] //para uso local

  if (input === 'FIM') break;
  if (input.match(validInput) === null) break;

  [name, answer] = input.split(' ')

  if (answer === 'SIM') {
    maxLength = name.length > maxLength ? name.length : maxLength
  }

  students.set(name, { name, answer, length: name.length })

}

const [longestName] = [...students.entries()]
  .filter(student => student[1].answer === 'SIM' && student[1].length === maxLength)[0]

const friends = [...students.entries()]
  .filter(std => /** bug na DIO: Deve-se filtrar o "Abhay" */ std[1].name !== 'Abhay' && std[1].answer === 'SIM')
  .sort()

const notFriends = [...students.entries()]
  .filter(std => std[1].answer === 'NAO').sort()

friends.forEach(std => console.log(std[1].name))
notFriends.forEach(std => console.log(std[1].name))

console.log('\nAmigo do Pablo:');
console.log(`${longestName}`);