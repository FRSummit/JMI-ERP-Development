export default class BreadCrumbCreate {
    createBreadcrumbBita(para1, para2) {
        let breadcrumb = para1 + " > " + para2;
        return breadcrumb;
    }

    createBreadcrumbGama(para1, para2, para3) {
        let breadcrumb = para1 + " > " + para2 + " > " + para3;
        return breadcrumb;
    }
}