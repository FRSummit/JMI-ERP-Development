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

    searchByID_Name_Details_Section(filter, list, txt_selector) {
      for (let i = 0; i < list.length; i++) {
        let pera_txt = list[i].querySelectorAll("." + txt_selector)[0];
        if (pera_txt) {
            let txtValue = pera_txt.textContent || pera_txt.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            } else {
                list[i].style.display = "none";
            }
        }     
      }
    }

    // searchByID_Details_Section(filter, list, id_selector) {
    //   for (let i = 0; i < list.length; i++) {
    //     let pera_id = list[i].querySelectorAll("." + id_selector)[0];
    //     if (pera_id) {
    //         let txtValue = pera_id.textContent || pera_id.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             list[i].style.display = "";
    //         } else {
    //             list[i].style.display = "none";
    //         }
    //     }      
    //   }
    // }
}