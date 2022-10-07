import React from 'react';

// 일반적인 함수 (입력 - 파라미터 / 출력 - 리턴)
function findUser(id) {
    const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
    }
    return user;
    // user: {id: 1, name: "User1", email: "1@test.com"}
}

// 자바스크립트 함수 (입력 - 파라미터, 콜백함수 / 출력 - 콜백함수의 실행결과)
function findUserAndCallback(id, cb) {
    const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
    }
    cb(user);
}

findUserAndCallback(1, function (user) {
    console.log("user: ", user);
    // user: {id: 1, name: "User1", email: "1@test.com"}
})


const user = findUser(1);
console.log(user);

const CallbackPrac = () => {
    return (
        <div>
        </div>
    );
};

export default CallbackPrac;