import styled from 'styled-components'
import React, {useState} from 'react';

const ListPage = () => {

    const [num, setNum] = useState(6)

    const [posts, setPosts] = useState([
        {id: 1, title: '제목1', content: '내용1'},
        {id: 2, title: '제목2', content: '내용2'},
        {id: 3, title: '제목3', content: '내용3'},
        {id: 4, title: '제목4', content: '내용4'}
    ])

    const [post, setPost] = useState({
        id: num,
        title: '',
        content: ''
    })

    const StyledPostBoxDiv = styled.div`
        display: flex;
        justify-content: space-between; 
        align-items: center;
        border: 1px solid black;
        padding: 10px;
        height: 100px;
        margin: 20px;
    `

    const writeHandler = () => {
        // 숫자 증가
        setNum(num + 1)
        // 추가하려는 post의 변경된 id 값도 추가해서 최종 추가..!!
        setPosts([...posts, {...post, id: num}])
    }

    // const titleHandler = (e) => {
    //     console.log(e.target.value)
    //     setPost({title: e.target.value})
    // }
    // const contentHandler = (e) => {
    //     console.log(e.target.value)
    //     setPost({content: e.target.value})
    // }

    const formHandler = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)

        // computed property names 문법 (키값을 동적으로 할당해줌)
        setPost({...post, [e.target.name] : e.target.value}) // 기존값 유지하면서 덮어쓰기 (title > title + content)
    }

    return (
        <div>
            <div>
                <h4>작성 페이지</h4>
                <form>
                    {/* value에 상태값을 넣고 onChnage 시, 상태변화 가능, name을 사용할 경우 위의 문법을 사용할 수 있기 때문에 하나의 함수로 여러가지 상태를 컨트롤 할 수 있음 */}
                    <input type="text" placeholder="제목을 입력해주세요." value={post.title} onChange={formHandler} name="title" />
                    <input type="text" placeholder="내용을 입력해주세요." value={post.content} onChange={formHandler} name="content" />
                    <button type="button" onClick={writeHandler}>작성</button>
                </form>
            </div>

            <hr />

            <div style={{marginTop: 40}}>
                <h4>리스트 페이지</h4>
                {posts.map((post) => (
                    <StyledPostBoxDiv>
                        <div>번호 : {post.id} - 제목 : {post.title} - 내용 : {post.content}</div>
                        <button>삭제</button>
                    </StyledPostBoxDiv>
                ))}
            </div>
        </div>
    );
};

export default ListPage;