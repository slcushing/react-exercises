//BlogReader is composed of a blog post which is composed of a title and a body and taken from BLOGPOSTLIST
//Got to get the ID from the parent and display the title and text of the post


function BlogPreview(props) {
    

    return (
        <section>
           <h3>{props.post.title}</h3>
           <p>{props.post.text}</p>
        </section>
    )
}

export default BlogPreview