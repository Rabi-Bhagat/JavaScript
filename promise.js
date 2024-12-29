const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Operation successful!");//if everything goes well we got a positive message
    } else {
      reject("Operation failed."); //if anthing  goes failed or error we got a negative message
    }
  });
  
  promise
    .then(result => console.log(result))  // If it worked, we get the success message and show it.
    .catch(error => console.error(error));// If it failed, we catch the error and show it. 
  