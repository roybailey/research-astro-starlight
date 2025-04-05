import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context, next) => {
    // Get the content collection entry for this page.
    const { entry } = context.locals.starlightRoute;
    // Update the title to add an exclamation mark.
    console.log(JSON.stringify(context.url,null,2))
    console.log(JSON.stringify(entry.data))
    // Set a custom layout based on path prefix
    const { pathname } = context.url;
    if (pathname.indexOf("/diagrams/") >= 0) {
        console.log(`setting ${context.url} to splash`)
        context.locals.starlightRoute.hasSidebar = false;
        context.locals.starlightRoute.toc = undefined;
    } else {
        console.log(`setting ${context.url} to doc`)
        context.locals.starlightRoute.template = "doc";
    }
    return next();
});
