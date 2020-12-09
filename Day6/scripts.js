const groups = document.getElementsByTagName('pre')[0].innerText.split('\n\n').filter(x => x);

let total = 0;
let part2 = 0;
console.log(part2);
for (group of groups) {
    const uniques = new Set([...group.replace(/\n/g, '')]);
    total += uniques.size;

    part2 += [...uniques].filter(char => group.split('\n').filter(x => x).every(form => form.includes(char))).length;
}

console.log(total);
console.log(part2);