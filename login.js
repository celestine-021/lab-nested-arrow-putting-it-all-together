const createLoginTracker = (userInfo) =>{
    let attemptCount = 0;
    const maxAttempt = 3;
    let locked = false;

    return (passwordAttempt) =>{

        if (locked) {
         return "Account locked due to many failed login attempts";
        }

         if (passwordAttempt === userInfo.password){
         return "Login Successful";
        } 

        attemptCount++;

        if (attemptCount >= maxAttempt){
            locked = true;
            return "Account locked due to too many failed login attempts";
        }
        
        return `Attempt  ${attemptCount}: Login failed`;
    

    };
};

module.exports = {
    ...(typeof createLoginTracker !== 'undefined' && {createLoginTracker})

};


