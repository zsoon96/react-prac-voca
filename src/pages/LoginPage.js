import Login from "../components/login/Login";
import {useNavigate, useParams} from "react-router-dom";

const LoginPage = () => {
    // Header에서 로그인 버튼 눌렀을 때, 연결되는 path의 값(id) 불러오기 (데이터 넘기기)
    // 기존 강의에서는 (props)로 데이터 가져왔는데,
    // 버전이 다른 이유 때문인지 v6에서는 useParam()를 사용하니 path값 가져오기 성공 !
    const params = useParams();
    console.log(params.id);

    // v5
    // const history = useHistory();

    // v5
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1)
    }

    const goHomeHandler = () => {
        navigate('/')
    }

    return (
        <div>
            <button onClick={goBackHandler}>뒤로가기</button>
            <button onClick={goHomeHandler}>홈으로 가기</button>
            <Login />
        </div>
    )
}

export default LoginPage;