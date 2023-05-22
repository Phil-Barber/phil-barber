"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSrcMarkdown = exports.isBlogSlug = exports.isBookSlug = exports.isFilmSlug = void 0;
function testSlug(test, slug) {
    return RegExp('/' + test + '/').test(slug);
}
function isFilmSlug(slug) {
    return testSlug('films', slug);
}
exports.isFilmSlug = isFilmSlug;
function isBookSlug(slug) {
    return testSlug('books', slug);
}
exports.isBookSlug = isBookSlug;
function isBlogSlug(slug) {
    return testSlug('blogs', slug);
}
exports.isBlogSlug = isBlogSlug;
function isSrcMarkdown(slug) {
    return /\/markdown\//.test(slug);
}
exports.isSrcMarkdown = isSrcMarkdown;
//# sourceMappingURL=index.js.map