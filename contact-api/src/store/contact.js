import {makeAutoObservable} from "mobx";
import axios from "axios";

class Contact{

    contacts = [];

    data = [];

    constructor() {
        makeAutoObservable(this);
        // this.contacts = contacts
    }

    // changePage(current, pageSize)
    // {
    //     console.log(current, pageSize)
    //     axios.get('https://randomuser.me/api/?page=' + current +'&results=' + pageSize)
    //         .then(res => {
    //             console.log(res.data.results);
    //             this.contacts = [...this.contacts, ...res.data.results]
    //         })
    // }


    //
    // fetchContact()
    // {
    //     axios.get(`https://randomuser.me/api/?results=20`)
    //         .then(res => {
    //             console.log(res.data.results);
    //             this.contacts = res.data.results
    //             // this.contacts.data = [...this.contacts, ...res.data.results]
    //         })
    // }

    // set new size per page
    // changePageSize(pageSize)
    // {
    //     axios.get('https://randomuser.me/api/?page=1&results=' + pageSize)
    //         .then(res => {
    //             console.log(res.data.results);
    //             this.contacts = [...this.contacts, ...res.data.results]
    //         })
    // }

    //
    // changeSize(current, pageSize) {
    //     this.changePage(current, pageSize)
    // }
}

export default Contact