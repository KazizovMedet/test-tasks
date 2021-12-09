// const stonesFunc = (total, stones) => {
//     let res = 0
//     for (let i = 1; i < total; i++) {
//         if (stones[i] === stones[i - 1]) {
//             res++
//         }
//     }
//     return res
// }
// console.log(stonesFunc(7, 'GGRBGGB'))
//
//
// const example2 = (num) => {
//     let res = 0
//     for (let i = 1; i <= num; i++) {
//         i % 2 === 0 ? res += i : res -= i
//     }
//     return res
// }
// console.log(example2(5))
//
//
// const test = (count, numbers) => {
//     let result = []
//     for (let i = 0; i <= numbers.length - 1; i++) {
//         if (numbers[i] % 2) {
//             numbers[i] = numbers[i] - 1
//         }
//         result = [...result, numbers[i] / 2]
//     }
//     return result
// }
// console.log(test(2, [3, 5]))