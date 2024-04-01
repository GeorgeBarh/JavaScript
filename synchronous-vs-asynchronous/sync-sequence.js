function doTheSyncSequence() {
    let result = fetchSyncHello('Hello ')
    result = handle(result)
    showSync(result)
}

function fetchSyncHello(token) {
    return token + "World "
}
function handle(res) {
    return res + 'Coding Factory '
}

function showSync(res) {
let result = res + ' AUEB'
console.log(result)
}

doTheSyncSequence()

