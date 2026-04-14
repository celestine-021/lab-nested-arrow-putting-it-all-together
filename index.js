function createLoginTracker(userInfo) {
  let loginAttempts = 0;
  const maxAttempts = 3;

  return (enteredPassword) => {
    // 1. Check if already locked
    if (loginAttempts >= maxAttempts) {
      return "Account is locked. Please contact support.";
    }

    // 2. Check password
    if (enteredPassword === userInfo.password) {
      loginAttempts = 0;
      return `Welcome, ${userInfo.username}! Login successful.`;
    } else {
      loginAttempts++;
      
      // 3. Check if this attempt causes a lock
      if (loginAttempts >= maxAttempts) {
        return "Too many failed attempts. Account is now locked.";
      }
      
      // 4. Return remaining attempts (Match this exactly)
      return `Incorrect password. Attempts remaining: ${maxAttempts - loginAttempts}`;
    }
  };
}

// Crucial: Export the function for Jest
module.exports = createLoginTracker;