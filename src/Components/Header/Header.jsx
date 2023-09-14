import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between p-10 border-b-2 max-w-5xl mx-auto'>
            <h1 className='text-5xl text-center font-bold' >Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;