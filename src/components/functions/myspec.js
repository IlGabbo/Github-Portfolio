export const splitString = (string) => {
    let arr = []
    for (let i = 0; i < string.length; i++) {
        arr.push(string.charAt(i))
    }
    return arr
}    

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const writeMySpec = async (dev) => {
    let work = document.querySelector(".speciality")
    let phrase = ""

    for (let i = 0; i < dev.length; i++) {
        await sleep(100)
        phrase += dev[i]        
        work.textContent = phrase
    }

    await sleep(2000)

    for (let i = dev.length; i >= 0; i--) {
        await sleep(100)
        phrase = phrase.slice(0, -1)
        work.textContent = phrase        
    }
    
    if (dev === "Front-end") {
        writeMySpec("Software")
    } else {
        writeMySpec("Front-end")
    }
}