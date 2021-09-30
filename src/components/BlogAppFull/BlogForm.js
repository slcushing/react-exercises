import {useState} from 'react'

function BlogForm(prop) {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        prop.addPost(postTitle, postBody);
        setPostTitle('');
        setPostBody('');
    }


    function handleNewPostTitle(event) {
        setPostTitle(event.target.value);
    }

    function handleNewPostBody(event) {
        setPostBody(event.target.value);
    }


    return (
        
        <form onSubmit = {handleSubmit}>
            <h3>
                <label>Add a Blog Post: </label>
            </h3>
            <input name="title" type="title" id="new-blog-title" value={postTitle} onChange={handleNewPostTitle} placeholder="Blog Post Title"></input>
            <input name="body" type="body" id="new-blog-body" value={postBody} onChange={handleNewPostBody} placeholder="Blog Away"></input>
            <button type="button">Submit Post</button>

        </form>
        
    )
}

export default BlogForm