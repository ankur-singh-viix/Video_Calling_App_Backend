import {Socket} from "socket.io";
import {v4 as UUIDv4} from "uuid";
import  type IRoomParams from "../interfaces/IRoomParams.js";

  // to keep track of rooms and their participants
const rooms: Record<string , string[]> = {};

const roomHandler = ( socket: Socket ) => {

    const createRoom = () => {

        const roomId = UUIDv4();

        // we will make the socket coonection enter a new room
        socket.join(roomId);

        rooms[roomId] = []; // create a new room in our rooms object
        socket.emit("room-created", {roomId } );
        console.log("New room created with id ", roomId);

    };

    const joinedRoom = ({roomId , peerId}: IRoomParams) => {
        // console.log("joinedRoom called with", rooms,roomId , peerId);

        if (rooms[roomId]) {
            console.log("New user has joined room", roomId , "with peer id", peerId);
            rooms[roomId].push(peerId);
            console.log("Added peer to room", rooms);

            socket.join(roomId); // make the usetr join the user room

            socket.emit("get-users", {

                roomId,
                participants: rooms[roomId],

            });

        } else {
            rooms[roomId] = [peerId];
        }

    };

    // we will call the above two function when the client will emit evets top create room
    socket.on("create-room", createRoom);
    socket.on("joined-room", joinedRoom);

};

export default roomHandler;
