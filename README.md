# `DebugShell` debugging tool to track and visualize state and events in React applications

`DebugShell` is a debugging tool for Web applications that helps developers easily track and visualize state and event data in the development process.

![img](./DebugShell.png)

---

## How to Use

### Side Panel Integration

Wrap your application with `<DebugShellSidePanel>` to enable a debugging side panel:

```tsx
import React from 'react';
import { DebugShellSidePanel } from 'debug-shell';

const App = () => {
  return (
    <DebugShellSidePanel>
      <YourApp />
    </DebugShellSidePanel>
  );
};
```

---

### Component Integration

Add a debug Shell anywhere in your app to render JSON or any state for debugging purposes:

```tsx
import React from 'react';
import { DebugShell } from 'debug-shell';

const App = () => {
  const userState = {
    name: 'TestUser',
    age: 23,
    email: 'test@test.com',
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <DebugShell json={userState} />
    </div>
  );
};
```

---

### Hook for State Tracking

Use the `useDebugValue` hook to track specific state values in your app:

```tsx
import React from 'react';
import { useDebugValue } from 'debug-shell';

const MyComponent = () => {
  const userState = {
    name: 'TestUser',
    age: 23,
    email: 'test@test.com',
  };

  useDebugValue('userState', userState);

  return <p>Name: {userState.name}</p>;
};
```

---

### Function for Logging Custom Data

Use the `debugValue` function to log specific events or custom data for debugging:

```tsx
import React from 'react';
import { debugValue } from 'debug-shell';

const MyComponent = () => {
  const handleClick = (event) => {
    debugValue('onClickEvent', event);
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

### **Key Features**

- **State and Event Tracking:**
  - Use `useDebugValue` to monitor and log component state.
  - Use `debugValue` to log custom events and data.
- **Developer-Friendly:** Easy to integrate, no changes to your app's structure.

---

### **Installation**

```bash
npm install debug-shell
```

---

### **API Overview**

#### **Components**

| Component              | Description                                                                |
|------------------------|----------------------------------------------------------------------------|
| `<DebugShell />`        | Component                            |
| `<DebugShellSidePanel>` | Wrapper Component                       |

#### **Hooks and Functions**

| API              | Description                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------|
| `useDebugValue`  | Hook for tracking state.                                        |
| `debugValue`     | Function for logging custom data or events to the debugging tool.                               |

---
