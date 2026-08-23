import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

/** Flat ESLint config (ESLint 9 + eslint-config-next 16). */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  { ignores: ['.next/**', 'node_modules/**', 'out/**'] },
];

export default eslintConfig;
