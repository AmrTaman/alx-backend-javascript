export default function iterateThroughObject(reportWithIterator) {
  let formated = `${reportWithIterator[0]} `;
  reportWithIterator.shift();
  for (const employee of reportWithIterator) {
    formated += `| ${employee} `;
  }
  return formated.slice(0, -1);
}
