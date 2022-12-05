import React from "react";
import DashboardData from "./DashboardData.json"
import DashboardDataLoading from "./DashboardDataLoading";

const MyAppointments = () => {

  return (
    <>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {DashboardData.map((item) =>
              <DashboardDataLoading item={item} />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyAppointments;
