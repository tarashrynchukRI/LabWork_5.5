// lab_5.5
// Гринчук Тарас
// Лабораторна робота № 5.5
// Рекурсивні функції
// Варіант №4

let d = 0;
let max_d = 0;

function A(m, n) {
    d++;
    if (d > max_d) {
        max_d = d;
    }
    let result;
    if (m === 0) {
        result = n + 1;
    } else if (n === 0) {
        result = A(m - 1, 1);
    } else {
        result = A(m - 1, A(m, n - 1));
    }
    d--;
    return result;
}

const m = Number(prompt("m = "));
const n = Number(prompt("n = "));
console.log("Значення функції Аккермана:", A(m, n));
console.log("Максимальна глибина рекурсії:", max_d);


// module.exports = A;
