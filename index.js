/**
 * Lab: JavaScript Functions
 * Goal: Add a secure login feature that locks after 3 failed attempts.
 */

// 1. Define the createLoginTracker function
function createLoginTracker(userInfo) {
  // Use a closure variable to keep track of attempts
  let loginAttempts = 0;
  const maxAttempts = 3;

  // 2. Return an inner arrow function
  return (enteredPassword) => {
    
    // Check if the account is already locked
    if (loginAttempts >= maxAttempts) {
      return "Account is locked. Please contact support.";
    }

    // 3. Implement the logic for password checking
    if (enteredPassword === userInfo.password) {
      // Reset attempts on successful login
      loginAttempts = 0;
      return `Welcome, ${userInfo.username}! Login successful.`;
    } else {
      // Increment attempts on failure
      loginAttempts++;
      
      if (loginAttempts >= maxAttempts) {
        return "Too many failed attempts. Account is now locked.";
      }
      
      return `Incorrect password. Attempts remaining: ${maxAttempts - loginAttempts}`;
    }
  };
}

const testUser = { username: "Admin", password: "123" };
const tracker = createLoginTracker(testUser);

