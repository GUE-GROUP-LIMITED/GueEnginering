import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __workspaceRoot = path.resolve(__dirname, "..");

/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack: {
		// Allow Turbopack to resolve hoisted workspace dependencies from the monorepo root.
		root: __workspaceRoot,
	},
};

export default nextConfig;
