import {makeAutoObservable} from "mobx";
import axios from "axios";

class Contact{

    contact = [];

    constructor() {
        makeAutoObservable(this)
    }

    fetchContact()
    {
        axios.get(`https://randomuser.me/api/?results=20`)
            .then(res => {
                console.log(res.data.results);
                this.contact = [...this.contact, ...res.data.results]
            })
    }

    // set new size per page
    changePageSize(pageSize)
    {
        axios.get('https://randomuser.me/api/?page=1&results=' + pageSize)
            .then(res => {
                console.log(res.data.results);
                this.contact = [...this.contact, ...res.data.results]
            })
    }

    changePage(page, size)
    {
        axios.get('https://randomuser.me/api/?page=' + page +'&results=' + size)
            .then(res => {
                console.log(res.data.results);
                this.contact = [...this.contact, ...res.data.results]
            })
    }
}

export default new Contact()