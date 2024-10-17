// axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
// .then(response => {
//     const mails = response.data.response
//     document.querySelector('h1').innerHTML =mails
// })
const mailsEl = document.getElementById('mails')

for (let i= 0; i <= 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(responce => {
        let mails = responce.data
        console.log(mails);
        
        let {email} = mails
        let markup = `
        <h1>${email}</h1>
        `

        mailsEl.innerHTML += markup
        console.log(mails);
        
    })
    
}