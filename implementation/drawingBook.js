function drawingBook(pagesCount, pageNumber) {
    const fromLeft = Math.floor(pageNumber / 2);
    const lastPage = (pagesCount % 2 === 0) ? 1 : 0;
    const fromRight = Math.floor((pagesCount - pageNumber + lastPage) / 2);
    return Math.min(fromLeft, fromRight);
}
module.exports = drawingBook;