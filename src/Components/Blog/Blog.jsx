import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover,author, author_img,posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-10'>
            
            <img className='cover-img' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                <img className=' w-16' src={author_img} alt="" />
                <div className='ml-6'>
                <h2 className=' text-2xl'>{author}</h2>
                <p>{posted_date}</p>
                </div>
                </div>
                <div>
                <p>{reading_time} min reading time</p>
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
    blog: PropTypes.object.isRequired
}
export default Blog;