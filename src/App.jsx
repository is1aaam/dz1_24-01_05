import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import CreatePostPage from './pages/createPostPage/CreatePostPage';
import Layout from './components/layout/Layout';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/create" element={<CreatePostPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;