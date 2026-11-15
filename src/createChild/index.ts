import { FileName } from '../data-store/file-name-enum';
import { dataStore } from '../data-store/index';
import {
  createChangeLog,
  createIndex,
  createLicense,
  createReadMe,
  createScripts,
  createTest,
  createTsconfig,
  createTsconfigTypes,
  eslintConfig,
  prettier,
  rollup,
  writeToFile,
} from '../utils/index';
import { createPackage } from './createPackage';
import { createRollupEg } from './createRollupEg';

/**    */
export function createChild() {
  const { dependencies: de } = dataStore.local;
  createPackage(); // 创建 package.json
  // 创建 typescript
  if (de.includes('typescript')) {
    createTsconfig(); // 创建 tsconfig.json
    createTsconfigTypes(); // 创建 tsconfig.types.json
  }
  rollup(); // 创建 rollup.config.js
  createRollupEg(); // 创建 rollup.config.eg.js
  createReadMe(); // 创建 README.md
  createLicense(); // 创建 LICENSE
  createIndex(); // 创建 index.ts
  createChangeLog(); // 创建 CHANGELOG.md
  if (de.includes('eslint')) eslintConfig(); // 创建 .eslintrc.js
  if (de.includes('prettier')) prettier(); // 创建 .prettierrc
  writeToFile(FileName.TODO, '# 代办\n\n'); // 创建 todo.md
  createScripts(); // 创建 scripts
  createTest(); // 创建测试文件
}
