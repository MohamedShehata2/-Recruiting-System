export interface IQuestion {
  id: number;
  title: string;
  Answer1: string;
  Answer2: string;
  Answer3: string;
  RightAnswer: string;
}
export interface IPaginatedConfigQuestion {
  data: IQuestion[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
