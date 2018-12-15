function lisasWorkbook(n, k, arr) {
    let page = 1;
    let specialProblems = 0;
    for (chapter of arr) {
        const chapterPages = Math.ceil(chapter / k);
        for (let problem = 1; problem <= chapter; problem++) {
            if (problem === Math.ceil(problem / k) + page - 1) {
                specialProblems++;
            }
        }
        page += chapterPages;
    }
    return specialProblems;
}
module.exports = lisasWorkbook;