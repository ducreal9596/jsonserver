import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

FakeAppchat.propTypes = {

};
const channelChat = [
    {name: "ReactJs", id:1},
    {name: "JavaScript", id:2},
    {name: "VueJs", id:3}
    ]
function FakeAppchat () {
    const [channel,setChannel] = useState(1)
    useEffect (() =>{
        const handleChat = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`channel-${channel}`,handleChat)
        return () =>{
        window.removeEventListener(`channel-${channel}`,handleChat)
        }
    },[channel])
    return (
        <div>
            {channelChat.map(cn=>(
                <p key={cn.id} 
                style={channel===cn.id?{color:'red'}:{}}
                onClick={e=>setChannel(cn.id)}>{cn.name}</p>
            ))}
        </div>
    )
}

export default FakeAppchat;