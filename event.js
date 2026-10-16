/**
 * Exercise 2: Root Event Delegation
 * Step 3: Attach root event delegation listener
 */

function attachRootEventDelegation(root, handler) {
  root.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");

    if (!target || !root.contains(target)) {
      return;
    }

    handler({
      action: target.dataset.action,
      id: target.dataset.id ?? null,
      event
    });
  });
}