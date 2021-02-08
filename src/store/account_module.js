import ERPSidebarService from '../service/ERPSidebarService'
const service = new ERPSidebarService();

class AccountModule {
    loginChecker() {
        console.log('account module login checker');
        service.getUsersList().then(res => {
            console.log(res.data)
        });
    }

    logout(){
        console.log('this is logout')
    }
    
    register(){
        console.log('this is register')
    }

}

export const accountModule = new AccountModule();