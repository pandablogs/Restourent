import React, { useState, useEffect } from 'react';
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DataGrid } from '@mui/x-data-grid';
import { Grid,Switch, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, MenuItem, Select, useTheme, Box, FormControl, InputLabel } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { updatePassword } from '../../service/apiFun';
import { toast } from 'react-toastify';
const UserRegistrationComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [editedUser, setEditedUser] = useState(null);

  const initialValues = {
    oldPassword: '',
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object().shape({
    oldPassword: yup.string().required("Old Password required"),
    newPassword: yup.string().required("New Password required"),
    confirmPassword: yup.string().required("Confirm Password required").oneOf([yup.ref('newPassword'), null], 'Passwords must match')
  });

  const handleChangePassword = async (values, { resetForm }) => {
    if(values.newPassword == values.confirmPassword){
      await updatePassword(values).then((response)=>{
        if(response.status){
          toast.success('Password updated successfully')
        }else{  
          toast.error(response.message)
        }
      }).catch((error)=>{
        toast.error('Something went wrong!')
      })
      resetForm();
    }
    // await updateHotelDetails(editedUser._id, values);
    // await getHotelDetails(setUserData);
    // handleClose();
  };

  return (
    <>
      <Box margin={4}>
        <Box m='40px 0 0 0' height='75vh' sx={{
          "& .MuiDataGrid-root": {
            border: 'none'
          },
          "& .MuiDataGrid-cell": {
            border: 'none'
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700]
          }
        }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Header title="Profile" subtitle="Change Password" />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Formik
                onSubmit={handleChangePassword}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({values,errors,touched,handleBlur,handleChange,}) => (
                  <Form>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                      sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 6" },
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="Old Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.oldPassword}
                        name="oldPassword"
                        error={!!touched.oldPassword && !!errors.oldPassword}
                        helperText={touched.oldPassword && errors.oldPassword}
                        sx={{ gridColumn: "span 6" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="New Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.newPassword}
                        name="newPassword"
                        error={!!touched.newPassword && !!errors.newPassword}
                        helperText={touched.newPassword && errors.newPassword}
                        sx={{ gridColumn: "span 6" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="Confirm Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        name="confirmPassword"
                        error={!!touched.confirmPassword && !!errors.confirmPassword}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        sx={{ gridColumn: "span 6" }}
                      />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                      <Button fullWidth type="submit" color="secondary" variant="contained">
                      Change Password
                      </Button>
                    </Box>
                  </Form>
                )}
                </Formik>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default UserRegistrationComponent;
