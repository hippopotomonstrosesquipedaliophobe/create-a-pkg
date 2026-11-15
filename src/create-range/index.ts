import { FileName } from '../data-store/file-name-enum';
import { dataStore } from '../data-store/index';
import {
  createLicense,
  createTsconfigBase,
  gitIgnore,
  markdown,
  prettier,
  writeToFile,
} from '../utils/index';
import { createAction } from './createAction';
import { createPackage } from './createPackage';
import { createScripts } from './createScripts';

/**  创建边界  */
export function createRange() {
  const { dependencies: de } = dataStore.local;
  createPackage(); // 创建 package.json
  // 创建 CI/CD
  if (de.includes('action')) {
    createAction(); // 创建 github action（`.github/workflows/发布.yml`）
    createScripts(); // 创建 scripts
  }
  // 创建 tsconfig.json
  if (de.includes('typescript')) createTsconfigBase('range');
  createReadMe(); // 创建 README.md
  createLicense('range'); // 创建 LICENSE
  if (de.includes('prettier')) prettier('range'); // 创建 .prettierrc
  markdown('range'); // 创建 .markdownlint.json
  gitIgnore('range'); // 创建 .gitignore
}
/**  构建嵌套的读我  */
function createReadMe() {
  writeToFile(
    FileName.README,
    `# 你会更改这里的内容的
    
毕竟，我猜你有很多话要说
记录下来，哪怕不会有人看见
  `,
    'range',
  );
}
