import express, { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

function loadRoutes(app: express.Application) {
  const routesPath = path.join(__dirname, "../routes");

  const loadRouteFile = (routePath: string, routePrefix: string) => {
    const stats = fs.statSync(routePath);

    if (stats.isDirectory()) {
      const files = fs.readdirSync(routePath);

      files.forEach((file) => {
        loadRouteFile(path.join(routePath, file), path.join(routePrefix, file));
      });
    } else if (stats.isFile() && routePath.endsWith(".ts")) {
      const routeFileName = path.basename(routePath, ".ts");

      const routeMethods = getRouteMethods(routeFileName);
      if (routeMethods.length === 0) {
        return;
      }

      import(routePath)
        .then((module) => {
          const middlewares = module.middlewares || [];
          const handler = module.default;

          const cleanRoutePrefix = normalizeRoutePrefix(routePrefix, routeFileName);

          const splitParamsMiddleware = (req: Request, res: Response, next: NextFunction) => {
            if (req.params[0]) {
              // @ts-expect-error ...
              req.params.rest = req.params[0] ? req.params[0].split("/") : [];
              delete req.params[0];
            }
            next();
          };

          routeMethods.forEach((method) => {
            console.log(`Registering ${method.toUpperCase()} method at route: ${cleanRoutePrefix}`);
            // @ts-expect-error ...
            app[method](cleanRoutePrefix, splitParamsMiddleware, ...middlewares, handler);
          });
        })
        .catch((error) => {
          console.error(`Error loading route file ${routePath}:`, error);
        });
    }
  };

  function getRouteMethods(routeFileName: string): string[] {
    const methods: Record<string, string[]> = {
      get: ["get"],
      post: ["post"],
      put: ["put"],
      delete: ["delete"],
      patch: ["patch"],
      head: ["head"],
      options: ["options"],
    };
    return methods[routeFileName.toLowerCase()] || [];
  }

  function normalizeRoutePrefix(routePrefix: string, routeFileName: string): string {
    let cleanRoutePrefix = routePrefix.replace(/\[([^\]]+)\]/g, ":$1");
    cleanRoutePrefix = cleanRoutePrefix.replace(/:\.\.\.([^\]]+)/g, "*");
    cleanRoutePrefix = cleanRoutePrefix.replace(/\.ts$/, "");
    cleanRoutePrefix = cleanRoutePrefix.replace(`/${routeFileName}`, "");

    return cleanRoutePrefix;
  }

  loadRouteFile(routesPath, "/api");
}

export default loadRoutes;
