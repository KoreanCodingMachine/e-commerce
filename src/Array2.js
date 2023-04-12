// map
// 반복문을 돌며 배열안의 요소들을 1대1로 짝지어 주는 것
// 즉 return 값으로 정의된 배열
// 기존 배열을 수정하지 않는 새로운 배열을 만들어 낸다.

// filter 는 return 값을 만족하는 원소로 정의된 배열

const oneTwoThree = [1,2,3]
let result = oneTwoThree.map((v)=>{
    console.log(v)
    return v
})

console.log(oneTwoThree)
console.log(result)
console.log(oneTwoThree === result) // false

result = oneTwoThree.map((v)=>{
    return v + 1
})

console.log(result) // [2,3,4]

result = oneTwoThree.map((v) => {
    if(v % 2 === 0){
        return '짝수'
    } else {
        return '홀수'
    }
})

console.log(result) // [ '홀수', '짝수', '홀수' ]



