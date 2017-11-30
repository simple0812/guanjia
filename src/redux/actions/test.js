export const TEST_FOO = 'TEST_FOO';

export function testFooAction(ids) {
  return {
    type: TEST_FOO,
    data: ids,
  };
}

export function testAction(type, data) {
  return {
    type: type,
    data: data,
  };
}
