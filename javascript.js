function createLoginTracker() { 
let attempt = 0;
let isLocked = false;

return(password) => {
if (isLocked) {
return "The account is locked .";
}

if(password === "userInfo.password") {
attempt = 0;
return "Login successful.";
} else {
attempt++;
if (attempt >= 3) {
isLocked = true;
return "The account is now LOCKED after 3 failed attempts.";
}
return "Incorrect password. Attempt " + attempt + " of 3.";
}
};
}

