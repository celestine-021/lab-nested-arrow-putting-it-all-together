function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    // If attempts exceed 3 → lock account
    if (attemptCount > 3) {
      return "Account locked due to many failed login attempts";
    }

    // If password is correct
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } 
    // If password is incorrect
    else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}