var nums = window.document.getElementsByTagName("pre")[0]
nums = nums.innerText.split('\n')

var columnCounter = 0
var treeCounter = 0
nums.forEach((row, index) => {
    var fullRow = row.repeat(40)
    if(fullRow.substring(columnCounter,columnCounter+1) === '#') {
        console.error('tree hit row:', index, 'column:', columnCounter)
        treeCounter++
    }
    columnCounter += 3
})
console.warn('total trees', treeCounter)
