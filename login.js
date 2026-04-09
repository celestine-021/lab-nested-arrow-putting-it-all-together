function createLoginTracker(userInfo) {
    let attempts = 0;
    const maxAttempts =3;

    return () => {

        if (attempts >= maxAttempts) {
         return `${userInfo} account locked`;
        }

         attempts++;

         if (attempts >= maxAttempts){
         return `${userInfo} account locked`;
        } 

        return `${userInfo} attempt $ {attempts}. Try again`;
    

    };
}


