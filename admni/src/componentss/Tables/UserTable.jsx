// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useState } from "react";
import FormDialog from "./modal/userCreate";

function UserTable() {
  const { columns, rows } = authorsTableData();
  const [open, setOpen] = useState(false);

  const handleClickOpen = (value) => {
    setOpen(value);
  };

  const handleClose = (value) => {
    setOpen(value);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Users Table
                </MDTypography>
                
                <MDTypography variant="h6" color="white">
                 <FormDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}  />
                </MDTypography>
                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UserTable;
