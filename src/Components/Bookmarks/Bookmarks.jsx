
import PropTypes from 'prop-types';
import Bookmark from '../Bookamark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-5 text-center">
            <h2 className="text-3xl font-medium">BookMarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array
 }
export default Bookmarks;