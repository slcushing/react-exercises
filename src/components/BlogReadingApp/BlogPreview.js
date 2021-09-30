//BlogReader is composed of a blog post which is composed of a title and a body and taken from BLOGPOSTLIST
//Got to get the ID from the parent and display the title and text of the post
import {useState} from 'react'

function BlogPreview(props) {
    
    const [selection, setSelection] = useState()

    function selectPost(id) {
        let index = props.posts.findIndex((element) => element.id === id);
        const selectedPost = props.posts[index];
        setSelection(selectedPost);
    }
    

    return (
        <section>
           {selection} = {selectPost}
        </section>
    )
}

export default BlogPreview