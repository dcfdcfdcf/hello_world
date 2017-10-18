
'use strict';

// 类必须首字母大写，定义方式有声明和表达式，不存在类提升

//主要是要搞懂 class extends super

//方法和方法之间，不需要逗号分隔
class Animal{
    //放在constructor里面的是自己的，放在外面的是可以共享的
    //实例这个类的时候，会先调取constructor，当然，如果你不写，会自动生成
    constructor(x,y){
        this.type = 'animal';
        this.x = x;
        this.y = y;
    }
    say(who){
        console.log(`${who} say  ${this.type}`);
    }
    toString(){
        console.log(`${this.x + this.y}`);
    }
}
// let animal = new Animal(1,2);
// animal.toString();
// animal.say('randy')
//


//类表达式，

let Print = class{
    //可赋初始值
    constructor(x = 1,y = 2){
        this.x = x;
        this.y = y;
    }
    toString(){
        console.log(`${this.x + this.y}`);
    }
}
// let print = new Print();
// print.toString();

//支持自执行

let show = new class {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        console.log(`${this.x + this.y}`);
    }
}(1,2);

// show.toString();


//class后面的 s  代表当前类
let Show = class s{
    constructor(x,y){
        s.x = x;
        s.y = y;
    }
    toString(){
        console.log(`${s.x + s.y}`);
    }
}
let sshow = new Show(1,2);
sshow.toString()



