import React from 'react';

const WritePage = () => {

    const writeHandler = () => {
        let post = { id:6, title: '제목 추가' }
        console.log(post)
    }
    return (
        <div>
            <h1>작성 페이지</h1>
            <hr />
            <form>
                <input type="text" placeholder="제목을 입력해주세요." />
                <button type="button" onClick = {writeHandler}>작성</button>
            </form>
        </div>
    );
};

export default WritePage;