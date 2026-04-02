function createLoginTracker(username){
    let attempts = 0;
    return () => {
        attempts++;

        if (attempts <= 3){
            console.log('${username} attempt ${attempts}: Try again ');
        } else {
            console.log('${username} account locked ');  
        }

    };
}

const user= createLoginTracker('john_doe');
user(); // john_doe attempt 1: Try again
user(); // john_doe attempt 2: Try again
user(); // john_doe attempt 3: Try again
user(); // john_doe account locked