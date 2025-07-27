/*fetch('https://jsonplaceholder.typicode.com/posts') // file name main.txt
.then(Response =>{
    if(!Response.ok){
        throw new Error("the file or the network in not exist or invalid");
        // console.log('');
    }
    
    return Response.json();     //response.text for txt file

}
)
// .then(data => console.log(data))

.then(data => data.forEach(element => {
    console.log(element.title)
    
}))
.catch(error => console.log('the file or the network in not exist or invalid')
); */

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
