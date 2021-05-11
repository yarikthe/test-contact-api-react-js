import React from 'react';
import axios from 'axios';
import Content from "./content";
import style from "./content.module.css";
import {Row, Col, Pagination, Divider} from "antd";

export default class ContainerContent extends React.Component {

    state = {
        persons: [],

    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=25`)
            .then(res => {
                // console.log(res);
                console.log(res.data.results);
                const persons = res.data.results;
                this.setState({ persons });
            })
    }

    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    render() {
        return (
            <div className={style.content}>
                <Divider orientation="left" className={style.marginTop}>Contact</Divider>
                <Row>
                        {
                            this.state.persons.map(person => <Content
                                name={person.name['first'] }
                                nameLast={person.name['last']}
                                dob={person.dob['age']}
                                email={person.email}
                                phone={person.phone}
                                country={person.location['country']}
                                state={person.location['state']}
                                city={person.location['city']}
                                postcode={person.location['postcode']}
                                info={person.gender}
                                img={person.picture['large']}
                            />)
                        }
                </Row>
                <div className={style.pagination}>
                    <Divider orientation="left">Pagination</Divider>
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={this.onShowSizeChange}
                        defaultCurrent={1}
                        total={100}
                    />
                </div>
            </div>

        )
    }
}