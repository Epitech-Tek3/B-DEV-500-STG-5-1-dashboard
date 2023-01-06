export const isEmpty = (string) => !string || string.length === 0;

export const elide = (string, length = 140) => {
  if (isEmpty(string)) {
    return "...";
  }

  if (string.length < length) {
    return string.trim();
  }

  return `${string.substring(0, length)}...`;
};

export const toDate = (string) => {
  const date = new Date(string);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

export const pluralize = (text: string, count: number) => (count > 1 || count === 0 ? `${text}s` : text);

export const isStringEmpty = (text: string) => {
  return !text || text === "" || text.trim() === "";
};

export const isEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const getObject = (theObject: object, keyName: string, value: string) => {
  let result = null;
  if (theObject instanceof Array) {
    for (let i = 0; i < theObject.length; i++) {
      result = getObject(theObject[i], keyName, value);
      if (result) {
        break;
      }
    }
  } else {
    for (const prop in theObject) {
      if (prop == keyName) {
        if (theObject[prop] == value) {
          return theObject;
        }
      }
      if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
        result = getObject(theObject[prop], keyName, value);
        if (result) {
          break;
        }
      }
    }
  }
  return result;
};

export const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export const isUUIDV4 = (id: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
