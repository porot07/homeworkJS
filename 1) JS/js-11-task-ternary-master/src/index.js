// Task: Ternary
// See README

export const If = (fn) => (a) => (b) => fn(a)(b);
export const True = (a) => () => a;
export const False = () => (b) => b;
