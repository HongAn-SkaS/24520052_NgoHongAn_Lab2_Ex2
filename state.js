/**
 * Exercise 2: Custom useState Engine
 * Step 1: State Store and Cursor Reset
 */

const stateStore = [];
let stateCursor = 0;

function resetCursor() {
  stateCursor = 0;
}

let rerender = () => {};

function setRerender(callback) {
  rerender = callback;
}

function useState(initialValue) {
  const currentCursor = stateCursor;

  if (!(currentCursor in stateStore)) {
    stateStore[currentCursor] = initialValue;
  }

  function setState(newValue) {
    const previousValue = stateStore[currentCursor];

    stateStore[currentCursor] =
      typeof newValue === "function"
        ? newValue(previousValue)
        : newValue;

    rerender();
  }

  stateCursor++;

  return [stateStore[currentCursor], setState];
}