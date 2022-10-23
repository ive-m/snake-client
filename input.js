const  {connect} = require('./client');
const readline = require('readline');
let connection;




// setup interface to handle user input from stdin

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection= conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  

  return stdin;
};

const handleUserInput = function (data) {
  if (data === 'w') {
    console.log("Move: up");
    connection.write("Move: up");
  }

  if (data === 'a') {
    console.log("Move: left");
    connection.write("Move: left");
  }

  if (data === 's') {
    console.log("Move: down");
    connection.write("Move: down");
  }
  if (data === 'd') {
    console.log("Move: right");
    connection.write("Move: right");
  }

  if (data === 'm') {
    console.log("Message sent to the server");
    connection.write("Say: Milshake");
  }

  if (data === '\u0003') {
    process.exit();
  }

};

module.exports= {setupInput};