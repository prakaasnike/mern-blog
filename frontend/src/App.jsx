import Navbar from './components/navbar.component';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="signin" element={<h1>signin page</h1>} />
                <Route path="signup" element={<h1>signup page</h1>} />
            </Route>
        </Routes>
    );
};

export default App;
