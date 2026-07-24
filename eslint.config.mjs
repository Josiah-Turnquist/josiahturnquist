import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

// eslint-config-next 16 ships flat configs directly — no FlatCompat needed.
const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: ['.next/**', 'out/**', 'node_modules/**'] },
];

export default config;
