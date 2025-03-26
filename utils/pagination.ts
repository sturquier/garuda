export type TPaginatedResource<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export const initialPaginatedResource = <T>(): TPaginatedResource<T> => ({
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
});
