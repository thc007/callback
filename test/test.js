var _ = require("lodash")
// console.log(arguments)
// console.log(_.isArguments(arguments))
// var arr = [1,23,34,64,64]
// var arr2 = [1,23,34,64,64]
// function test(){
// }
// 
var obj = 1

var copyObj = _.cloneDeep(obj)
copyObj=2
console.log(obj)
console.log(copyObj)
// console.log(Object)
// var empty = 0
// var empty = null
// var empty = undefined
// var empty = ""
// empty = []
// empty = {}