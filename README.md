# merge-class

Effortlessly creates and merges className strings without style conflicts using `clsx` and `tailwind-merge`.

![npm](https://img.shields.io/npm/v/merge-class) ![license](https://img.shields.io/npm/l/merge-class)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)

## Installation

Using npm:

```bash
npm i merge-class
```

Using pnpm:

```bash
pnpm add merge-class
```

Using yarn:

```bash
yarn add merge-class
```

## Usage

Import `mc` from `merge-class`:

```typescript
import { mc } from 'merge-class'

const className = mc(
  'bg-green-500',
  'hover:bg-green-600',
  'active:bg-green-700'
)
console.log(className) // output: 'bg-green-500 hover:bg-green-600 active:bg-green-700'
```

## Tests

The `mc` (merge class) function is designed to combine class names into a single string, handling various cases such as conditional classes, undefined/null values, duplicates, arrays, nested arrays, and objects with boolean values. It also prioritizes Tailwind utility classes correctly.

### Test Cases

#### Combine Class Names

- **Description**: Should combine class names into a single string.
- **Test**:

  ```javascript
  expect(mc('font-bold', 'w-4')).toBe('font-bold w-4')
  ```

#### Handle Conditional Classes

- **Description**: Should handle conditional classes correctly.
- **Test**:

  ```javascript
  const condition = true
  expect(mc('font-bold', condition && 'w-4')).toBe('font-bold w-4')
  ```

#### Eliminate Undefined and Null Values

- **Description**: Should eliminate undefined and null values.
- **Test**:

  ```javascript
  expect(mc('font-bold', undefined, 'w-4', null)).toBe('font-bold w-4')
  ```

#### Merge Duplicate Classes with Tailwind Utility Classes Priority

- **Description**: Should merge duplicate classes and prioritize Tailwind utility classes.
- **Test**:

  ```javascript
  expect(mc('p-4', 'p-2')).toBe('p-2')
  ```

#### Handle Arrays of Classes

- **Description**: Should handle arrays of classes.
- **Test**:

  ```javascript
  expect(mc(['font-bold', 'w-4'], ['px-2'])).toBe('font-bold w-4 px-2')
  ```

#### Handle Nested Arrays of Classes

- **Description**: Should handle nested arrays of classes.
- **Test**:

  ```javascript
  expect(mc(['font-bold', ['w-4', 'px-2']])).toBe('font-bold w-4 px-2')
  ```

#### Process Objects with Boolean Values

- **Description**: Should process objects with boolean values.
- **Test**:

  ```javascript
  expect(mc({ 'font-bold': true, 'w-4': false, 'px-2': true })).toBe(
    'font-bold px-2'
  )
  ```

#### Handle a Mix of Types

- **Description**: Should handle a mix of types.
- **Test**:

  ```javascript
  const condition = false
  expect(mc('font-bold', ['w-4', { 'px-2': true, 'h-5': condition }])).toBe(
    'font-bold w-4 px-2'
  )
  ```

#### Prioritize Correctly with Tailwind Utilities

- **Description**: Should prioritize correctly with Tailwind utilities.
- **Test**:

  ```javascript
  expect(mc('text-green-500', 'text-blue-500')).toBe('text-blue-500')
  ```
