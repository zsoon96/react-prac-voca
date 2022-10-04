import React from 'react';

// 예외처리 1 > try/catch, Error
export function f2() {
    console.log('f2 start');
    // try/catch로 예외처리를 안해줄 경우, 다음 구문 실행 x
    throw new Error('에러!');
    console.log('f2 end');
}

export function f1() {
    console.log('f1 start');
    // f2()에 대한 예외가 발생하면, catch로 처리한 후, 다음 구문 실행
    try {
        f2();
    } catch (e) {
        console.log(e);
    }

    console.log('f1 end');
}

// console.log('will: f1');
// f1();
// console.log('did: f1');


// 예외처리 2 > promise의 catch() - 비동기 함수
export function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error!!')
        }, sec * 1000)
    })
}

// 2-1
// wait(3)
//     // 해당 catch는 wait()에 대한 예외처리
//     .catch(e => {
//     console.log('1st catch', e);
//     })
//     // 해당 catch는 바로 위 실행에 대한 예외처리
//     .catch( e => {
//         console.log('2rd catch', e);
//     });

// 2-2
// wait(3)
//     // then(성공 시 호출, 실패시 호출)
//     .then(
//         () => {
//             console.log('done!');
//         },
//         e => {
//             console.log('1st catch in Then', e);
//             throw new Error('error!')
//         })
//     // 해당 catch는 then() 실행에 대한 예외처리
//     .catch(e => {
//         console.log('2rd catch', e);
//     })


// 예외처리 3 > async/await - 비동기 함수
export async function myAsyncFun() {
    throw 'asyncError!';
}

export function myPromiseFun() {
    return new Promise((resolve, reject) => {
        reject('promiseError!')
    })
}

const result = myAsyncFun().catch(e => {
    console.log(e);
});
const result2 = myPromiseFun().catch(e => {
    console.log(e);
});

const ExceptionsPrac = () => {
    return (
        <div>
        </div>
    );
};

export default ExceptionsPrac;
