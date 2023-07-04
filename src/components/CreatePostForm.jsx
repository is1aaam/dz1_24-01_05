import  { useState } from 'react';
import axios from 'axios';

const CreatePostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const newPost = {
            title,
            body,
        };

        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        setTitle('');
        setBody('');
    };

    return (
        <div className='create-post-form'>
            <h2>Create Post</h2>
            <form
                onSubmit=
                    {handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea
                        value={body}
                        onChange={e => setBody(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreatePostForm;