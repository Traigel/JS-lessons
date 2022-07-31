function a (num) {
    if(num === 0) return  0
    if(num === 1) return function (num) {return num}
    let arr = []
    function helper (...args) {
        arr = [...arr, ...args]
        if(arr.length >= num) {
            arr.length = num
            return arr.reduce((acc,el)=>acc+el)
        } else {
            return helper
        }
    }
    return helper
}

console.log(a(3)(1)(2)(3))