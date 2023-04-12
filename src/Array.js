
// pop
// 배열의 뒷 부분의 값을 삭제
// 삭제된 배열의 요소를 리턴

const arr1 = [1,2,3,4,5]

const pop_arr = arr1.pop()

console.log('pop_arr',pop_arr) // 5
console.log('arr1',arr1) // [1,2,3,4]

// push
// 배열 뒷부분에 값을 삽입
// 추가된 배열의 요소를 리턴

const arr2 = [1,2,3,4,5]
const push_arr = arr2.push(6)

console.log('push_arr',push_arr) // 6
console.log('arr2',arr2) // [1,2,3,4,5,6]

// unshift
// 배열 앞 부분에 값을 삽입
// 새로운 배열의 길이를 리턴함

const arr3 = [1,2,3,4,5]
const unshift_arr = arr3.unshift(0)

console.log('unshift_arr',unshift_arr) // 6
console.log(arr3) // [0,1,2,3,4,5]

// shift
// 배열 앞부분의 값을 삭제
// 삭제된 배열의 원소를 리턴

const arr4 = [1,2,3,4,5]
const shift_arr = arr4.shift()

console.log('shift_arr',shift_arr) // 1
console.log(arr4) // [2,3,4,5]

// splice
// 배열의 특정 위치에 요소를 추가하거나 삭제
// splice(index,제거할 요소 개수,배열에 추가될 요소)
// 원본 배열을 훼손함

const arr5 = [1,2,3,4,5]
const splice_arr = arr5.splice(2,3)

console.log('splice_arr',splice_arr) // [3,4,5]
console.log(arr5) // [1,2]

// slice
// slice(startIndex,endIndex)
// 배열의 startIndex 부터 endIndex까지 (endIndex는 미포함)에
// 대한 shallow copy를 새로운 배열 객체로 반환

const arr6 = [1,2,3,4,5]
const slice_arr1 = arr6.slice()
const slice_arr2 = arr6.slice(1,4)

console.log('slice_arr1',slice_arr1) // [1,2,3,4,5]
console.log('slice_arr2',slice_arr2) // [2,3,4]
console.log(arr6) // [1,2,3,4,5]

// concat 
// 다수의 배열을 합치고 병합된 배열의 사본을 반환

const arr7 = [1,2,3]
const arr8 = [4,5,6]
const concat_arr = arr8.concat(arr7)

console.log(concat_arr) // [4,5,6,1,2,3] -> 사본임

// every
// 배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지 테스트

const arr9 = [1,2,3,4,5,6,7,8,9,10]
const isEven = (value) => {
    return value % 2 === 0
}

const isEvenTrue = arr9.every(isEven)

console.log(isEvenTrue) // false

// some
// 지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복
// 하나라도 true이면 true를 return

const arr10 = [1,2,3,4,5,6,7,8,9,10]

const isOdd = (value) => {
    return value % 2 === 1
}

const isOddTrue = arr10.some(isOdd)
console.log(isOddTrue) // true (하나라도 true이면 true)

// forEach
// 배열의 각 원소별로 지정된 함수를 실행한다.
// forEach 의 return값은 void임 (undefined)

const arr11 = [1,2,3,4,5]

const foreach_arr = arr11.forEach((value)=>{
    console.log(value) // 1,2,3,4,5
})

console.log(foreach_arr) // undefined

// map
// 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된
// 새로운 배열 반환

const arr12 = [1,2,3,4,5,6,7,8,9,10]

const map_arr = arr12.map((value)=>{
    return value % 2 === 1
})

console.log(map_arr) // [t,f,t,f,t,f,t,f,t,f]

// filter
// 지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된
// 별도의 배열을 반환한다.

const arr13 = [1,2,3,4,5,6,7,8,9,10]
const filter_arr = arr13.filter((value)=>{
    return value % 2 === 1
})

console.log(filter_arr) // [1,3,5,7,9]

// reduce
// 누산기 및 배열의 각 값(좌에서 우로)에 대해 (누산된)
// 한 값으로 줄도록 함수를 적용

const arr14 = [1,2,3,4,5,6,7,8,9,10]
const value = arr14.reduce((prev,cur,index)=>{
    return prev + cur
})

console.log(value) // 55

// reverse
// 배열의 원소 순서를 거꾸로 바꾼다.

const arr15 = [1,2,3,4,5]
const reverse_arr = arr15.reverse()

