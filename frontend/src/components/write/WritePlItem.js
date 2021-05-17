import React from 'react'

const WritePlItem = ({ id, title, thumbnail, onChangePL, onChangeThumb }) => {

    const onClick = () =>{
        onChangePL(id);
        onChangeThumb(thumbnail);
    };

    return(
        <div className='playlist-item item' onClick={onClick}>
            <img className='ui image' src={thumbnail} />
            <div className='ui title'>{title}</div>
        </div>
    )
}
export default WritePlItem;