import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('Добро пожаловать в игру!\nВведите Ваше имя!\n');
  console.log(`Приветствуем Вас, ${name}!`);
};

export const run = (questions) => {
  greeting();
  const iter = (quizes) => {
    if (quizes.length <= 0) {
      console.log('Поздравляем Вас, Вы выиграли эту игру!\n Не растраивайтесь на счёт игры в следующей версии Вас ожидает больше сюрпризов! :D');
      return;
    }
    const [head, ...tail] = quizes;
    const answer = readlineSync.question(head.question);
    if (answer !== head.answer) {
      console.log('Увы! Вы проиграли');
      return;
    }
    iter(tail);
  };

  iter(questions);
};

export default run;
