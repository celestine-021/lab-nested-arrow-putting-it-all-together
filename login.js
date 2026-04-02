function createLoginTracker(celestine) {
    let attempts = 0;
    return () => {
        attempts++;

        if (attempts <= 3){
            console.log(`${celestine} attempt ${attempts}: Try again `);
        } else {
            console.log(`${celestine} account locked `);  
        }

    };
}

const user= createLoginTracker('celestine');
user(); // celestine attempt 1: Try again
user(); // celestine attempt 2: Try again
user(); // celestine  attempt 3: Try again
user(); // celestine account locked