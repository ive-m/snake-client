let connection;
const { keys } = require("./constants");
const arrKeys= Object.keys(keys);//keys of the constant Obj of Messages

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function(data){
   if (data === '\u0003') {
    process.exit();//ctrl+c exit the process
  }
  if(arrKeys.includes(data))
  {connection.write(keys[data]);}//sends data to the server
    
}

module.exports = {setupInput};