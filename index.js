function createLoginTracker(userInfo) {
  let attempts = 0;
  let locked = false;

  return (password) => {
    if (locked) {
      return "Account locked";
    }

    if (password === userInfo.password) {
      attempts = 0; // reset on success
      return "Login successful";
    } else {
      attempts++;

      if (attempts >= 3) {
        locked = true;
        return "Account locked";
      }

      return "Incorrect password";
    }
  };
}

const user = { username: "admin", password: "1234" };

const login = createLoginTracker(user);

console.log(login("1111")); // Incorrect password
console.log(login("2222")); // Incorrect password
console.log(login("3333")); // Account locked
console.log(login("1234")); // Account locked