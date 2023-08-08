import { BuildOptions, context, ServeOptions } from "esbuild";
import { cwd } from "process";
import { resolve } from "path";

import { options } from "./common";

const rootDir: string = cwd();
const publicDir: string = resolve(rootDir, "public");

const buildOptions: BuildOptions = {
  ...options,
  inject: ["./esbuild-config/livereload.ts"],
  metafile: true,
  outdir: `${publicDir}/js`,
  platform: "browser",
  plugins: [...options.plugins!],
  sourcemap: "inline",
  write: false,
};

const serveOptions: ServeOptions = {
  fallback: `${publicDir}/index.html`,
  host: "localhost",
  port: 1337,
  servedir: publicDir,
};

(async (): Promise<void> => {
  const esbuildContext = await context(buildOptions);
  const { host, port } = await esbuildContext.serve(serveOptions);

  await esbuildContext.watch();
  console.info("\x1b[32m%s\x1b[0m", `Running on http://${host}:${port}`);
})();
