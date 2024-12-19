# StrictMode Infinite Loop Bug in React 19

This repository demonstrates a subtle bug that can occur in React 19 when using StrictMode.  The bug involves an infinite loop caused by improperly using the `useEffect` hook.

## Bug Description
The `bug.js` file contains a component that attempts to increment a state variable within a `useEffect` hook without specifying a dependency array. This leads to an infinite loop because the state update triggers a re-render, which in turn triggers the `useEffect` again, resulting in a continuous loop of state updates.

## Solution
The `bugSolution.js` demonstrates the correct usage of the `useEffect` hook.  By adding the state variable `count` to the dependency array, the effect only runs once after the initial render.