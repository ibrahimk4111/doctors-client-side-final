import React from "react";
import "../../App.css";

const DashboardDataLoading = (props) => {
    const { _id, name, email, phone } = props.item;
    const currentDate = new Date();
    return (
        <>
                <tr>
                    <th>{_id}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{currentDate.getMonth()}/{currentDate.getDate()}/{currentDate.getFullYear()}</td>
                </tr>
        </>
    );
};

export default DashboardDataLoading;
