const partialApply = (fn, arg) => (b, c) => fn(arg, b, c);

export default partialApply;
