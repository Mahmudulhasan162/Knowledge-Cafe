import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks}) => {
    const {title, cover,author, author_img,posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-10'>
            
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                <img className=' w-16' src={author_img} alt="" />
                <div className='ml-6'>
                <h2 className=' text-2xl'>{author}</h2>
                <p>{posted_date}</p>
                </div>
                </div>
                <div className='flex items-center gap-4'>
                <p>{reading_time} min read</p><span> <button onClick={() => handleBookmarks(blog)}><FaBookmark></FaBookmark></button></span>
                </div>
            </div>
            <h2 className=' text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a> #{hash} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks : PropTypes.func
}
export default Blog;