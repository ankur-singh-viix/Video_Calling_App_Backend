import {Socket} from "socket.io";
import {v4 as UUIDv4} from "uuid";

const roomHandler = ( socket: Socket ) => {

    const createRoom = () => {
        const roomId = UUIDv4();
        socket.join(roomId);
        socket.emit("room-created", {roomId } );
        console.log("New room created", roomId);

    };

    const joinedRoom = ({roomId}: {roomId: string}) => {
        console.log("New user has joined the room", roomId);
        socket.join(roomId);
        socket.emit("joined-room", {roomId});
        socket.to(roomId).emit("userjoined");
    };

    // we will call the above two function when the client will emit evets top create room
    socket.on("create-room", createRoom);
    socket.on("joined-room", joinedRoom);

};

export default roomHandler;
