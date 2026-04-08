function createLoginTracker(celestine) {
    let attempts = 0;
    return  function () {
        attempts++;

        if (attempts <= 3){
         return`${celestine} attempt ${attempts}: Try again `;
        } else {
             return `${celestine} account locked `;  
        }

    };
}

const user= createLoginTracker('celestine')

console.log(user());
console.log(user());
console.log(user());
console.log(user());

