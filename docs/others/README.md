---
title: ECMAScript 6 笔记
sidebar: auto
sidebarDepth: 2
---

# ECMAScript 6笔记

## 一 、let 和 const 命令
### 1.let命令
- 有块级作用域，不存在变量提升
- (暂时性死区)使用let声明变量，之前任何操作都会报错(ReferenceError)
- 相同作用域禁止声明相同变量
- 块级作用域只能在使用大括号的情况下才存在
- 块级作用域避免使用函数声明语句，要用最好改为函数表达式
何为函数声明语句？
``` js
// 函数声明语句
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```
### 2.const命令
- 常量不能重新赋值
- 常量声明后必须赋值

## 二、变量解构赋值
### 1.数组的解构赋值
- 数组解构辅助
``` js
//成功的解构
let [a, b, c] = [1, 2, 3];
a // 1
b // 2
c // 3

//失败的解构
let [foo] = [];
let [bar, foo] = [1];
//都为undefind

//不完全解构
let [x, y] = [1, 2, 3];
x // 1
y // 3

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

// 左右数据结构不同也无法解构
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
//因为等号右边的值，要么转为对象以后不具备 Iterator //接口（前五个表达式），要么本身就不具备 Iterator(遍历器) //接口（最后一个表达式）。
let [x,y,z] = new Set(['a','b','c']);

//实际上具有Iterator 接口的数据解构都可以使用数组解构赋值
```
- 解构赋值允许指定默认值，但是ES6内部使用的事全等(===)，被赋值位置的数组成员必须全等为undefind ，默认值才会生效
``` js
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
```
- 默认值为表达式是惰性求值，只有使用才会求值
``` js
function f() {
  console.log('aaa');
}

let [x = f()] = [1];
x //1 
let [y  = f()] = [];
y // undefined
```
- 默认值可以引用解构赋值的其他变量，但该变量必须已经声明

### 1.对象的解构赋值
- 与数组不同，元素位置不用对应
- 被赋值的变量必须与后面的对象的key 值相同
``` js 
let {foo, bar } = { foo : 'qqq', bar: 'bbb' }
//没有对应的key 值 可以写成
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
```
- foo 是模式，baz才是变量，变量会被赋值，而模式不会


