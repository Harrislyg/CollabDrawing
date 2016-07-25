/* global $ */
var socket = io()

socket.on('connect', () => {
  console.log('connected:', socket.id)
})

$(document).ready(function () {
  $('.square').on('click', function () {
    if($(this).css('backgroundColor') === ('rgb(0, 0, 0)' || 'rgba(0, 0, 0, 0)')) {
      console.log($(this).css('backgroundColor'))

      socket.emit('drawWhite', $(this).attr('id'))
      return false
    }
      console.log("helo", $(this).css('background-color'))
      socket.emit('drawBlack', $(this).attr('id'))
  })

  socket.on('drawBlack', function (dom) {
    $('#' + dom).css('background-color', 'black')
  })
  socket.on('drawWhite', function (dom) {
    $('#' + dom).css('background-color', 'white')
  })
})
