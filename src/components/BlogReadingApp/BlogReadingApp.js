//BlogReadingApp is composed of BlogReader panel and a BlogPostList panel
//BlogPostList is composed of CLICKABLE titles that move post to BlogReader panel (could be an ASIDE with a UL of LIs)
//BlogReader is composed of blog posts which are composed of a title and a body
import {useState, useEffect} from 'react';
import BlogPreview from './BlogPreview';
import BlogPostList from './BlogPostList';

function BlogReadingApp() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([
            {
                id:1,
                title: 'She Believed She Could',
                text: '',
            }, {
                id:2,
                title: 'So She Did',
                text: '',
            }, {
                id:3,
                title: 'When There Are Nine',
                text: '',
            }, {
                id:4,
                title: 'Women Belong In All Places Where Decisions Are Being Made',
                text: '',
            }
        ])
    }, []);


    return (
        <main>
            <BlogPreview />
            <BlogPostList posts={posts}/>
        </main>
    )
}

export default BlogReadingApp
