import BlogItem from './BlogItem'

function BlogList(props) {

    const postHTML = props.posts.map(post =>
        <BlogItem key={post.id} {...post} editPost={props.editPost} deletePost = {props.deletePost} />
        )

    return(
        <ul>
            {postHTML}
        </ul>
    )
}

export default BlogList