// возвращает сумму элементов массива
export function arraySum(arr: number[]): number {
  let sum: number = 0
  return  arr.reduce((acc: number = 0, el) => acc + el, sum)
}

// возвращает исходную строку в Title Case
export function toTitleCase(str: string): string {
  return str.toUpperCase()
}

// возвращает Promise, который зарезолвит true, если b больше чем a, и зареджектит, если наоборот
export function promiseCompare(a: number, b: number): Promise<true> {
  return new Promise((resolve, reject) => {
    if (b > a) {
      resolve(true)
    }
    reject(false);
  });
}

export async function asyncCompare(): Promise<true> {
  let a: number = 10;
  let b: number = 5;
  let res: any = false;

  while (res !== true) {
    try {
      res = promiseCompare(a, b);
    }
    catch (e) {
      b++;
    }
  }

  return res;
}
