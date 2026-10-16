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

  if (stateStore[currentCursor] === undefined) {
    stateStore[currentCursor] = initialValue;
  }

  function setState(newValue) {
    if (typeof newValue === "function") {
      stateStore[currentCursor] = newValue(stateStore[currentCursor]);
    } else {
      stateStore[currentCursor] = newValue;
    }

    rerender();
  }

  stateCursor++;

  return [stateStore[currentCursor - 1], setState];
}