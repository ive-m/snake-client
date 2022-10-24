const IP = "localhost";
const PORT = 50541;
const name = "IVE";
const keys= {//objects of messages depending of the key pressed
              'w': "Move: up", 
              'a': "Move: left", 
              's': "Move: down", 
              'd': "Move: right",
              'm': "Say: Milshake",
              'f': "Say: Fantastic",
              'h': "Say: Hi",
              'k': "Say: Karate",
              

            };
module.exports = {
  IP,
  PORT,
  name,
  keys
};