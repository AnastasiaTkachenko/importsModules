import dataBusiness from "./data-business.js";
import accountBusiness from "./account-business.js";

const clientBusiness = {
    getClientElement:(client) =>{
        const allAccounts = dataBusiness.getAccounts();
        const clientAccounts = [];
        for (let account of allAccounts) {
            if (account.clientId === client.id) {
                clientAccounts.push(account);
            }
        }
        const node = clientBusiness.getClientNode(client);
        const ul = accountBusiness.getClientAccountsElement(clientAccounts);
        node.appendChild(ul);
        return node;
    },
    getClientNode: (client) => {
        const li = document.createElement("li");
        li.append(clientBusiness.getFullName(client));

        return li;
    },
    getFullName: (client) => {
        return client.first_name + " " + client.last_name;
    }
}

export default clientBusiness;