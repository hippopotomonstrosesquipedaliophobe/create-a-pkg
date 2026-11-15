import type { PackageJson } from '@vvi/node';
import { FileName } from '../data-store/file-name-enum';
import { dataStore } from '../data-store/index';
import { appendPackageScripts, writeToFile } from '../utils/index';

/**  构建 package.json  */
export function createPackage() {
  /**  package.json 内容 */
  const pkgInfo: PackageJson = {
    name: dataStore.name,
    version: '0.0.0',
    description: '写点什么吧，空白只本应存在于虚空',
  };

  appendPackageScripts.call(pkgInfo); // 添加其他属性

  writeToFile(FileName.PACKAGE_JSON, JSON.stringify(pkgInfo, null, 2)); // 创建 package.json 文件
}
