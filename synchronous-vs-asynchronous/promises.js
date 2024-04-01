let myPromise = new Promise((resolve , reject) => {
    const result = Math.floor(Math.random() * 10)
    if (result === 0) {
        resolve(result)
    } else {
        reject("Error in guess")
    }
})

// myPromise.then(response => {
//     const result = response + "Success"
//     console.log(result)
// }), error => {
//     console.log(error)
// }

myPromise
.then(response => { const result = response + "Success" })
.then(result => console.log(result))
.catch(error => console.log(error))

let myPromise2 = Promise.resolve('0')
let myPromise3 = Promise.reject('Error in guess')



// let myPromise = new Promise((resolve,reject) => {
// const result = Math.floor(Math.random() * 10)
// if (result ===0) {
//     resolve(result)
// } else {
//     reject("Error in guess")
// }
// }) 



// // myPromise.then(response => {
// //     const result = response = "Success"
// //     console.log(result)

// // }, error => {
// //     console.log(error)
// // })

// myPromise
// .then(response => {const result = response + "Success"})
// .then(res => console.log(res))
// .catch(error => console.log(error))

// let myPromise2 = Promise.resolve('0')
// let myPromise3 = Promise.reject('An error')

