const myModule = require('./myModule')
console.log('hello world')
const myOtherModule  = require('./myOtherModule')
const anotherModuleFile = require('./anotherModuleFile')
function hello(name){
    console.log(`hello, ${name}`);
}
hello('diego')
hello('mari')

console.log(myModule.add(2,2));
console.log(myModule.subtract(5,4))
myOtherModule.welcomeToNode()
anotherModuleFile.hello()