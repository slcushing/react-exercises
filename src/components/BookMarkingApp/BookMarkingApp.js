import BookMarkForm from './BookMarkForm'
import BookMarkList from './BookMarkList'
import {useState, useEffect} from 'react'


function BookMarkingApp() {
    const [bookmarks, setBookmarks] = useState ([])
    const [counter, setCounter] = useState(0)
    
    useEffect(() => {
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }, [bookmarks]);
    
    useEffect(() => {
            setBookmarks(JSON.parse(localStorage.getItem('bookmarks')));
        }, []);
    

    function addBookmark(url,title,tag) {
        const newBookmark = {id:counter, url, title, tag}
        setBookmarks([...bookmarks, newBookmark]);
        setCounter(counter + 1);
    }

    return (
        <div>
            <BookMarkForm addBookmark={addBookmark}/>
            <BookMarkList />
        </div>
    )
}

export default BookMarkingApp
