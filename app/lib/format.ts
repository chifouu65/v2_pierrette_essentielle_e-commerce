export function splitDescription(description: string) {
    const regex = /([.?!:;])/;
    const arr = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < description.length; i++) {
        if (regex.test(description[i])) {
            end = i + 1;
            arr.push(description.slice(start, end));
            start = end;
        }
    }
    return arr;
}