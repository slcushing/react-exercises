//BlogPostList is composed of CLICKABLE titles (BUTTONS) that move post to BlogReader panel (could be an ASIDE with a UL of LIs)
// import {useState} from 'react' //feel like I need access to state to access the array of posts

function BlogPostList(props) {
    
    const titles = props.posts.map(post => {
        return (
            <li key={post.id}>
                <button type="button" onClick={() => props.posts.value(props.id)}>{post.title}</button> 
            </li>
        )
    });
    
    return (
        <aside>
            <ul>{titles}</ul>
        </aside>
    )


}

export default BlogPostList