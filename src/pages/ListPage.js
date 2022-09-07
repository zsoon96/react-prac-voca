import styled from 'styled-components'
import React, {useState} from 'react';

const ListPage = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: '제목1'},
        {id: 2, title: '제목2'},
        {id: 3, title: '제목3'},
        {id: 4, title: '제목4'}
    ])

    const StyledPostBoxDiv = styled.div`
        display: flex;
        justify-content: space-between; 
        align-items: center;
        border: 1px solid black;
        padding: 10px;
        height: 100px;
        margin: 20px;
    `

    return (
        <div>
            <h1>리스트 페이지</h1>
            <hr />
            {posts.map((post) => (
                <StyledPostBoxDiv>
                    <div>번호 : {post.id} - 제목 : {post.title}</div>
                    <button>삭제</button>
                </StyledPostBoxDiv>
                ))}

        </div>
    );
};

export default ListPage;