import {useState,useEffect} from 'react'
import BlogList from './BlogList'
import BlogForm from './BlogForm'


function BlogAppFull() {
    const [posts, setPosts] = useState ([])
    const[counter, setCounter] = useState (3)
    
    useEffect(() => {
        setPosts([
            {
                id:1,
                title: "What does it all mean?",
                body: "I'm baby aute culpa in anim, hoodie eu master cleanse actually succulents chillwave hammock laboris excepteur tattooed ramps. Et mollit coloring book pinterest cardigan ennui gentrify pug everyday carry ut edison bulb mumblecore direct trade prism. Drinking vinegar elit unicorn hoodie tempor tilde. Cardigan vice fanny pack, nisi raclette brooklyn vegan distillery hexagon. Pitchfork deserunt succulents iceland biodiesel, brooklyn chambray hashtag shabby chic kitsch proident chia sriracha. Try-hard blog normcore mollit franzen nostrud portland forage chambray yr four dollar toast raclette palo santo succulents snackwave.",
            }, {
                id:2,
                title: "Turn Off Your Mind, Relax and Float Downstream",
                body: "Portland kogi single-origin coffee lumbersexual pariatur celiac mumblecore vexillologist mustache tumeric sustainable. Kogi tumblr unicorn, everyday carry YOLO drinking vinegar elit franzen tattooed eiusmod ipsum organic. Copper mug small batch crucifix tempor butcher. Cray occupy small batch drinking vinegar raw denim food truck ut mustache aute ennui veniam jean shorts. Veniam cupidatat shaman 90's, culpa plaid vice.",
            }
        ])
    }, []);

    function addPost(title,body) {
        const newPost = {id: counter, title, body};
        setPosts([...posts, newPost]);
        setCounter(counter + 1);
    }
    
    function deletePost(id) {
        const index = posts.findIndex(post => post.id === id);
        const remainingPosts = [...posts];
        remainingPosts.splice(index,1);
        setPosts(remainingPosts)
    }

    function editPost(id, newTitle, newBody) {
        const index = posts.findIndex (post => post.id === id);
        const updatedPosts = [...posts];
        updatedPosts[index].title = newTitle;
        updatedPosts[index].body = newBody;
        setPosts(updatedPosts)
    }
    
    return (
        <div>
            <BlogForm addPost={addPost}/>
            <BlogList posts={posts} deletePost={deletePost} editPost={editPost} />
        </div>
    )
}

export default BlogAppFull
