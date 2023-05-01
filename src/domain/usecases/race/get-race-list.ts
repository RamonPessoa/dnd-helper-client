export interface IRaceListItem {
  index: string;
  name: string;
  url: string;
}

export interface GetRaceList<R> {
  getRaceList: () => Promise<R>;
}
