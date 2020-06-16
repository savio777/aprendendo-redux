export function toggleCategory(category) {
  return {
    type: 'SET_CATEGORY_ACTIVE',
    category,
  };
}
