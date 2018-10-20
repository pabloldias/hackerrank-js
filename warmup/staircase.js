function staircase(n) {
    let lines = [];
    for (var i = 1; i <= n; i++) {
        let line = '';
        for (var j = 1; j <= n; j++) {
            if (j <= (n - i)) {
                line += ' ';
            } else {
                line += '#';
            }
        }
        lines.push(line);
    }
    return lines.join('\n')
}
module.exports = staircase;