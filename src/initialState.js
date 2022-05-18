export const initialState = [];

const iterable = [
  'hello',
  'hi',
  'hey',
  'hiya',
  'salut',
  'hola',
  'ola',
  'hallo',
  'ciao',
];

for (let i = 0; i < 2000; i++) {
  iterable.forEach(item => initialState.push(item));
}
