// Utility functions for computing GWA and remarks

/**
 * Compute the General Weighted Average (GWA) from an array of grades.
 * @param {number[]} grades - Array of numeric grades
 * @returns {number} GWA rounded to 2 decimal places
 */
export function computeGWA(grades) {
  if (!grades.length) return 0;
  const sum = grades.reduce((acc, g) => acc + g, 0);
  return +(sum / grades.length).toFixed(2);
}

/**
 * Get remarks based on GWA value.
 * @param {number} gwa
 * @returns {string} Remarks
 */
export function getRemarks(gwa) {
  if (gwa === 0) return '';
  if (gwa <= 1.5) return 'With Highest Honors';
  if (gwa <= 1.75) return 'With High Honors';
  if (gwa <= 2.0) return 'With Honors';
  if (gwa <= 3.0) return 'Passed';
  return 'Failed';
} 