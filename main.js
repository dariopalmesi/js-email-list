axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => {
    console.log(response);
    const result = response.data.response
    console.log(result);


    document.querySelector('h1').innerHTML = result
    
})