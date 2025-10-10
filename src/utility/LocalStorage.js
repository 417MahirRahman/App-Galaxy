const getFromLocalStorage = () =>{
    const installApp = localStorage.getItem("installed")
    if(installApp){
        const getInstallApp = JSON.parse(installApp);
        return getInstallApp;
    }else{
        return [];
    }
}

const setToLocalStorage = (id) =>{
    const storeInstallApp = getFromLocalStorage();
    if(storeInstallApp.includes(id)){
        alert("Already Installed")
    }else{
        storeInstallApp.push(id);
        const data = JSON.stringify(storeInstallApp)
        localStorage.setItem("installed",data)
    }
}

export {setToLocalStorage, getFromLocalStorage}