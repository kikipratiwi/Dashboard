const toTitleCase = (str = ' ') => {
    // Remove special char
    const text = str.replace(/[^a-zA-Z0-9]/g, ' ')

    return text.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

export default toTitleCase
