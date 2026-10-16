# TASK DECOMPOSITION — Exercise 2

## Objective
Build a custom reactive state engine using closures and root event delegation, then integrate it into a Task Manager application.

## Work Breakdown Structure (WBS)

| ID | Task | Description | Git Milestone |
|---|---|---|---|
| T-01 | State Store | Implement `stateStore` and `resetCursor` to manage state positions. | `feat(state): implement stateStore and resetCursor engine` |
| T-02 | Reactive State | Implement `useState`, state setters, and rerender dispatching. | `feat(state): implement reactive useState dispatcher` |
| T-03 | Event Delegation | Attach a single root click listener to handle actions from child elements. | `feat(events): attach root event delegation listener` |
| T-04 | HTML & CSS | Create the semantic HTML structure and responsive Task Manager interface. | Included in UI milestone |
| T-05 | Task Manager | Integrate state and event handling; implement add, complete, delete, and task filters. | `feat(ui): assemble reactive todo application` |
| T-06 | Functional Testing | Verify state updates and all Task Manager interactions. | — |
| T-07 | Event Audit | Inspect DevTools to verify click handling uses root delegation without listeners on task buttons. | — |
| T-08 | Final Review | Check console errors, Git history, and remote synchronization. | — |

## Constraints
- Use vanilla HTML5, CSS, and modern JavaScript (ES6+).
- Do not use frameworks, jQuery, Bootstrap, Tailwind, or external script CDNs.
- Use `const` by default; use `let` only when reassignment is necessary.
- Do not use `innerHTML` to render task content; use DOM methods and `textContent`.
- Use root event delegation for task-button click actions.
- Use semantic HTML and verify the layout at a 375px viewport.

## Acceptance Criteria
- [ ] `stateStore` and `resetCursor` work correctly.
- [ ] `useState` updates state and triggers rerendering.
- [ ] Root event delegation handles task actions.
- [ ] Users can add, complete, undo, delete, and filter tasks.
- [ ] No JavaScript errors occur during normal use.
- [ ] No individual click listeners are attached to task buttons.
- [ ] All four required Git milestone commits exist.
- [ ] All changes are pushed to the remote repository.
