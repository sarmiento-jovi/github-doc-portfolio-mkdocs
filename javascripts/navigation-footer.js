/*This function implmements no Previous/Next link should cross from one project into another. 

Last CardFlow page
Next → API Documentation
different project
→ hide Next

Last API page
Next → Diagrams
different project
→ hide Next

AI Documentation Automation
Next → Skills & Tools
outside Projects entirely
→ hide Next */

function updateProjectFooter() {
    const path = normalizePath(window.location.pathname);

    const inProjects = path.includes("/projects/");

    document.body.classList.remove(
        "project-footer-enabled",
        "project-footer-start",
        "project-footer-end"
    );

    /*
     * Previous / Next navigation is only used
     * inside the Projects section.
     */
    if (!inProjects) {
        return;
    }

    document.body.classList.add("project-footer-enabled");

    const segments = getProjectSegments(path);

    /*
     * Determine the current navigation scope.
     *
     * Examples:
     *
     * /projects/
     *      → Projects root
     *
     * /projects/api-documentation/
     *      → API Documentation project
     *
     * /projects/cardflow-credit-origination-platform/artifacts/user-guide/
     *      → User Guide artifact
     *
     * /projects/cardflow-credit-origination-platform/artifacts/user-guide/getting-started/
     *      → topic within User Guide
     */
    const currentScope = getNavigationScope(segments);

    /*
     * Hide Previous when this page is the beginning
     * of a navigation scope.
     */
    const isScopeStart = isNavigationScopeStart(segments);

    document.body.classList.toggle(
        "project-footer-start",
        isScopeStart
    );

    /*
     * Check whether the Next link leaves the
     * current project or document artifact.
     */
    const nextLink = document.querySelector(
        ".md-footer__link--next"
    );

    if (!nextLink) {
        return;
    }

    const nextUrl = new URL(
        nextLink.href,
        window.location.origin
    );

    const nextPath = normalizePath(nextUrl.pathname);

    /*
     * If Next leaves Projects entirely,
     * the current page is the end of its scope.
     */
    if (!nextPath.includes("/projects/")) {
        document.body.classList.add(
            "project-footer-end"
        );

        return;
    }

    const nextSegments = getProjectSegments(nextPath);
    const nextScope = getNavigationScope(nextSegments);

    /*
     * Hide Next when the destination belongs
     * to a different project or document artifact.
     */
    const crossesBoundary =
        currentScope !== nextScope;

    document.body.classList.toggle(
        "project-footer-end",
        crossesBoundary
    );
}


/*
 * Normalize MkDocs URLs.
 */
function normalizePath(path) {
    return path
        .replace(/\/index\.html$/, "/")
        .replace(/\/+$/, "/");
}


/*
 * Return everything after /projects/
 * as individual path segments.
 */
function getProjectSegments(path) {
    const projectsPath =
        path.split("/projects/")[1] || "";

    return projectsPath
        .split("/")
        .filter(Boolean);
}


/*
 * Identify the navigation scope for a page.
 *
 * Each project is its own scope.
 *
 * If the project contains document artifacts under
 * /artifacts/<artifact-name>/, each artifact becomes
 * its own independent navigation scope.
 */
function getNavigationScope(segments) {

    /*
     * Projects landing page
     */
    if (segments.length === 0) {
        return "projects";
    }

    const project = segments[0];

    /*
     * Document artifact
     *
     * Example:
     * cardflow-credit-origination-platform
     * /artifacts
     * /user-guide
     */
    if (
        segments[1] === "artifacts" &&
        segments[2]
    ) {
        const artifact = segments[2];

        return `project:${project}:artifact:${artifact}`;
    }

    /*
     * Normal project
     */
    return `project:${project}`;
}


/*
 * Determine whether the current page is the first
 * page of a project or document artifact.
 */
function isNavigationScopeStart(segments) {

    /*
     * Projects landing page
     */
    if (segments.length === 0) {
        return true;
    }

    /*
     * Project landing page
     *
     * Example:
     * /projects/api-documentation/
     */
    if (segments.length === 1) {
        return true;
    }

    /*
     * Document artifact landing page
     *
     * Example:
     * /projects/cardflow-credit-origination-platform/
     * artifacts/system-architecture-diagram/
     */
    if (
        segments.length === 3 &&
        segments[1] === "artifacts"
    ) {
        return true;
    }

    return false;
}


/* Initial page load */
updateProjectFooter();


/* Material instant navigation */
if (typeof document$ !== "undefined") {
    document$.subscribe(updateProjectFooter);
}