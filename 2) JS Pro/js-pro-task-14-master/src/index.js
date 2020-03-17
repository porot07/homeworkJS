import StateMachine from 'javascript-state-machine';

const str = new StateMachine({
  init: 'before',
  transitions: [
    { name: 'enterWord', from: 'before', to: 'inside' },
    { name: 'beforeWord', from: ['after', 'inside'], to: 'before' },
    { name: 'afterWord', from: 'inside', to: 'after' },
  ],
});

export default (string) => {
  let firstWord = '';
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    const symbol = string[i];
    switch (str.state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          str.enterWord();
          firstWord += symbol;
        }
        break;
      case 'inside':
        if (symbol === ' ') {
          str.afterWord();
          result = [...result, firstWord];
        } else if (symbol === '\n') {
          str.beforeWord();
          result = [...result, firstWord];
          firstWord = '';
        } else {
          firstWord += symbol;
        }
        break;
      case 'after':
        if (symbol === '\n') {
          str.beforeWord();
          firstWord = '';
        }
        break;
      default:
    }
  }
  return result;
};
