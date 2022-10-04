import React from 'react';

// 예외처리 1 > try/catch, Error
export function f2() {
    console.log('f2 start');
    // try/catch로 예외처리를 안해줄 경우, 다음 구문 실행 x
    throw new Error('에러!');
    console.log('f2 end');
}

export function f1()  {
    console.log('f1 start');
    // f2()에 대한 예외가 발생하면, catch로 처리한 후, 다음 구문 실행
    try {
        f2();
    } catch (e) {
        console.log(e);
    }

    console.log('f1 end');
}

console.log('will: f1');
f1();
console.log('did: f1');

const ExceptionsPrac = () => {
    return (
        <div>
        </div>
    );
};

export default ExceptionsPrac;
