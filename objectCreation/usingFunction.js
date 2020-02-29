function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increament = function () {
    newUser.score++;
  }
}

const user1 = userCreator("Phil",4);
const user2 = userCreator("Julia", 5);

user1.increament();

/* Issue each object will have a separate copy of function.
  If we have more function it will be a waste of memory.
  {As the function code will be same only data changes}
*/