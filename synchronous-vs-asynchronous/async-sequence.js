
// Callback h ell - Pyramid of Doom
function doTheAsyncSequence() {
    fetchAsyncHello('Hello ' , res1 => {
        handleAsync(res1 , res2 => {
            showAsync(res2, res3 => {
                console.log(`${res3}`)
            })
        })
    })
}

function fetchAsyncHello(helloToken, callbackHello) {
    let result = helloToken + 'World'
    callbackHello(result)
}

function handleAsync(res , callbackHandle) {
    let result = res + " and "
    callbackHandle(result)
}

function showAsync(res , callbackShow) {
    let result = res + 'Coding Factory'
    callbackShow(result)
}

doTheAsyncSequence()