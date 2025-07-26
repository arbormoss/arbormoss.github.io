function getcharacter() {
    return {
        name: document.getElementById("name").value,
        ancestry: document.getElementById("ancestry").value,
        background: document.getElementById("background").value,
        bonds: document.getElementById("bonds").value,
        str: document.getElementById("str").value,
        dex: document.getElementById("dex").value,
        wis: document.getElementById("wis").value,
        wil: document.getElementById("wil").value,
        ac: document.getElementById("ac").value,
        hp: document.getElementById("hp").value,
        maxhp: document.getElementById("maxhp").value,
        slots: document.getElementById("slots").value,
        items: document.getElementById("items").value,
        notes: document.getElementById("notes").value,
    }
}

function save() {
    character = getcharacter()

    document.cookie = JSON.stringify(character)
}

function savefile() {
    character = getcharacter()
    
    document.cookie = JSON.stringify(character)

    var tmplink = document.createElement("a")
    var blob = new Blob([JSON.stringify(character)], {type: "text/plain"})

    tmplink.setAttribute('href', URL.createObjectURL(blob))
    tmplink.setAttribute("download", character.name + ".glaive")
    tmplink.click();

    URL.revokeObjectURL(tmplink.href);
}


    
function load(character) {
    document.getElementById("name").value = character.name
    document.getElementById("ancestry").value = character.ancestry
    document.getElementById("background").value = character.background
    document.getElementById("bonds").value = character.bonds
    document.getElementById("str").value = character.str
    document.getElementById("dex").value = character.dex
    document.getElementById("wis").value = character.wis
    document.getElementById("wil").value = character.wil
    document.getElementById("ac").value = character.ac
    document.getElementById("hp").value = character.hp
    document.getElementById("maxhp").value = character.maxhp
    document.getElementById("slots").value = character.slots
    document.getElementById("items").value = character.items
    document.getElementById("notes").value = character.notes
}
