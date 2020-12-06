let darkButton = document.querySelector(".darktheme")
darkButton.addEventListener('click', changetheme)

let cancelButton = document.querySelector(".cancel")
cancelButton.addEventListener('click', removeStuff)

let saveButton = document.querySelector(".save")
saveButton.addEventListener('click', addNote)

let newnoteButton = document.querySelector(".newnote")
newnoteButton.addEventListener('click', addStuff)


let textbox = document.querySelector('.placeholder')

let notesArray = {
    note0:{
        title:"note one", 
        body:"some text 1"
    },
    note1:{
        title:"note one", 
        body:"some text 2"
    }
}
let notenum = 2

function changetheme(){
    darkButton.classList.toggle('togdark')
    if (darkButton.innerHTML == 'Light Theme') {
        darkButton.innerHTML = 'Dark Theme'        
    }
    else if (darkButton.innerHTML == 'Dark Theme') {
        darkButton.innerHTML = 'Light Theme'        
    }
    saveButton.classList.toggle('togsave')
    cancelButton.classList.toggle('togcancel')
    newnoteButton.classList.toggle('tognew')
    document.body.querySelector("article").classList.toggle('togart')
    document.body.querySelector("aside").classList.toggle('togaside')
    document.body.classList.toggle('darkbody')
}

function removeStuff() {
    cancelButton.style.display = 'none'
    saveButton.style.display = 'none'
    document.querySelector('.placeholder').style.display = 'none'
}

function addStuff() {
    cancelButton.style.display = ''
    saveButton.style.display = ''
    textbox.style.display = ''
    textbox.value = ''
}

function addNote() {
    let note = textbox.value
    let cutline = 0
    let cutNote = note.split('\n')
    let titlenote = ''
    let bodynote = ''
    for (let i in cutNote) {
        if (cutline == 0){
            titlenote = cutNote[cutline]
        }
        else if (cutline == 1){
            bodynote = bodynote + cutNote[cutline]
        }
        else {
            bodynote = bodynote + '\n' + cutNote[cutline]
        }
        cutline += 1
    }

    notesArray[`note`+notenum] = { 
        'title':`${titlenote}`, 
        'body': `${bodynote}`
    }
    console.log(notesArray)

    let li = document.createElement("li")
    let ul = document.querySelector('ul')

    li.innerHTML = `${titlenote}`;
    li.id = `note${notenum}`
    ul.appendChild(li);    
    document.getElementById(`note${notenum}`).addEventListener('click', getNote)
    notenum += 1
}

function getNote() {
    textbox.value = notesArray[this.id]['title']+'\n'+notesArray[this.id]['body']
}