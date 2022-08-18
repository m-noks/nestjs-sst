import {MyStack} from "./MyStack";
import {App} from "@serverless-stack/resources";

export default function (app: App) {
    app.setDefaultFunctionProps({
        runtime: "nodejs16.x",
        srcPath: "services",
        bundle: {
            externalModules: ["@nestjs/websockets", "@nestjs/microservices", "cache-manager"],
            esbuildConfig: {
                plugins: "esbuild.js",
            },
        },
    });
    app.stack(MyStack);
}
