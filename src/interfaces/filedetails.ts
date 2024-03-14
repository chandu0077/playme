export interface Filedetails {
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  size: number;
  type: string;
  webkitRelativePath?: string;
}

export interface IAudio {
  title: string;
  data: string;
  size: number;
}
