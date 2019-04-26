
var socket;

$(document).ready(function () {
  try {

    socket = io();

    if (!socket) return;

    setSocket();

  } catch (error) {
    toast(error);
  }
});

function setSocket() {
  socket.on('connect', function () {
    toast("Socket conectado");
  });

  socket.on('disconnect', function () {
    toast("Socket desconectado");
  });
}