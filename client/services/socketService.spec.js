import test from 'tape';
import {configureSocket} from "./socketService";

test('configureSocket with valid params', function (t) {

    // ARRANGE
    t.plan(2);

    class mySocket {
        send(payload) {
            t.pass();
        }
    }

    // ACT
    const newSocket = configureSocket(mySocket, 'localhost:8000');
    newSocket.onopen();
    newSocket.onmessage({data:{}});

    // ASSERT
    t.equal(typeof newSocket.onmessage, 'function');
});

test('configureSocket with no params', function (t) {

    // ARRANGE
    t.plan(1);

    class mySocket {
        send(payload) {

        }
    }

    // ACT
    try {
        const newSocket = configureSocket();
    } catch (ex) {
        t.pass();
    }

    t.end();
});