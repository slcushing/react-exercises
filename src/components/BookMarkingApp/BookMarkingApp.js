import BookMarkForm from './BookMarkForm'
import BookMarkList from './BookMarkList'
import {useState, useEffect} from 'react'

function BookMarkingApp() {
    
    const [bookmarks, setBookmarks] = useState ([]);
    const [counter, setCounter] = useState(0)
    const [filter, setFilter] = useState();
    
    useEffect(() => {
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }, [bookmarks]);
    
    useEffect(() => {
            setBookmarks(JSON.parse(localStorage.getItem('bookmarks')));
        }, []);
    

    function addBookmark(url,title,tag) {
        const newBookmark = {id:counter, url, title, tag};
        setBookmarks([...bookmarks, newBookmark]);
        setCounter(counter + 1);
    }

    function filterTag(event) {
        if(event.target.value === 'all') {
            setFilter(null)
        } else {
            setFilter(event.target.value);
        }
    }

    const bookmarksHTML = bookmarks
        .filter(bookmark => filter ? bookmark.tag === filter : bookmark)
        .map((bookmark, index) => <li key={index}>{bookmark.title}</li>);

    const tags = bookmarks.map(bookmark => bookmark.tag);
    const uniqueTags = [...new Set(tags)];
    const optionsHTML = uniqueTags.map(tag => <option key={tag} value={tag}>{tag}</option>)


    return (
        <div>
            <BookMarkForm addBookmark={addBookmark}/>
            <select name="" id="" onChange={filterTag}>
                <option value="all">all</option>
                {optionsHTML}
                
            </select> 
            <BookMarkList bookmarks={bookmarks}/>

        </div>
    )
}

export default BookMarkingApp
