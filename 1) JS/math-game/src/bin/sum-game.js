#!/usr/bin/env node
import { run } from '..';

let firstNum = Math.round(Math.random() * (10 - 1) + 1);
let secondNum = Math.round(Math.random() * (10 - 1) + 1);
const sum = [
  { question: `Сколько будет ${firstNum} + ${secondNum}\n`, answer: `${firstNum + secondNum}` },
  { question: `Сколько будет ${firstNum} + ${secondNum}\n`, answer: `${firstNum + secondNum}` },
  { question: `Сколько будет ${firstNum} + ${secondNum}\n`, answer: `${firstNum + secondNum}` },
];
run(sum);
