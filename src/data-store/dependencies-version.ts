/** 当前的依赖信息 */
export const deLi: Record<string, string> = {
  '@eslint/js': '^9.39.5',
  '@rollup/plugin-commonjs': '^29.0.3',
  '@rollup/plugin-json': '^6.1.0',
  '@rollup/plugin-node-resolve': '^16.0.3',
  '@rollup/plugin-terser': '^1.0.0',
  '@rollup/plugin-typescript': '^12.3.0',
  '@types/node': '^26.6.3',
  '@vvi/check-version': '^1.1.3',
  '@vvi/command': '^4.1.0',
  '@vvi/is': '^2.0.8',
  '@vvi/log': '^1.1.8',
  '@vvi/node': '^5.2.0',
  '@vvi/pen': '^3.0.5',
  '@vvi/pen-static': '^1.1.6',
  '@vvi/rollup-external': '^1.2.4',
  '@vvi/table': '^0.2.5',
  '@vvi/utils': '^2.1.2',
  eslint: '^9.39.5',
  'eslint-config-prettier': '^10.1.8',
  'eslint-import-resolver-typescript': '^4.4.5',
  'eslint-plugin-import': '^2.32.0',
  'eslint-plugin-jsdoc': '^63.3.3',
  'eslint-plugin-jsonc': '^3.4.2',
  'eslint-plugin-promise': '^7.3.0',
  'eslint-plugin-unused-imports': '^4.4.1',
  globals: '^17.13.0',
  gvv: '^1.1.1',
  husky: '^9.1.7',
  jja: '^2.5.6',
  'lint-staged': '^17.6.0',
  pjj: '^1.0.8',
  prettier: '^3.9.9',
  rollup: '^4.63.6',
  'rollup-plugin-cleanup': '^3.2.1',
  'rollup-plugin-copy': '^3.5.0',
  'rollup-plugin-typescript2': '^0.37.0',
  tslib: '^2.8.1',
  typescript: '^6.0.3',
  'typescript-eslint': '^8.71.0',
  vjj: '^1.1.1',
};

/** 包版本信息  */
export const pkgVersion: {
  /** 当前应用程序的版本 */
  version: string;
  /** 是否包含预发布标识 */
  isIncludePreTag: boolean;
  /** 预发布标识 */
} = {
  version: '1.4.0',
  isIncludePreTag: false,
};

/** 打包时间 */
export const buildTime: number = 1791121815509;
