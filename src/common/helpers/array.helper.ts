export const getLongestString = (strings: string[]): string =>
  strings.reduce((a, b) => {
    let max = a;

    if (a && b) {
      max = a?.length > b?.length ? a : b;
    }

    return max;
  });
