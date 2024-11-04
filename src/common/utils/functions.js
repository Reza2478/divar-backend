const IsTrue = (value) => ["true", 1, true].includes(value)
const IsFalse = (value) => ["false", 0, false].includes(value)

module.exports = {
    IsFalse,
    IsTrue
}