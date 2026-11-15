import { pathJoin, writeJsonFileSync, getPackageJsonSync } from '@vvi/node';
import { isNull } from '@vvi/is';
import { dirname } from 'node:path';

const packageJsonResponse = getPackageJsonSync();

if (isNull(packageJsonResponse)) {
  throw new RangeError('未能识别配置文件 package.json');
}

let packageJson = packageJsonResponse.content;
// 移除冗余的键
[
  'scripts',
  'lint-staged',
  'private',
  'dependencies',
  'jja',
  'type',
  'packageManager',
].forEach(key => delete packageJson[key]);

packageJson = {
  ...packageJson,
  author: {
    name: '泥豆君',
    email: 'Mr.MudBean@outlook.com',
    url: 'https://mudbean.cn',
  },
  description: '一个简单的代码模板库',
  license: 'MIT',
  files: ['bin.js', 'LICENSE', 'README.md', 'CHANGELOG.md'],
  keywords: ['crate a npm', 'create a pkg'],
  homepage: 'https://npms.gleanings.cn/create-a-npm',
  bugs: {
    url: 'https://github.com/hippopotomonstrosesquipedaliophobe/create-a-pkg/issues',
    email: 'MudBean@outlook.com',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/hippopotomonstrosesquipedaliophobe/create-a-pkg.git',
  },
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
  },
  bin: {
    'create-a-npm': 'bin.js',
  },
  engines: {
    // 新增：声明 Node.js 兼容版本
    node: '>=18.0.0',
  },
  buildTime: Date.now(),
};

// 写入 dist/package.json
{
  writeJsonFileSync(
    pathJoin(dirname(packageJsonResponse.path), './dist/package.json'),
    packageJson,
  );
}
