import React, {useEffect, useState} from 'react';
import BookItem from "../../components/BookItem";
import axios from "axios";

const Home = () => {

    const [books, setBooks] = useState([])

    useEffect( ()=> {
        axios.get('http://localhost:3001/board')
            .then((res) => setBooks(res.data) )
    },[] )

    return (
        <div>
            <h1> 책 리스트 조회 </h1>
            {/* books 배열에 담긴 횟수만큼 BookItem 컴포넌트 실행 */}
            {/* 데이터의 key와 book이라는 props를 BookItem 컴포넌트로 넘겨줌 */}
            {books.map( (book) => (<BookItem key={book.id} book={book} />) )}
        </div>
    );
};

export default Home;