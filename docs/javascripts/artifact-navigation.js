/***************************************************************
 * ARTIFACT NAVIGATION
 *
 * Keeps only the active documentation artifact expanded.
 *
 * Example:
 *
 * Business Requirements Document   >
 * System Architecture Diagram      >
 * User Guide                        v
 *
 * Parent navigation levels such as Projects and CardFlow
 * are left entirely to Material for MkDocs.
 ***************************************************************/

function limitArtifactNavigationExpansion() {
    const currentPath = window.location.pathname;

    const currentMatch = currentPath.match(
        /\/projects\/([^/]+)\/artifacts\/([^/]+)\/?/
    );

    // Only run while viewing an artifact.
    if (!currentMatch) return;

    const currentProject = currentMatch[1];
    const activeArtifact = currentMatch[2];

    const nestedItems = document.querySelectorAll(
        ".md-nav__item--nested"
    );

    nestedItems.forEach((item) => {

        /*
         * IMPORTANT:
         *
         * Only inspect links that are DIRECTLY inside this
         * navigation group's child menu.
         *
         * This prevents Projects or CardFlow from being mistaken
         * for an artifact just because they contain artifact links
         * somewhere deeper in their navigation tree.
         */
        const directLinks = item.querySelectorAll(
            ":scope > nav.md-nav > ul.md-nav__list > li.md-nav__item > a.md-nav__link"
        );

        let artifactName = null;

        for (const link of directLinks) {
            const href = link.getAttribute("href");

            if (!href) continue;

            const linkPath = new URL(
                href,
                window.location.href
            ).pathname;

            const artifactMatch = linkPath.match(
                /^\/projects\/([^/]+)\/artifacts\/([^/]+)\/?$/
            );

            if (
                artifactMatch &&
                artifactMatch[1] === currentProject
            ) {
                artifactName = artifactMatch[2];
                break;
            }
        }

        // Not an artifact-level navigation group.
        if (!artifactName) return;

        const toggle = item.querySelector(
            ":scope > input.md-nav__toggle"
        );

        if (!toggle) return;

        // Expand active artifact; collapse sibling artifacts.
        toggle.checked = artifactName === activeArtifact;
    });
}


/***************************************************************
 * INITIALIZE
 ***************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    limitArtifactNavigationExpansion();
});