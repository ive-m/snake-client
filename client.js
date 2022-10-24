const net = require("net");
const { IP, PORT, name} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.setEncoding("utf8");

  conn.on("connect", ()=>{
    console.log('Susccessfully connected to game server');//if connected 
    conn.write(`Name: ${name}`);// send name to the server
  });


  return conn;
};


module.exports = {connect};