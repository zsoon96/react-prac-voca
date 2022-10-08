import React from 'react';

function findUserPromise(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('waited 0.1 sec.');
            const user = {
                id: id,
                name: "User" + id,
                email: id + "@test.com"
            }
            resolve(user);
        }, 100)
    })
}
findUserPromise(1).then(function (user) {
    console.log("user: " , user);
    // waited 0.1 sec.
    // user: {id: 1, name: "User1", email: "1@test.com"}
})


function devide (numA, numB) {
    return new Promise((resolve, reject) => {
        if (numB === 0){
            reject(new Error('0으로 나눌 수 없습니다.'))
        } else {
            resolve( numA/numB)
        }
    })
}
devide(8,2).then((result) => {console.log('성공', result)})
    .then((error) => {console.log('실패', error)})
// 성공 4
// 실패 undefined

devide(8,0).then((result) => {console.log('성공', result)})
    .then((error) => {console.log('실패', error)})
// UncaughtError: 0으로 나눌 수 없습니다.

// 성공
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err))

// 실패
fetch()
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err))

// 메시더 체이징
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((result) => result.json()) // 응답 데이터
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err))

// 메서드 체이닝
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((result) => result.json())
    .then((post) => post.id)// userId 추출
    .then((userId) => "https://jsonplaceholder.typicode.com/users/" + userId ) // userId로 새로운 url 생성
    .then((url) => fetch(url)) // 생성한 url로 fetch 요청
    .then((res) => res.json()) // 응답 데이터
    .then((user) => console.log('user', user))
    .catch((err) => console.log('err', err))
// then()과 catch()의 인자로 넘긴 콜백함수는 일반객체든 Promise객체든 항상 리턴 타입이 Promise 객체가 됨!

const PromisePrac = () => {
    return (
        <div></div>
    )
}

export default PromisePrac;