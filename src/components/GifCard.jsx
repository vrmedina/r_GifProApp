import PropTypes from 'prop-types';

const trimTitle = (string, limit = 30) => string.substring(0, limit)

export const GifCard = ({ title, url }) => {
    return (
        <div className='card'>
            <img src={url} alt={title}/>
            <p>{ trimTitle(title) }</p>
        </div>
    )
}

GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    url:   PropTypes.string.isRequired
}

GifCard.defaultProps = {
}