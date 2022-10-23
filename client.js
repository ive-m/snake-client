const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
    
  });

conn.on("data", (data) => {
  console.log("Server says: ", data);
});
  // interpret incoming data as text
  conn.setEncoding("utf8");
conn.on("connect", ()=>{
  console.log('Susccessfully connected to game server');
});
conn.on("connect", () => {
  conn.write("Name: IVE");
});
  return conn;
};

console.log("Connecting ...");
connect();
module.exports={connect};