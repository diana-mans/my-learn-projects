import Counter from './counter.js';

const cnt = new Counter(10);

console.log(cnt.getCounter()); //10

cnt.increment(); //11
cnt.increment(); //12

console.log(cnt.getCounter()); //12