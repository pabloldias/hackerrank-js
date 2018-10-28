function designerPdfViewer(heights, word) {
    const maximumHeight = Array.from(word)
        .reduce((prev, curr) => Math.max(prev, heights[curr.charCodeAt() - 97]), 0);
    return maximumHeight * word.length;
}
module.exports = designerPdfViewer;