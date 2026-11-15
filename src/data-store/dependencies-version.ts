/** 当前的依赖信息 */
export const deLi: Record<string, string>  = {
  "@eslint/js": "^9.39.5",
  "@rollup/plugin-commonjs": "^29.0.3",
  "@rollup/plugin-json": "^6.1.0",
  "@rollup/plugin-node-resolve": "^16.0.3",
  "@rollup/plugin-terser": "^1.0.2",
  "@rollup/plugin-typescript": "^12.3.1",
  "@types/node": "^26.6.6",
  "@vvi/check-version": "^2.0.0",
  "@vvi/command": "^5.0.0",
  "@vvi/is": "^3.0.0",
  "@vvi/log": "^2.0.0",
  "@vvi/node": "^6.0.0",
  "@vvi/pen": "^4.0.0",
  "@vvi/pen-static": "^2.0.0",
  "@vvi/rollup-external": "^2.0.0",
  "@vvi/table": "^0.3.0",
  "@vvi/utils": "^3.0.0",
  "eslint": "^9.39.5",
  "eslint-config-prettier": "^10.1.8",
  "eslint-import-resolver-typescript": "^4.4.5",
  "eslint-plugin-import": "^2.32.0",
  "eslint-plugin-jsdoc": "^65.4.7",
  "eslint-plugin-jsonc": "^3.4.2",
  "eslint-plugin-promise": "^7.3.0",
  "eslint-plugin-unused-imports": "^4.4.1",
  "globals": "^17.14.0",
  "gvv": "^2.0.0",
  "husky": "^9.1.7",
  "jja": "^3.0.0",
  "lint-staged": "^17.6.0",
  "pjj": "^2.0.0",
  "prettier": "^3.10.1",
  "rollup": "^4.68.3",
  "rollup-plugin-cleanup": "^3.2.1",
  "rollup-plugin-copy": "^3.5.0",
  "rollup-plugin-typescript2": "^0.37.0",
  "tslib": "^2.9.1",
  "typescript": "^6.0.3",
  "typescript-eslint": "^8.72.2",
  "vjj": "^2.0.0"
};

/** 包版本信息  */
export const pkgVersion: {
  /** 当前应用程序的版本 */
  version: string;
  /** 是否包含预发布标识 */
  isIncludePreTag: boolean;
  /** 预发布标识 */
} = {
  "version": "2.0.0",
  "isIncludePreTag": false
};

/** 打包时间 */
export const buildTime: number = 1794753344362;
