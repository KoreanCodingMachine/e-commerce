// reduce
// 배열.reduce((누적값,현재값,인덱스,요소)=>{ return 결과}, 초기값)

const oneTwoThree = [8,20,30]

let result = oneTwoThree.reduce((acc,cur,i)=>{
    console.log(acc,cur,i)
    return acc + cur
},0)

let avg = oneTwoThree.reduce((acc,cur,i,{length})=>{
    if (i === length-1){
        return (acc + cur) / length
    } else {
        return acc + cur
    }
},0)

let max = oneTwoThree.reduce((acc,cur,i)=>{
    return acc > cur ? acc : cur
},0)

const fruits = ['banana','apple','orange','orange','apple']

const value = fruits.reduce((acc,cur,idx)=>{
  acc[cur] = (acc[cur] || 0) + 1
    // 객체의 value 값이 0 혹은 falsy값 일때 0을 할당한다. + 1
    // acc[cur]은 객체 acc에서 key가 cur인 프로퍼티의 value를 가져옴
  return acc
},{})

console.log(value)

// js 의 falsy 값 (false 로 평가되는 값)
// undefined , null , 0 , false , NaN , 빈 문자열

// OR('||')의 동작방식
// 왼쪽 피연산자가 'falsy'일 경우 , 오른쪽 피 연산자를 반환한다.
// 왼쪽 피연산자가 'truthy'일 경우 , 왼쪽 피 연산자를 반환한다.

// undefined || 0 -> 0
// 'hi' || 0 -> 'hi'


const obj = {
    name:'john',
    age:30
}

console.log(obj.name) // 'john'
console.log(obj['name']) // 'john'

obj.age = 31

console.log(obj) // { name: 'john', age: 31 }


const rol = ['leesin','vex','saion','leesin','vex']

const data = rol.reduce((acc,cur,idx)=>{
    acc[cur] = (acc[cur] || 0) + 1
    return acc
},{})

console.log(data)