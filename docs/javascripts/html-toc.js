/* Populate Material's existing TOC shells from Skills & Tools' semantic HTML headings. */
function updateSkillsPageToc() {
    const component = document.querySelector(".skills-capabilities");
    if (!component) return;

    const headings = Array.from(
        component.querySelectorAll(".skills-capabilities__capability h2[id]")
    );
    if (!headings.length) return;

    const entries = headings.map((heading) => {
        const label = heading.cloneNode(true);
        label.querySelectorAll(".skills-capabilities__status").forEach((status) => {
            status.remove();
        });

        return {
            id: heading.id,
            title: label.textContent.trim().replace(/\s+/g, " ")
        };
    });

    function fillToc(nav) {
        nav.replaceChildren();

        const title = document.createElement("label");
        title.className = "md-nav__title";
        title.htmlFor = "__toc";

        const icon = document.createElement("span");
        icon.className = "md-nav__icon md-icon";
        title.append(icon, "Table of contents");

        const list = document.createElement("ul");
        list.className = "md-nav__list";
        list.setAttribute("data-md-component", "toc");
        list.setAttribute("data-md-scrollfix", "");

        entries.forEach(({ id, title: text }) => {
            const item = document.createElement("li");
            item.className = "md-nav__item";

            const link = document.createElement("a");
            link.className = "md-nav__link";
            link.href = `#${id}`;

            const caption = document.createElement("span");
            caption.className = "md-ellipsis";
            caption.textContent = text;

            link.append(caption);
            item.append(link);
            list.append(item);
        });

        nav.append(title, list);
    }

    const desktopNav = document.querySelector(
        ".md-sidebar--secondary .md-nav--secondary"
    );
    if (desktopNav) fillToc(desktopNav);

    const tocToggle = document.querySelector(
        ".md-nav--primary input#__toc"
    );
    const activeItem = tocToggle && tocToggle.closest("li.md-nav__item");
    if (!activeItem) return;

    let mobileNav = activeItem.querySelector(":scope > nav.md-nav--secondary");
    if (!mobileNav) {
        const toggleLabel = document.createElement("label");
        toggleLabel.className = "md-nav__link md-nav__link--active";
        toggleLabel.htmlFor = "__toc";

        const pageTitle = document.createElement("span");
        pageTitle.className = "md-ellipsis";
        pageTitle.textContent = "Skills & Tools";

        const icon = document.createElement("span");
        icon.className = "md-nav__icon md-icon";
        toggleLabel.append(pageTitle, icon);

        const pageLink = activeItem.querySelector(":scope > a.md-nav__link");
        activeItem.insertBefore(toggleLabel, pageLink);

        mobileNav = document.createElement("nav");
        mobileNav.className = "md-nav md-nav--secondary";
        mobileNav.setAttribute("aria-label", "Table of contents");
        activeItem.append(mobileNav);
    }

    fillToc(mobileNav);
}

updateSkillsPageToc();

/* Material can replace the page and navigation when instant navigation is enabled. */
if (typeof document$ !== "undefined") {
    document$.subscribe(updateSkillsPageToc);
}
