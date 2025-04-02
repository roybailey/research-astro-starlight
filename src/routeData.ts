import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
    // Get the content collection entry for this page.
    const { entry } = context.locals.starlightRoute;
    // Update the title to add an exclamation mark.
    console.log(JSON.stringify(context.url,null,2))
    console.log(JSON.stringify(entry.data))
});
