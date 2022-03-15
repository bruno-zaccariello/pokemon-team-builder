export function urlParamBuilder<T>(url: string, params: T): string {
  const entries = Object.entries(params);

  if (entries.length > 0) {
    url += '?';
    entries.map(([key, value], index) => {
      url += `${key}=${value}`;
      if (index < entries.length) {
        url += '&';
      }
    });
  }

  return url;
}

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
