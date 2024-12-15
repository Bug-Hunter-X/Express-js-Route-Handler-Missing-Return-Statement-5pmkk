# Express.js Route Handler Missing Return Statement
This repository demonstrates a common error in Express.js route handlers: missing a `return` statement within an `if` condition.  This can lead to unexpected behavior because subsequent code might execute even when the condition evaluates to true and an error handling response should have been sent.

The `bug.js` file contains the problematic code.  `bugSolution.js` provides the corrected version.