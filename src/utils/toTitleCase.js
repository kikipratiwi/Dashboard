const toTitleCase = (str = ' ') => {
    // Remove title prefix
    const text =
        str.includes('_') || str.includes('-')
            ? str
                  .replace(/[^a-zA-Z0-9]/g, ' ')
                  .split(' ')
                  .slice(1)
                  .join(' ')
            : str

    return text.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

export default toTitleCase
