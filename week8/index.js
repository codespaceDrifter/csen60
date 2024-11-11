//this code runs synchronously
function showData(){
    console.log("showData")
}

//this code runs asynchronously
async function getRandomFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json()
    console.log(data.text)
}

async function getTodayFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today");
    const data = await response.json()
    console.log(data.text)
}

getRandomFact()
getTodayFact()
showData()