import React, { ComponentType, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRoom } from '../context/RoomContext';
import Loader from '../components/Loader/Loader';

export default function withRoom<T>(Component: ComponentType<T>): ComponentType<T> {

    const WrappedComponent: React.FC<T> = (props: T) => {
        const { isRoom, updateIsRoom } = useRoom();
        const { roomSlug } = useParams();
        const navigate = useNavigate();
        useEffect(() => {
            if (!roomSlug) {
                navigate("/not-found");
                return;
            }
            updateIsRoom(true);
        }, [roomSlug])

        // render
        if (!isRoom) {
            return <Loader className='bg-gray-950' loaderClassName="size-[40px] text-white" />;
        }
        return <Component {...props} roomSlug={roomSlug} />;
    }
    return WrappedComponent;
}
