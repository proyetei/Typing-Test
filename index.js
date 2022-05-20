const key = 'http://api.quotable.io/random'
const showMessage = document.getElementById('quoteDisplay')
const inputMessage = document.getElementById('quoteInput')

function getKey(){
    return fetch(key)
    //.then returns a promise
    .then(response=> response.json())
    .then(data => data.content)
}

// function creation
async function getNewKey(){
    const message = await getKey() //gets a different random message for you to test your typing skills!

    //The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
    showMessage.innerHTML = ''

    //splits to words
    message.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.classList.add('correct') //apply the "correct class" from css file to this javascript file; character is green if its right
        characterSpan.classList.add('wrong')
        characterSpan.innerText = character //seperates into single characters so we can highlight each character the user types
        showMessage.appendChild(characterSpan)
    })

    inputMessage.value = null //clears out value every single time we refresh
}

getNewKey() /*calls on function*/