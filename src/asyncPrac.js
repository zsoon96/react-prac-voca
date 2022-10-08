import React from 'react';
import async from "async";

// Promise 문제점
    // 1. 동일한 이름의 메서드인 then()을 연쇄적으로 호출하기 때문에 디버깅이 어려움. (break point x)
    // 2. try/catch > catch()를 사용하여 예외처리 시,비동기와 동기 코드가 섞여있을 경우 예외처리가 난해해지거나 누락하는 경우가 쉬움.
    // 3. 복잡한 구조의 비동기 처리 코드를 작성할 경우, 코드 가독성이 떨어짐.
function fetchAuthorName(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json()) // 응답 데이터
        .then((post) => post.id) // userId 추출
        .then((userId) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) // 추출한 userId 요청
                .then((res) => res.json()) // 응답 데이터
                .then((user) => user.name) // username 추출
        })
}
fetchAuthorName(1).then((name) => console.log('name', name))

// Promise 문제점을 보완한 Async/Await
    // Async/Await를 사용하면 비동기 코드를 마치 동기 코드처럼 보이게 작성할 수 있음.
    // 명시적으로 Promise 객체를 생성하여 리턴하지 않아도 Promise 객체가 리턴됨.
async function fetchAuthorNameAsync(postId) {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) // 데이터 요청
    const post = await postResponse.json(); // 받은 데이터
    const userId = post.userId; // 데이터 중에서 userId 추출
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) // userId로 재요청
    const user = await userResponse.json(); // 받은 데이터
    const username = user.username; // 데이터 중에서 username 추출
    return username;
}
fetchAuthorNameAsync(1).then((name) => {console.log('name', name)})

// 만약 위의 호출부가 또다른 async 키워드가 붙어있는 함수 내부에 위치해 있다면,
// 동일한 방식으로 await 키워드를 사용하여 Promise가 제공할 값에 바로 접근 가능!
async function printAuthorName(postId) {
    const name = await fetchAuthorNameAsync(postId); // 위의 호출부
    console.log('name', name);
}
printAuthorName(1);


// async/await 예외처리 > try/catch로 일관되게 처리 가능
async function fetchAuthorNameAsyncEx(postId) {
    const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await postResponse.json();
    const userId = post.userId;

    try {
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = await userResponse.json();
        return user.username;
    } catch (err) {
        console.log('요청 실패', err);
        return '알수 없는 응답';
    }
}
fetchAuthorNameAsyncEx(1).then((name) => {console.log('name', name)})


const AsyncPrac = () => {
    return (
        <div></div>
    )
}

export default AsyncPrac;