
const randomN = () => Math.floor(Math.random() * 9)+1

const random = () => {

    return Array.from({length: 6}).reduce(acc => acc + randomN(),'')
}
const uid = () => {
    return String(new Date().getTime()) +random()
}

export default uid;