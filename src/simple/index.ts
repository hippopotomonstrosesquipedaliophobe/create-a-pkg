import { dataStore } from '../data-store/index';
import {
  createChangeLog,
  createIndex,
  createLicense,
  createReadMe,
  createScripts,
  createTest,
  createTsconfig,
  createTsconfigBase,
  createTsconfigTypes,
  eslintConfig,
  gitIgnore,
  markdown,
  prettier,
  rollup,
} from '../utils/index';
import { createAction } from './createAction';
import { createPub } from './createPub';
import { createRollupEg } from './createRollupEg';
import { packageJson } from './package';

/**
 * 导出 package 的主文件
 */
export function packageIndex() {
  const { dependencies: de } = dataStore.local;
  // 创建 action
  if (de.includes('action')) {
    createAction(); // 创建 github action 文件（ 创建 .github/workflows/main.yml 文件）
    createPub(); // 创建 pub.sh
  }
  // 创建 tsconfig.json
  if (de.includes('typescript')) {
    tsconfigJson();
  }
  rollup(); // 创建 rollup.config.js
  createRollupEg(); // 创建 rollup.config.eg.js
  createReadMe(); // 创建 README.md
  packageJson(); // 创建 package.json
  createLicense(); // 创建 LICENSE
  createIndex(); // 创建 index.ts
  if (de.includes('eslint')) eslintConfig(); // 创建 .eslintrc.json
  if (de.includes('prettier')) prettier(); // 创建 .prettierrc
  markdown(); // 创建 .markdownlint.json
  createChangeLog(); // 创建 CHANGELOG.md
  gitIgnore(); // 创建 .gitignore
  createScripts(); // 创建 scripts
  createTest(); // 创建 tests
}
/** 将创建三个 tsconfig 文件的方法合并 */
export function tsconfigJson(): void {
  createTsconfigBase();
  createTsconfig();
  createTsconfigTypes();
}
