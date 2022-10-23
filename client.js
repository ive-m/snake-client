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

  conn.on("connect", () => {
    conn.write("Name: IVE");

    conn.on("connect", () => {
      conn.write("Move: up");
      
      /*setTimeout(() => {

        conn.on("connect", ()=>{conn.write("Move: up");});
      }, 1000);
      setTimeout(() => {

        conn.on("connect", ()=>{conn.write("Move: down");});
      }, 1500);

      setTimeout(() => {
        conn.on("connect", ()=>{conn.write("Move: left");});
      }, 2000);

      setTimeout(() => {
        conn.on("connect", ()=>{conn.write("Move: right");});
      }, 3000);*/
      

    });
    
  });
});






  return conn;
};


module.exports={connect};