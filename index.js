function createLoginTracker(userInfo) {
  let loginAttempts = 0;
  const maxAttempts = 3;

  return (enteredPassword) => {
    if (loginAttempts >= maxAttempts) {
      return "Account is locked. Please contact support.";
    }

    if (enteredPassword === userInfo.password) {
      loginAttempts = 0;
      return `Welcome, ${userInfo.username}! Login successful.`;
    } else {
      loginAttempts++;
      if (loginAttempts >= maxAttempts) {
        return "Too many failed attempts. Account is now locked.";
      }
      return `Incorrect password. Attempts remaining: ${maxAttempts - loginAttempts}`;
    }
  };
}


module.exports = createLoginTracker;