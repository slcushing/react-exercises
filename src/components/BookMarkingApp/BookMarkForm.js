import {useState} from 'react'

function BookMarkForm(props) {
    // const [bookmarks, setBookmarks] = useState ([])
    const [url, setURL] = useState('')
    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')
    // const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // }, [bookmarks]);

    // useEffect(() => {
    //     setBookmarks(JSON.parse(localStorage.getItem('bookmarks')));
    // }, []);
    
    function handleSubmit(event) {
        event.preventDefault();
        props.addBookmark(url,title,tag)
        // const newBookmark = {id:counter, url, title, tag}
        // setBookmarks([...bookmarks, newBookmark]);
        // setCounter(counter + 1);
        setURL('');
        setTitle('');
        setTag('');
    }

    function handleNewURL(event) {
        setURL(event.target.value)
    }

    function handleNewTitle(event) {
        setTitle(event.target.value)
    }

    function handleNewTag(event) {
        setTag(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="url" type="url" id="new-url" value={url} onChange={handleNewURL} placeholder="URL"/>
            <input name="text" type="text" id="new-title" value={title} onChange={handleNewTitle} placeholder="Title"/>
            <input name="text" type="text" id="new-tag" value={tag} onChange={handleNewTag} placeholder="Tag"/>
            <button type="button">Add Bookmark</button>

        </form>
    )

}

export default BookMarkForm
