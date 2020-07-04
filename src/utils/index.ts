export function isFilmSlug(slug: string): boolean {
  return /\/films\//.test(slug);
}
export function isBookSlug(slug: string): boolean {
  return /\/books\//.test(slug);
}
export function isSrcMarkdown(slug: string): boolean {
  return /\/markdown\//.test(slug);
}
