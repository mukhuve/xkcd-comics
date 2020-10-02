export class ComicModel {
  id: number;
  title: string;
  image: string;
  alt: string;
  date?: Date;

  constructor(obj: Record<string, any> = {}) {
    this.id = obj?.num;
    this.image = obj?.img;
    this.title = obj?.safe_title || obj?.title || '';
    this.alt = obj?.alt || `Comic image #${this.id}`;
    if (obj.year && obj.month && obj.day)
      this.date = new Date(+obj?.year, +obj?.month, +obj?.day);
  }
}
