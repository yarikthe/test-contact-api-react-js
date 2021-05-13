import React from 'react';
import {Card, Col} from "antd";
import style from "./content.module.css";
import {observer} from "mobx-react";
const { Meta } = Card;

const Content = (props) => {

    const nameUser = props.name + ' ' + props.nameLast
    const year = props.dob + ' year'
    const location = props.postcode + ' ' + props.country + ', ' + props.state + ', ' + props.city

    return (
        <Col span={6}>

            <div className={style.data}>
                <Card
                    hoverable
                    cover={<img alt="avatar-contact" src={props.img} />}
                    className={style.card}
                >
                    <h2>{nameUser}</h2><span className={style.spanYear}> {year}</span>
                    <br/>
                    <span className={style.span}>
                        {props.email}
                        <br/>
                        {props.phone}
                    </span>
                    <br/>
                    <span>{location}</span>
                    <br/>
                    <br/>
                    <span className={style.spanCountry}>{props.country}</span>
                </Card>
            </div>

        </Col>
    );
}

export default observer(Content);