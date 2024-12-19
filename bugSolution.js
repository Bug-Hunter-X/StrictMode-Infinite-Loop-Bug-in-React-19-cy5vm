```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage: effect only runs once after initial render
    setCount(count + 1);
  }, [count]); // Add count to the dependency array

  return <div>Count: {count}</div>;
}

export default MyComponent;
```