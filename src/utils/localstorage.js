const getContacts = () => {
    return (JSON.parse(localStorage.getItem("contacts")) || [])
}

const setContacts = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
}

export { getContacts, setContacts }
