//BlogPostList is composed of CLICKABLE titles (BUTTONS) that move post to BlogReader panel (could be an ASIDE with a UL of LIs)


function BlogPostList(props) {
    
    const titles = props.posts.map(post => <li>{post.title}</li>)
    return (

        <aside>
            <ul>{titles}</ul>
        </aside>
    )


}

export default BlogPostList