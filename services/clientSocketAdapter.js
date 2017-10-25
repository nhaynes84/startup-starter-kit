'use strict';

const services = {
    getFakeDatas: () => [{
        id: 1, title: 'blah', content: {}
    }, {
        id: 2, title: 'blahh', content: {}
    }, {
        id: 3, title: 'blahhhh', content: {}
    }],
    requestTheTime: () => Date.now()
};

// Notify the console of subscription events
const roomEventLogger = (event, type) => console.info(`${type} ${event} room.`);

// in theory this would register each socket connection separately
const clientAdapter = (socket, next) => {

    // Manage room subscriptions
    const addClientToRooms = rooms => rooms.forEach(room => socket.join(room, roomEventLogger(room, 'Joined')));
    const removeClientFromRooms = rooms => rooms.forEach(room => socket.leave(room, roomEventLogger(room, 'Left')));
    const notifyTheClient = action => socket.emit('action', action);

    // Listening for client initiated requests to send into the system
    socket.on('action', (action) => {

        // removing the 'server/' from the action type
        const type = action.type.slice('server/'.length, action.type.length);

        // Managing Real Time Model Update Subscriptions
        addClientToRooms([type]);
        if (type in services) {
            Promise.resolve(services[type]()).then(payload => {
                notifyTheClient({type, payload});
            });
        }
    });

    notifyTheClient({type: 'HOST_CONNECTED', payload: {alert: 'You are connected and logged in!'}});
    next();
};

module.exports = clientAdapter;