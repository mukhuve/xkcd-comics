import { ComicModel } from '@/models/comic';
export type LoadCommand = 'random' | 'prev' | 'next' | 'first' | 'last';
export interface State {
  last: number;
  comic?: ComicModel;
  loading?: boolean;
  ratings?: Record<string, number>;
}
