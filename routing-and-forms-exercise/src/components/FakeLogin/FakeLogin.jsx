import { useNavigate } from "react-router-dom";

function FakeLogin() {
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        console.log(formData.get('username'))

        navigate('/home', {
                state : {
                    username: formData.get('username'),
                    password: formData.get('password'),
                }
            }
        );
    }


    return (
        <>
            <form onSubmit={loginSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username"/>
                
                <label htmlFor="password">Password: </label>
                <input type="text" name="password"/>
                
                <button>Log in</button>
            </form>
        </>
    );
}

export default FakeLogin;