
// fetch('http://localhost:3000/weather?address=pune').then((res)=>{
//     res.json().then((data)=>{
//         if(data.err){
//             console.log(data.err)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input');
const fisrtMsg=document.querySelector('#first-msg')
const secondMsg=document.querySelector('#second-msg')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    if (!location) {
        console.log('plz prvide search')
    } else {
        fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
            res.json().then((data) => {
                if (data.err) {
                    fisrtMsg.textContent=data.err
                } else {
                    fisrtMsg.textContent=data.location;
                     secondMsg.textContent=data.forecast
                    console.log(data.location)
                    console.log(data.forecast)
                }
            })
        })
    }

})
