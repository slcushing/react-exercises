import {useState,useEffect} from 'react';

function BlogPostForm(prop) {
    const [title, setBlogTitle] = useState('');
    const [body, setBlogBody] = useState('');
    const [blogPosts, setBlogPosts] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setBlogPosts(JSON.parse(localStorage.getItem('blogPosts')));
    }, []);
    
    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }, [blogPosts]); //dependency array is blogPost

    // function addBlogPost(text) {
    // }

    function handleSubmit(event) {
        event.preventDefault();
        const newPost = {id:counter, title: title, body: body}
        // const newPost = {id:counter, title, body} same things as previous line (just shorthand syntax)
        setBlogPosts([...blogPosts, newPost]);
        setCounter(counter + 1);
        setBlogTitle('');
        setBlogBody('');

    }

    function handleNewTitle(event) {
        setBlogTitle(event.target.value)
    }

    function handleNewBody(event) {
        setBlogBody(event.target.value)
    }


    
    return (
        <form onSubmit={handleSubmit}>
            <input name="text" type="text" id="new-blog-title" value={title} onChange={handleNewTitle} placeholder="Blog Title"/>
            <input name="text" type="text" id="new-blog-body" value={body} onChange={handleNewBody} placeholder="Blog Post Body"/>
            <button type="button">Add Post</button>
        </form>
    )
}

export default BlogPostForm
