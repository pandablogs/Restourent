import React, { useState, useEffect } from 'react';
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DataGrid } from '@mui/x-data-grid';
import { Switch, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, MenuItem, Select, useTheme, Box, FormControl, InputLabel } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getHotelDetails, updateHotelDetails, uploadFile, changeStatus, submitHotelDetails } from '../../service/apiFun';
import { toast } from 'react-toastify';

const initialValues = {
  hotelName: '',
  ownerFirstName: "",
  ownerLastName: "",
  email: "",
  hotelPhoneNumber: "",
  hotelAddress1: "",
  hotelAddress2: "",
};

const UserRegistrationComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [userData, setUserData] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [hotelLogo,setHotelLogo] = useState(null)
  const [hotelLogoURL,setHotelLogoURL] = useState(null)
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    hotelName: yup.string().required("required"),
    ownerFirstName: yup.string().required("required"),
    ownerLastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    hotelPhoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    hotelAddress1: yup.string().required("required"),
    hotelAddress2: yup.string().required("required"),
  });

  useEffect(() => {
    getHotelDetails(setUserData);
  }, []);

  const handleFormSubmit = async (values, { resetForm }) => {
    await submitHotelDetails({...values,hotelLogo:hotelLogo}, resetForm).then((response)=>{
      if(response.status){
        toast.success('New hotel added successfully!')
      }else{  
        toast.error(response.message)
      }
    }).catch(()=>{
      toast.error('Something went wrong!')
    });
    await getHotelDetails(setUserData);
    handleClose();
  };

  const handleUpdateUser = async (values, { resetForm }) => {
    await updateHotelDetails(editedUser._id, {...values,hotelLogo:hotelLogo}).then((response)=>{
      if(response.status){
        toast.success('Hotel details updated successfully!')
      }else{  
        toast.error(response.message)
      }
    }).catch(()=>{
      toast.error('Something went wrong!')
    });
    await getHotelDetails(setUserData);
    handleClose();
  };

  const handleChangeStatus = async (id) => {
    await changeStatus(id).then((response)=>{
      if(response.status){
        toast.success('Status updated successfully!')
      }else{  
        toast.error(response.message)
      }
    }).catch(()=>{
      toast.error('Something went wrong!')
    });
    await getHotelDetails(setUserData);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setHotelLogoURL(null)
    setEditedUser(null)
    setHotelLogo(null)
    initialValues.hotelName = '';
    initialValues.ownerFirstName = '';
    initialValues.ownerLastName = '';
    initialValues.email = '';
    initialValues.hotelPhoneNumber = '';
    initialValues.hotelAddress1 = '';
    initialValues.hotelAddress2 = '';
  };  

  const handleEdit = (user) => {
    setEditedUser(user);
    initialValues.hotelName = user.hotelName ? user.hotelName : '';
    initialValues.ownerFirstName = user.ownerFirstName ? user.ownerFirstName : '';
    initialValues.ownerLastName = user.ownerLastName ? user.ownerLastName : '';
    initialValues.email = user.email ? user.email : '';
    initialValues.hotelPhoneNumber = user.hotelPhoneNumber ? user.hotelPhoneNumber : '';
    initialValues.hotelAddress1 = user.hotelAddress1 ? user.hotelAddress1 : '';
    initialValues.hotelAddress2 = user.hotelAddress2 ? user.hotelAddress2 : '';
    setHotelLogo(user.hotelLogo)
    setOpen(true);
  };

  const handleFileChange = async(event) =>{
    if (event.target.files[0]) {
      const formData = new FormData();
      formData.append('file',event.target.files[0])
      await uploadFile(formData).then((response)=>{
        setHotelLogo(response.data.filename)
        setHotelLogoURL(URL.createObjectURL(event.target.files[0]))
      })
    }
  }
  const columns = [
    { field: 'hotelName', headerName: 'Hotel Name', flex: 1 },
    { field: 'ownerFirstName', headerName: 'Owner First Name', flex: 1 },
    { field: 'ownerLastName', headerName: 'Owner Last Name', flex: 1 },
    { field: 'hotelAddress1', headerName: 'Hotel Address Line 1', flex: 1 },
    { field: 'hotelAddress2', headerName: 'Hotel Address Line 2', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div>
          <Switch
            checked={params.row.isActive}
            onChange={() => handleChangeStatus(params.row._id)}
            inputProps={{ 'aria-label': 'controlled' }}
            label={'Active'}
          />
          <IconButton onClick={() => handleEdit(params.row)}>
            <ModeEditIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <Header title={editedUser ? 'Update Hotel Details' : 'Add Hotel Details'} subtitle={editedUser ? 'Hotel Information' : 'Add Hotel Information'} />
          <Formik
            onSubmit={editedUser ? handleUpdateUser : handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
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
                  <Button variant="contained" component="label" sx={{ gridColumn: "span 3",maxHeight:'35px' }}>
                    Upload Hotel Logo
                    <input type="file" hidden accept="image/*" onChange={(event)=>handleFileChange(event)} />
                  </Button>
                  {(hotelLogoURL || (editedUser && editedUser.hotelLogo)) &&
                  <Box
                    component="img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      gridColumn: "span 3"
                    }}
                    id='hotelLogo'
                    src={(editedUser && !hotelLogoURL) ? `http://localhost:3003/api/download?file=${editedUser.hotelLogo}` : hotelLogoURL}
                  />
                  }
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Hotel Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.hotelName}
                    name="hotelName"
                    error={!!touched.hotelName && !!errors.hotelName}
                    helperText={touched.hotelName && errors.hotelName}
                    sx={{ gridColumn: "span 6" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Owner First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.ownerFirstName}
                    name="ownerFirstName"
                    error={!!touched.ownerFirstName && !!errors.ownerFirstName}
                    helperText={touched.ownerFirstName && errors.ownerFirstName}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Owner Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.ownerLastName}
                    name="ownerLastName"
                    error={!!touched.ownerLastName && !!errors.ownerLastName}
                    helperText={touched.ownerLastName && errors.ownerLastName}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 6" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.hotelPhoneNumber}
                    name="hotelPhoneNumber"
                    error={!!touched.hotelPhoneNumber && !!errors.hotelPhoneNumber}
                    helperText={touched.hotelPhoneNumber && errors.hotelPhoneNumber}
                    sx={{ gridColumn: "span 6" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Hotel Address 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.hotelAddress1}
                    name="hotelAddress1"
                    error={!!touched.hotelAddress1 && !!errors.hotelAddress1}
                    helperText={touched.hotelAddress1 && errors.hotelAddress1}
                    sx={{ gridColumn: "span 6" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Hotel Address 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.hotelAddress2}
                    name="hotelAddress2"
                    error={!!touched.hotelAddress2 && !!errors.hotelAddress2}
                    helperText={touched.hotelAddress2 && errors.hotelAddress2}
                    sx={{ gridColumn: "span 6" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button fullWidth type="submit" color="secondary" variant="contained">
                    {editedUser ? 'Save' : 'Add Hotel'}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
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
            <Header title="Hotels" subtitle="Hotel List" />
            <div>
              <Button onClick={() => setOpen(true)} style={{ color: colors.grey[900], background: colors.greenAccent[400], borderRadius: "4px", padding: "7px" }} >
                Add Hotel
              </Button>
            </div>
          </Box>
          <DataGrid
            rows={userData}
            columns={columns}
            pageSize={10}
            autoHeight
          />
          {/* <Dialog open={openDelete}>
            <DialogTitle>Delete User</DialogTitle>
            <DialogContent>
              <Typography variant="body1">Are you sure you want to delete this user?</Typography>
            </DialogContent>
            <DialogActions>
              <Button>Cancel</Button>
              <Button color="error">Delete</Button>
            </DialogActions>
          </Dialog> */}
        </Box>
      </Box>
    </>
  );
};

export default UserRegistrationComponent;
