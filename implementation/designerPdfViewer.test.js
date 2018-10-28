const designerPdfViewer = require('./designerPdfViewer');

test('testcase 0', () => {
    expect(designerPdfViewer([
        1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
    ], 'abc')).toBe(9);
});

test('testcase 1', () => {
    expect(designerPdfViewer([
        1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7
    ], 'zaba')).toBe(28);
});