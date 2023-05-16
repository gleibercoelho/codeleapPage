import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearUserData } from "../../Actions/user/index";
import { HeaderDiv } from "./style";
import logo from '../../assets/images/logo.png'
import { useNavigate } from "react-router";





export function Header() {

    const userloged = useSelector((state: any) => state.user.username);
    const navigate = useNavigate();


    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearUserData()); // <-- clear user data from Redux store
        sessionStorage.removeItem("userData"); // <-- clear session storage
        navigate("/codeleapPage") // <-- redirect to login page
    };


    return (

        <HeaderDiv>
            <div className="info">
                <img src={logo} alt="" />
                <h2>Hello, {userloged} </h2>
            </div>
            <div className="logout">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </HeaderDiv>
    )
};
