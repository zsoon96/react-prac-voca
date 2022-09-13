import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const BookItem = (props) => {

    // Home.js에서 전달받은 props를 구조분할 방식으로 데이터 할당
    const {id, title} = props.book

    return (
       <Card>
           <Card.Body>
               <Card.Title> {title} </Card.Title>
               <Link to={"/post/" + id} className="btn btn-primary"> 상세보기 </Link>
           </Card.Body>
       </Card>
    );
};

export default BookItem;