import { mc } from './';

describe('mc function', () => {
  it('should combine class names into a single string', () => {
    expect(mc('class1', 'class2')).toBe('class1 class2');
  });

  it('should handle conditional classes correctly', () => {
    const condition = true;
    expect(mc('class1', condition && 'class2')).toBe('class1 class2');
  });

  it('should eliminate undefined and null values', () => {
    expect(mc('class1', undefined, 'class2', null)).toBe('class1 class2');
  });

  it('should merge duplicate classes and prioritize Tailwind utility classes', () => {
    expect(mc('p-4', 'p-2')).toBe('p-2');
  });

  it('should handle arrays of classes', () => {
    expect(mc(['class1', 'class2'], ['class3'])).toBe('class1 class2 class3');
  });

  it('should handle nested arrays of classes', () => {
    expect(mc(['class1', ['class2', 'class3']])).toBe('class1 class2 class3');
  });

  it('should process objects with boolean values', () => {
    expect(mc({ class1: true, class2: false, class3: true })).toBe('class1 class3');
  });

  it('should handle a mix of types', () => {
    const condition = false;
    expect(mc('class1', ['class2', { class3: true, class4: condition }])).toBe(
      'class1 class2 class3'
    );
  });

  it('should prioritize correctly with Tailwind utilities', () => {
    expect(mc('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });
});
