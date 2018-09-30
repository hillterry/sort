import { swap } from './util/'
export function allRange(arr) {
    let a = [];
    let b = [];
    function recursion(arr, path, res) {
        if (!arr.length) {
            res.push(path)
            return
        }
        arr.forEach((v, idx) => {
            let t = arr.slice()
            let p = path.slice()
            t.splice(idx, 1)
            p.push(v)
            recursion(t, p, res)
        })
    }
    recursion(arr, a, b)
    return b
}

export function allRange() {
    
}