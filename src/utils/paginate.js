import _ from "lodash";

export function paginate(items, pagaNumber, pageSize) {
  const startIndex = (pagaNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
