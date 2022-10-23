let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function(data) {
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === 'm') {
    connection.write("Say: Milshake");
  }
  if (data === 'f') {
    connection.write("Say: fantastic");
  }
  if (data === 'h') {
    connection.write("Say: hi");
  }
  if (data === 'k') {
    connection.write("Say: karate");
  }
  if (data === '\u0003') {
    process.exit();
  }

};

module.exports = {setupInput};