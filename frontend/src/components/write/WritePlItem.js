import React from 'react'

const WritePlItem = ({ id, title, thumbnail, handlePLSelect }) => {
    return(
        <div className='playlist-item item' onClick={() => handlePLSelect(id)}>
            <img className='ui image' src={thumbnail} />
            <div className='ui title'>{title}</div>
        </div>
    )
}
export default WritePlItem;