export default function findRepeatChar(k) {
    if (!k) {
        return ''
    }
    const record = {};
    let s = []
    //添加多一个undefined可以不用处理边界值
    s = s.concat(k.split(''), undefined)
    let maxAns = 0, currentAns = 1;
    let first = s[0];

    for (var index = 1; index < s.length; index++) {
        if (s[index] === first) {
            currentAns += 1
        } else {
            maxAns = Math.max(maxAns, currentAns)
            if (record[currentAns]) {
                record[currentAns].push(first)
            } else {
                record[currentAns] = [first]
            }
            currentAns = 1
        }
        first = s[index]
    }
    return { char: record[maxAns], repeats: maxAns }
}