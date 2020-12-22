import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';

function Chat() {

    const { roomId } = useParams();

    const [ roomDetails, setRoomDetails] = useState(null);
    const [ roomMessages, setRoomMessages] = useState(null);

    //set room details whenever roomid changes
    useEffect(() => {
        if (roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
        //fetch room messages collection from db
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => (
            setRoomMessages(snapshot.docs.map(doc => doc.data()))
        ))
    }, [roomId])

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {roomMessages?.map(({ message, user, userimage, timestamp }) => (
                    <Message
                    message={message}
                    user={user}
                    userimage={userimage}
                    timestamp={timestamp}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat