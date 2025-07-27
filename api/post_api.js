let options = {
    method :"POST",
    headers :{ "content-type" : "application/json"
    },
    body :  JSON.stringify({
    title: 'Rabi',
    body: 'baBhagat',
    userId: 1000,
    }),
}


fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));