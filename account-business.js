import getNodeStyle from "./style-business.js";

const accountBusiness = {
    getClientAccountsElement: (accounts) => {
        const ul = document.createElement("ul");
        for (let account of accounts) {
            ul.append(accountBusiness.getAccountElement(account));
        }
        return ul;
    },
    getAccountElement: (account) => {
        const li = document.createElement("li");

        li.style = getNodeStyle(account);

        li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
        return li;
    }
}

export default accountBusiness; 
