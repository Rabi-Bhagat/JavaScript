function  fun ( task) {
    return new promise ((resolve,reject) => {
        if (task){
            resolve("completed");
        }
        else{
            reject("not completed");
        }
    }
)
}

let resolve 