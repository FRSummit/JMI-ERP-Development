export default class BreadcrumbFunctions {
    jmiERPBreadcrumb(path) {
        let breadcrumb = []
        for(let i=1; i<path.split('/').length; i++) {
          let pp_str = path.split('/')[i].charAt(0).toUpperCase() + path.split('/')[i].slice(1)
          let parts = pp_str.split('_')
          let parts_length = parts.length
          let pn_str = ""
          for(let j=0; j<parts_length; j++) {
            pn_str += (parts[j].charAt(0).toUpperCase() + parts[j].slice(1)) + ' '
          }
          breadcrumb.push({name: pn_str.trim()})
        }
        return breadcrumb
    }
}