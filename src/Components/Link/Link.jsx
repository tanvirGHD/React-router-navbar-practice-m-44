import PropTypes from 'prop-types';


const Link = ({route}) => {
    return (
        <li className='hover:bg-blue-400 p-1 rounded-xl md:text-black text-white px-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;
