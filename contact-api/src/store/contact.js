import {makeAutoObservable} from "mobx";
import axios from "axios";
import {Component} from "react";

class Contact {

    contacts = [];

    // state = {
    //     data: null,
    //     currentPage: 1,
    //     sizePage: 10
    // }

    constructor() {
        makeAutoObservable(this);
        // this.contacts = contacts
    }

    // fetchContact(page, size)
    // {
    //     axios.get(`https://randomuser.me/api/?page=${page}&results=${size}`)
    //         .then(res => {
    //             console.log(res.data.results);
    //             this.contacts = res.data.results
    //
    //             this.state.data =  res.data.results;
    //             this.state.currentPage =  res.data.info['page'];
    //             this.state.sizePage = res.data.info['results'];
    //         })
    // }

    // changePage(current, pageSize)
    // {
    //     console.log(current, pageSize)
    //     axios.get('https://randomuser.me/api/?page=' + current +'&results=' + pageSize)
    //         .then(res => {
    //             console.log(res.data.results);
    //             this.contacts = [...this.contacts, ...res.data.results]
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