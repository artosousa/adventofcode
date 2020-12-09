let nums = window.document.getElementsByTagName('pre')[0];
nums = nums.innerText.split(/\r\n|\r|\n/g);
console.log(nums.lenf)
var counter = 0;
nums.forEach(pwd => {
    var a = pwd.match(/([0-9]*)-([0-9]*)\s(.):\s([a-zA-Z]*)/)
    if(a && a.length > 4) {
        var min = Number(a[1]) - 1 
        var max = Number(a[2]) - 1
        var letter = a[3]
        var password = a[4]
        var hasMin = password.substring(min, min+1) === letter
        var hasMax = password.substring(max, max+1) === letter
        if(hasMin !== hasMax) {
            console.log(password,'is valid')
            counter++;
        }
    } else {
        console.error(pwd, 'not a valid password and policy')
    }
});
console.log(counter, 'out of', nums.length, 'passwords are legit')