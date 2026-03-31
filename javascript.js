let attempt = 0;
let isLocked = false;

function login(password) {
    if (isLocked) {
        console.log("The account is locked. You cannot log in");
        return; 
    }

    const correctPassword = "password123"; 

    if (password === correctPassword) {
        console.log("Login successful!");
        attempt = 0;
    } else {
        attempt++;
        console.log("Incorrect password. Attempt number: " + attempt);
        
        if (attempt >= 3) {
            isLocked = true;
            console.log("The account is now LOCKED after 3 failed attempts.");
        }
    }
}