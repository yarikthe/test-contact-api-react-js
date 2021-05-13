import {makeAutoObservable} from "mobx";
import axios from "axios";

class Contact {

    contacts = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchContact(page, size)
    {
        axios.get(`https://randomuser.me/api/?page=${page}&results=${size}`)
            .then(res => {
                console.log(res.data.results);
                this.contacts = res.data.results
            })
    }

    changePageContact(current, pageSize)
    {
        console.log(current, pageSize)
        axios.get('https://randomuser.me/api/?page=' + current +'&results=' + pageSize)
            .then(res => {
                console.log(res.data.results);
                this.contacts = res.data.results
                // this.contacts = [...this.contacts, res.data.results]
            })
    }
}

export default new Contact()