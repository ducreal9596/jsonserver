import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

Avatar.propTypes = {

};

function Avatar() {
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handleAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <div>
            <input type="file" onChange={handleAvatar}/>
            {avatar && <img src={avatar.preview} />}
        </div>
    )
}

export default Avatar;