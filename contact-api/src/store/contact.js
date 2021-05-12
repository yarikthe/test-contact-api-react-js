import {makeObservable, action, observable, flow} from "mobx";
import axios from "axios";
import contact from "../_redux/reducer/contact";

class Contact{

    contact = [];

    constructor(props) {

        makeObservable(this, {
            contact: observable,
            changePageSize: action.bound,
            changePage: action.bound,
            fetchContact: flow,
            changeSize: action.bound
        });
        this.contact = contact()
    }

    fetchContact()
    {
        axios.get(`https://randomuser.me/api/?results=20`)
            .then(res => {
                console.log(res.data.results);
                this.contact = res.data.results
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

    changeSize(current, pageSize) {
        this.changePage(current, pageSize)
    }
}

export default Contact