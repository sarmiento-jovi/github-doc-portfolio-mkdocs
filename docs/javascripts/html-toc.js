function updateHtmlToc() {

    /*
     * Find capability headings used by the
     * Skills & Tools page.
     */
    const headings = document.querySelectorAll(
        ".skills-capabilities__capability > h2[id]"
    );

    /*
     * This script should do nothing on pages
     * that do not contain capability headings.
     */
    if (!headings.length) {
        return;
    }

    /*
     * Find Material's existing Page TOC list.
     */
    const tocList = document.querySelector(
        ".md-nav--secondary .md-nav__list[data-md-component='toc']"
    );

    if (!tocList) {
        return;
    }

    /*
     * Clear the existing TOC entries before
     * rebuilding the list from our HTML headings.
     */
    tocList.innerHTML = "";

    /*
     * Create one Material-style TOC entry
     * for each capability heading.
     */
    headings.forEach((heading) => {

        const item = document.createElement("li");
        item.className = "md-nav__item";

        const link = document.createElement("a");
        link.className = "md-nav__link";
        link.href = `#${heading.id}`;

        /*
         * Use only the heading's text.
         * Status badges such as "Developing" and
         * "Planned" are removed from the TOC label.
         */
        const status = heading.querySelector(
            ".skills-capabilities__status"
        );

        let label = heading.textContent.trim();

        if (status) {
            label = label
                .replace(status.textContent.trim(), "")
                .trim();
        }

        link.textContent = label;

        item.appendChild(link);
        tocList.appendChild(item);
    });
}


/* Initial page load */
updateHtmlToc();


/*
 * Material instant navigation
 *
 * Re-run when Material loads another page
 * without performing a full browser refresh.
 */
if (typeof document$ !== "undefined") {
    document$.subscribe(updateHtmlToc);
}