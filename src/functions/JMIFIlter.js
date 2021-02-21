export default class JMIFIlter {
    searchById_LeftSidebar(filter, list, txt_selector) {
      for (let i = 0; i < list.length; i++) {
        let pera = list[i].querySelectorAll("." + txt_selector)[0];
        if (pera) {
            let txtValue = pera.textContent || pera.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            } else {
                list[i].style.display = "none";
            }
        }       
      }
    }
}