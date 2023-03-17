const regex = /\b(Apple)+\b/g

const fruit = 'Apple, Banana, Kiwi, Apple, Organge, etc';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}