console.log(reverse_arr) // [5,4,3,2,1]
console.log(arr15) // [5,4,3,2,1]

// sort
// 배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬한다.
// 모든 원소를 문자열로 취급해 사전적으로 정렬

const arr16 = [13,12,11,10,5,3,2,1]
const sort_arr = arr16.sort()

console.log(arr16) // [1,10,11,12,13,2,3,5]
console.log(sort_arr) // [1,10,11,12,13,2,3,5]

const arr17 = [13,12,11,10,5,3,2,1]
arr17.sort((a,b)=>{
    return a-b
})

console.log(arr17) // [1,2,3,5,10,11,12,13]

const arr18 = [13,12,11,10,5,3,2,1]

arr18.sort((a,b)=>{
    return b-a
})

console.log(arr18) // [13,12,11,10,5,3,2,1]

// toString
// 배열을 문자열로 바꾸어 변환한다.

const arr19 = [1,2,3,4,5]
const str = arr19.toString()
console.log(str) // 1,2,3,4,5
console.log(arr19) // [1,2,3,4,5]

// valueOf
// 원본을 훼손하지 않는 배열을 반환

const arr20 = [1,2,3,4,5]
console.log(arr20.valueOf()) // [ 1, 2, 3, 4, 5 ]

// join
// 배열 원소 전부를 하나의 문자열로 합친다.

const arr21 = [1,2,3,4,5]
console.log(arr21.join()) // 1,2,3,4,5
console.log(arr21.join('-')) // 1-2-3-4-5

// at
// 매개변수로 정수값 , 배열에서 매개변수에 해당하는 인덱스의 항목을 반환

const arr22 = [1,2,3,4,5]
console.log(arr22.at(0)) // 1
console.log(arr22.at(3)) // 4
console.log(arr2.at(-1)) // 6


// find
// 콜백함수의 결과값이 만족하는 첫번째 요소를 반환한다.

const arr23 = [1,2,3,4,5]
const find_arr = arr23.find((value)=>{
  return  value > 3
})
console.log(find_arr) // 4

// findIndex 
// find와 비슷하지만 차이점은 find 메서드는 첫번째 원소를 리턴
// findIndex 는 첫번째 인덱스를 리턴함

const arr = [1,2,3,4,5]
const findIndex_arr = arr.findIndex((val)=>{
    return val > 3
})
console.log('s',findIndex_arr) // 3


// includes
// 배열이 항목 중 특정 값을 포함하고 있는지 아닌지 여부를
// true , false 로 반환한다.
// includes(searchElement,fromIndex(검색을 시작할 인덱스))

const arr24 = [1,2,3,'cat','dog','bat']

const includes1 = arr24.includes('cat',4)
console.log(includes1) // false

const includes2 = arr24.includes('babo')
console.log(includes2) // false

const includes3 = arr24.includes(3)
console.log(includes3) // true

// indexOf,
// indexOf(searchElement,fromIndex(검색을 시작할 인덱스))
// 매개변수로 주어진 값이 배열에 포함되어있는 첫번째! 인덱스를 반환한다.
// 값이 없다면 -1을 return

const arr25 = [1,2,3,4,5]

console.log(arr25.indexOf(4,3)) // 3
console.log(arr25.indexOf(3)) // 2
console.log(arr25.indexOf(6)) // -1

// Array.isArray
// 매개변수 값이 array인지 판별하는 함수

const arr26 = [1,2,3,4,5]

console.log(Array.isArray(arr26)) // true
console.log(Array.isArray('[]')) // false
console.log(Array.isArray(new Array(5))) // true

// values
// 새로운 이터러블한 배열을 리턴한다.
// ES6 에서는 순회 가능한 자료구조를 ”이터러블"로 통일하여 for…of 문, 스프레드 문법,
// 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.
// 일단은 유사배열 객체라고 생각하자. (모든 유사배열 객체가 이터러블은 아님 )
// 유사 배열 객체 -> 배열처럼 index로 프로퍼티 값에 접근 / length 프로퍼티를 가짐 / for문 순회

const arr27 = [1,2,3,4,5]
const iterator = arr27.values()
console.log(iterator) // Object [Array Iterator] {}

for (const value of iterator) {
    console.log('iterator val',value); // iterator val 1 , ...
} 


// length
// 배열의 길이를 반환
const arr28 = [1,2,3,4,5]
const len = arr28.length
console.log(len) // 5