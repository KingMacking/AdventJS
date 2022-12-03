// 198 pts solution //
distributeGifts = (packOfGifts, reindeers) =>{
    return Math.floor((reindeers.join("").length *2) / packOfGifts.join("").length)
}
// 154 pts solution //
// function distributeGifts(packOfGifts, reindeers) {
//     const getWeight = (weightCarry) => {
//         return weightCarry.reduce((acc, e) => {
//             return acc + (e.length)
//         }, 0)
//     }
//     return Math.floor((getWeight(reindeers) * 2) / getWeight(packOfGifts))
// }