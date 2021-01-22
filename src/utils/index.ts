function testSlug(test: string, slug: string): boolean {
  return RegExp('/' + test + '/').test(slug);
}

export function isFilmSlug(slug: string): boolean {
  return testSlug('films', slug);
}
export function isBookSlug(slug: string): boolean {
  return testSlug('books', slug);
}
export function isBlogSlug(slug: string): boolean {
  return testSlug('blogs', slug);
}
export function isSrcMarkdown(slug: string): boolean {
  return /\/markdown\//.test(slug);
}
