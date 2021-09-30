

function BookMarkList(props) {

    const bookmarksHTML = props.bookmarks.map(bookmark => {
        return (
            <li key={bookmark.id}>
                <url>{bookmark.url}</url>
                <p>{bookmark.title}</p>
                <p>{bookmark.tag}</p>
            </li>
        )
    });

    return (
        <ul>
            {bookmarksHTML}
        </ul>
    )
}

export default BookMarkList