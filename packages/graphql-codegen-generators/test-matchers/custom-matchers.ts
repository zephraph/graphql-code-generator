import { oneLine } from 'common-tags';

function toBySimilarStringTo(received: string, argument: string) {
  const strippedA = oneLine`${received}`;
  const strippedB = oneLine`${argument}`;

  if (strippedA === strippedB) {
    return {
      message: () => (
`expected 
 ${received}
 not to be similar (strip-indent) string to
 ${argument}`
      ),
      pass: true,
    };
  } else {
    return {
      message: () => (
`expected 
 ${received}
 to be similar (strip-indent) string to
 ${argument}`
      ),
      pass: false,
    };
  }
}

expect.extend({
  toBySimilarStringTo,
});