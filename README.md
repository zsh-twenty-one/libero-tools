# 使用方法

```node
npm install libero-tools --save
or
yarn add libero-tools --save
```

## 1. equals
> 比较两个值是否相等
```js
    import { equals } from 'libero-tools';

    const a = {a:1}, b = {a:1};
    equals(a,b); // true
```

## 2. onClickSide
> 点击`container`之外的地方返回false,点击包括`container`的地方返回`true`
```js
    import { onClickSide } from 'libero-tools';

    const container = document.getElementById('container');
    window.addEventListener("click", (e) => {
      onClickSide(container,e.target, (bo) => {
        console.log(bo); // true or false
      });
    });
```

## 3. randomColor
> 点返回一个随机生成的16进制颜色，格式为 `#5f5f5f`
```jsx
    import { randomColor } from 'libero-tools';

    <h1 style={{color:randomColor()}}>TEST</h1>
```

## 4. type
> 传入参数返回数据类型 

> number | object | array | function | date | regexp | boolean | symbol | null | undefined
```jsx
    import { type } from 'libero-tools';

    type({a:1}); // object
    type(null); // null
    ...
```

## 5. splitAryBySize
> 将数组按照传入的大小进行数组分割 ,不改变原数组

```jsx
    import { splitAryBySize } from 'libero-tools';

const a = [2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(splitAryBySize(a, 4), a);
// [ [ 2, 3, 4, 5 ], [ 6, 7, 8, 9 ], [ 0 ] ]
```

## 6. deepClone
> 传入参数返回数据类型 

```jsx
    import { deepClone } from 'libero-tools';


    const ary = [1, 2, { a: {c:1} }]

    // use Object.assign
     const aryclone = Object.assign([],ary)
    console.log(ary[2].a === aryclone[2].a); // true

    // use deepClone 
    const aryclone = deepClone(ary)
    console.log(ary[2].a === aryclone[2].a);// false
    ...
```