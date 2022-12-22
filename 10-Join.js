const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output "Fire,Air,Water"

console.log(elements.join(''));
// expected output "FireAirWater"

console.log(elements.join('-'));
// expected output "Fire-Air-Water"

const word = 'luis'

const palindrome = (word) => {
    // Lo que hace dividir, voltear y luego unirlo con el join...
    return word.split('').reverse().join('').toLocaleLowerCase()

};

console.log(palindrome(word))

export function parseToURL(title) {
    // Tu código aquí 👈
    return title.split(' ').join('-').toLocaleLowerCase()
}
