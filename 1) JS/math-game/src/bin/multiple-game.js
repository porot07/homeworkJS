#!/usr/bin/env node
import { run } from '..';

let firstNum;
let secondNum;
const mulpiple = [
  { question: `Сколько будет ${firstNum = Math.round(Math.random() * (10 - 1) + 1)} * ${secondNum = Math.round(Math.random() * (10 - 1) + 1)}\n`, answer: `${firstNum * secondNum}` },
  { question: `Сколько будет ${firstNum = Math.round(Math.random() * (10 - 1) + 1)} * ${secondNum = Math.round(Math.random() * (10 - 1) + 1)}\n`, answer: `${firstNum * secondNum}` },
  { question: `Сколько будет ${firstNum = Math.round(Math.random() * (10 - 1) + 1)} * ${secondNum = Math.round(Math.random() * (10 - 1) + 1)}\n`, answer: `${firstNum * secondNum}` },
];
run(mulpiple);
