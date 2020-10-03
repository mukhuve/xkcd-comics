import { ComicModel } from '@/models/comic';
export const comicMock: ComicModel = new ComicModel({
  num: 4242,
  day: '18',
  month: '06',
  year: '1993',
  title: 'Test comic title',
  // eslint-disable-next-line @typescript-eslint/camelcase
  safe_title: 'Test comic title',
  img: 'https://picsum.photos/100/400',
});
