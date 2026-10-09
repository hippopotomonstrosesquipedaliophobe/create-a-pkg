/**
 * @module @create-a-npm/build-dependencies
 * @file build-data.js
 * @description 构建依赖版本数据
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-02-01 00:32
 * @version 1.2.1
 * @lastModified 2026-10-02 13:18
 */

import { getPackageJsonSync } from '@vvi/node';
import { isNull } from '@vvi/is';
import { writeFileSync } from 'node:fs';

const pack = getPackageJsonSync();

if (isNull(pack)) {
  console.log('没有找到包配置文件');
} else {
  const { content } = pack;
  const _v = content.version; // 版本号
  const isIncludePreTag = _v.includes('-'); // 是否有预发布标签
  const versionInfo = _v.split('-'); // 版本信息
  const preInfo = versionInfo[1]?.split('.');
  const preName = preInfo?.[0];
  const version = {
    version: _v,
    isIncludePreTag,
    preName,
  };

  const dependencies = {
    ...content.dependencies,
    ...content.devDependencies,
  };

  writeFileSync(
    'src/data-store/dependencies-version.ts',
    `/** 当前的依赖信息 */
export const deLi: Record<string, string>  = ${JSON.stringify(dependencies, null, 2)};

/** 包版本信息  */
export const pkgVersion: {
  /** 当前应用程序的版本 */
  version: string;
  /** 是否包含预发布标识 */
  isIncludePreTag: boolean;
  /** 预发布标识 */
} = ${JSON.stringify(version, null, 2)};

/** 打包时间 */
export const buildTime: number = ${Date.now()};
`,
  );
}
