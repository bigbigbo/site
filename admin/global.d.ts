interface DvaAction<T> {
  type: string;
  payload?: T;
}

interface Window {
  dispatch<T>(action: DvaAction<T>): void;
}
