# merge-class

Effortlessly creates and combines className strings without style conflicts using `clsx` and `tailwind-merge`.

![npm](https://img.shields.io/npm/v/merge-class) ![build](https://img.shields.io/github/workflow/status/your-username/merge-class/CI) ![license](https://img.shields.io/npm/l/merge-class)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Installation

Using npm:

```bash
npm install -D merge-class
```

Using pnpm:

```bash
pnpm add -D merge-class
```

Using yarn:

```bash
yarn add -D merge-class
```

## Usage

Import `mc` from `merge-class`:

```typescript
import { mc } from 'merge-class';

const className = mc('bg-red-500', 'hover:bg-red-600', 'active:bg-red-700');
console.log(className);
```

## API

### mc(...inputs: ClassValue[]): string

Merges provided class values using `clsx` and `tailwind-merge`.

**Parameters**:

- `inputs`: Class values to merge.

**Returns**: Merged class string.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
