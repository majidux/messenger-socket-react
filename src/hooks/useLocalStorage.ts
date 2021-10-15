import { useEffect, useState } from "@utils";

const PREFIX = "prefix-";

export function useLocalStorage(key: any, initialValue?: any) {
  const [value, setValue] = useState(initialValue);
  const prefixKey = `${PREFIX} ${key}`;
  const handleValue = (guid: string) => {
    setValue(guid);
  };

  useEffect(() => {
    const jsonValue: any = localStorage?.getItem(prefixKey);
    if (jsonValue) setValue(JSON?.parse(jsonValue));
  }, []);

  useEffect(() => {
    if (value) localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  return [value, handleValue];
}
