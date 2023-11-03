export interface IBase {
  firstResult?: number;
  maxResult?: number;
  createdAt?: NativeDate;
  updatedAt?: NativeDate;
  sort?: "ASC" | "DESC" | string;
}
