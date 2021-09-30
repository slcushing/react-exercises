import {useState} from 'react'

function BlogItem(props) {
    const[newTitle, setNewTitle] = useState(props.title);
    const[newBody, setNewBody] = useState(props.body);
    const[isEditing, setIsEditing] = useState(false);

    function handleTitleChange(event) {
        setNewTitle(event.target.value)
    };

    function handleBodyChange(event) {
        setNewBody(event.target.value)
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.editPost(props.id, newTitle, newBody);
        setIsEditing(false);
    }

    const editHTML = (
        <form onSubmit={handleSubmit}>
            <input type="title" name="newTitle" value={newTitle} onChange={handleTitleChange}/>
            <input type="body" name="newBody" value={newBody} onChange={handleBodyChange}/>
            <button type="submit">Update Post</button>
        </form>
    )

    const previewHTML = (
        <>
        <button type="button" onClick={() => setIsEditing(true)}>Edit Post</button>
        <button type="button" onClick={() => props.deletePost(props.id)}>Delete Post</button>
        </>
    )


    return(
        <li>
            {isEditing ? editHTML : previewHTML}
        </li>
    )
}

export default BlogItem