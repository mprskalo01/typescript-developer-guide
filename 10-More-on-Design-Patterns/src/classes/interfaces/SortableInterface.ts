export interface Sortable {
  length: number;
  shouldSwap(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
