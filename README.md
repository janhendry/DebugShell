# `DebugShell`

A debugging tool for Web applications that helps developers easily track and visualize state and event data in the development process.

![img](./DebugShell.png)

---

## Key features

- **State and event tracking:**
  - Use `useDebug` to monitor component state.
  - Use `debug` to monitor events.
  - Use `debugStore` to monitor `stores` for [nanostores](https://github.com/nanostores/nanostores).
- **Developer-Friendly:** Easy to integrate, no changes to your app's structure. No provider or context required.

---

## Installation

```bash
npm install debug-shell@0.0.0-alpha.3.5
```

## How to use

### Side panel integration

Wrap your application with `<DebugShell>` to enable the debug shell as side panel:

```tsx
import React from 'react';
import { DebugShell } from 'debug-shell';

function App() {
  return (
    <DebugShell>
      <YourApp />
    </DebugShell>
  );
};
```

---

### Component integration

Integrate the `<DebugShell>` as component in your app. You can place it anywhere in your app:

```tsx
import React from 'react';
import { DebugShell } from 'debug-shell';

function App(){

  return (
    <div>
        <YourApp />
        <YourSidebar >
          <DebugShell />
        </YourSidebar>
    </div>
  );
};
```

---

### `useDebug` for state tracking

To monitor state, use the `useDebug` hook:

```tsx
import React from 'react';
import { useDebug } from 'debug-shell';

function MyComponent() {
  const userState = userState({
    name: 'TestUser',
    age: 23,
    email: 'test@test.com',
  });

  useDebug('userState', userState);

  return <p>Name: {userState.name}</p>;
};
```

---

### `debugValue` for event tracking

To monitor events, use the `debugValue` function:

```tsx
import React from 'react';
import { debug } from 'debug-shell';

function MyComponent() {
  const handleClick = (event) => {
    debug('onClickEvent', event);
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

### `debugStore` for store tracking from [nanostores](https://github.com/nanostores/nanostores).

The `debugStore` function can be used outside of React components to register nanostores:

```ts
import { atom } from 'nanostores';
import { debugStore } from 'debug-shell';

const counterStore = atom({ count: 0 })

debugStore("counterStore", counterStore)

setInterval(() => {
  counterStore.set({ count: counterStore.get().count + 1 })
}, 1e3)
```

## API Overview

### Components

| Component              | Description                                                                |
|------------------------|----------------------------------------------------------------------------|
| `<DebugShell />`        | Debugging tool for tracking state and events.                              |

### Hooks and functions

| API              | Description                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------|
| `debug`          | Function for tracking events.                                                                    |
| `debugStore`     | Function for tracking nanostores.                                                                |
| `useDebug`       | Hook for tracking state.                                                                         |

---
