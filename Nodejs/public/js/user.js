$(document).ready(function(){
    const socket = io();
    // Listen for updates to the items list
    socket.on('notification', (items) => {
        $('#notification').html(items.playerName)
    })
});