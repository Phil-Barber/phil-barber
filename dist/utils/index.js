"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSrcMarkdown = exports.isBookSlug = exports.isFilmSlug = void 0;
/*
exports.isFilmSlug = (slug: string) => /\/films\//.test(slug);
exports.isBookSlug = (slug: string) => /\/books\//.test(slug);
exports.isSrcMarkdown = (slug: string) => /\/markdown\//.test(slug);
*/
function isFilmSlug(slug) {
    return /\/films\//.test(slug);
}
exports.isFilmSlug = isFilmSlug;
function isBookSlug(slug) {
    return /\/books\//.test(slug);
}
exports.isBookSlug = isBookSlug;
function isSrcMarkdown(slug) {
    return /\/markdown\//.test(slug);
}
exports.isSrcMarkdown = isSrcMarkdown;
//# sourceMappingURL=index.js.map