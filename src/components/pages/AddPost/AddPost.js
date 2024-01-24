import {useNavigate} from 'react-router-dom';

import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = () => {
    const navigate = useNavigate();

    const handlePostAdded = () => {
        navigate('/');
    };

    return (
        <div>
            <AddPostForm onPostAdded={handlePostAdded}/>
        </div>
    );
}

export default AddPost;

