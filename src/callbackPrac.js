import React from 'react';

// 1-1 일반적인 함수 (입력 - 파라미터 / 출력 - 리턴)
function findUser(id) {
    const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
    }
    return user;
}
const user = findUser(1);
console.log(user);
// user: {id: 1, name: "User1", email: "1@test.com"}


// 1-2 화살표 함수 버전
const findUserRe = (id) => {
    const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
    }
    return user;
}
console.log('화살표 함수', findUserRe(1))


// 2-1 자바스크립트 함수 (입력 - 파라미터, 콜백함수 / 출력 - 콜백함수의 실행결과)
function findUserAndCallback(id, cb) {
    const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
    }
    cb(user); // cb() 실행
}
findUserAndCallback(1, function (user) {
    console.log("user: ", user);
    // user: {id: 1, name: "User1", email: "1@test.com"}
})

// 2-2 화살표 함수 버전
const findUserAndCallbackRe = (id, cb) => {
    const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
    }
    // cb(user);
}
findUserAndCallbackRe(2, (user) => {
    console.log('화살표 함수', user)
})


// 3-1 비동기 함수 (에러)
function findUserCallbackTimeout(id) {
    let user;
    // 자바스크립트에서 대표적인 내장 비동기 함수
    // setTimeout(실행 작업 내용의 콜백 함수, 기다리는 밀리초 단위)
    setTimeout(function () {
        console.log("waited 0.1 sec.");
        user = {
            id: id,
            name: 'User' + id,
            email: id + '@test.com',
        }
    }, 100);
    return user;
}
const user2 = findUserCallbackTimeout(1);
console.log("user: ", user2);
// user: undefined > 비동기 함수의 호출이라 실행이 완료될 때까지 기다리지 않고 바로 return user 값 출력하기 때문
// waited 0.1 sec.


// 3-2 화살표 함수 버전
const findUserCallbackTimeoutRe = (id) => {
    let user;
    setTimeout(() => {
        console.log("waited 0.1 sec.");
        user = {
            id: id,
            name: 'User' + id,
            email: id + '@test.com',
        }
    }, 100);
    return user;
}
const user3 = findUserCallbackTimeoutRe(3);
console.log('화살표 함수', user3);


// 4-1 비동기 함수 (성공)
function findUserAndCallbackTimeout(id, cb) {
    setTimeout (function () {
        console.log("waited 0.1 sec.");
        const user = {
            id: id,
            name: 'User' + id,
            email: id + '@test.com',
        };
        cb(user); // cb() 실행
    }, 100);
    return user;
}
findUserAndCallbackTimeout(1, function (user) {
    console.log("user: ", user);
    // user: {id: 1, name: "User1", email: "1@test.com"}
    // waited 0.1 sec.
})

// 4-2 화살표 함수 버전
const findUserAndCallbackTimeoutRe = (id, cb) => {
    setTimeout(() => {
        console.log("waited 0.1 sec.");
        const user = {
            id: id,
            name: 'User' + id,
            email: '@test.com'
        }
        cb(user); // cb() 실행
    }, 100);
    return user;
}
findUserAndCallbackTimeoutRe(4, (user) => {
    console.log("user: ", user);
})

const CallbackPrac = () => {
    return (
        <div>
        </div>
    );
};

export default CallbackPrac;