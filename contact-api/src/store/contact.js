import {makeAutoObservable} from "mobx";
import axios from "axios";

class Contact{

    contacts = [];

    constructor(contacts) {
        makeAutoObservable(this);
        this.contacts = contacts
    }

    fetchContact = () =>{
        axios.get(`https://randomuser.me/api/?results=20`)
            .then(res => {
                console.log(res.data.results);
                this.contacts = res.data.results
            })
    }

    // set new size per page
    changePageSize(pageSize)
    {
        axios.get('https://randomuser.me/api/?page=1&results=' + pageSize)
            .then(res => {
                console.log(res.data.results);
                this.contacts = [...this.contacts, ...res.data.results]
            })
    }

    changePage(page, size)
    {
        axios.get('https://randomuser.me/api/?page=' + page +'&results=' + size)
            .then(res => {
                console.log(res.data.results);
                this.contacts = [...this.contacts, ...res.data.results]
            })
    }

    changeSize(current, pageSize) {
        this.changePage(current, pageSize)
    }
}

export default Contact