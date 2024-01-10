import { useNavigate } from 'react-router-dom';

import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = () => {
    const navigate = useNavigate(); // Inicjalizuj hook useNavigate

    const handlePostAdded = () => {
        // Tutaj możesz umieścić logikę przekierowania po dodaniu posta
        // Na przykład, przekieruj użytkownika na stronę główną
        navigate('/'); // Przekieruj na stronę główną za pomocą hooka useNavigate
    };

    return (
        <div>
            <h1>Dodaj Post</h1>
            <AddPostForm onPostAdded={handlePostAdded} />
        </div>
    );
}

export default AddPost;

