import { useLocation } from 'react-router-dom';

function Home() {
    const {state} = useLocation();

    return (
        <h1>You've been tricked {state.username} with password {state.password}. Be more careful!</h1>
    );
}

export default Home;