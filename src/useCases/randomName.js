

function randomName() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5);
}

module.exports = { randomName }