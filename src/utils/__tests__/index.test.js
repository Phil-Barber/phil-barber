import { isFilmSlug, isBookSlug } from '../index';

const FILM_PATH = 'src/pages/films/some-film.md';
const BOOK_PATH = 'src/pages/books/some-book.md';

describe('isFilmSlug', () => {
  it.each([
    [FILM_PATH, true],
    [BOOK_PATH, false],
  ])('%s: is %s', (slug, expected) => {
    expect(isFilmSlug(slug)).toBe(expected);
  });
});

describe('isBookSlug', () => {
  it.each([
    [FILM_PATH, false],
    [BOOK_PATH, true],
  ])('%s: is %s', (slug, expected) => {
    expect(isBookSlug(slug)).toBe(expected);
  });
});
