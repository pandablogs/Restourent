import React, { useState, useEffect } from 'react';
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid,Switch, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, MenuItem, Select, useTheme, Box, FormControl, InputLabel } from '@mui/material';
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import { DataGrid } from '@mui/x-data-grid';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { addMenuCategory,getMenuCategoryList,updateMenuCategory,deleteMenuCategory } from '../../../service/apiMenuCategory';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';

const initialValues = {
  menuCategory: '',
};

const MenuCategory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [editedUser, setEditedUser] = useState(null);
  const [menuCategoryList,setMenuCategoryList] = useState([])
  const [isEditMenuCategoryModel,setIsEditMenuCategoryModel] = useState(false)
  const [selectedCategoryData,setSelectedCategoryData] = useState(null)
  const [confirmationModel,setConfirmationModel] = useState(false)
  const validationSchema = yup.object().shape({
    menuCategory: yup.string().required("Menu Category required")
  });

  useEffect(()=>{
    onload();
  },[])

  const onload = async() =>{
    await getMenuCategoryList().then((response)=>{
      if(response.status){
        if(response.data){
          const formattedData = response.data.map((user, index) => ({
            ...user,
            id: index + 1,
          }));
          setMenuCategoryList(formattedData)
        }
      }else{
        toast.error('Something went wrong!')
      }
    }).catch((error)=>{
      toast.error('Something went wrong!')
    })
  }

  const handleAddMenuCategory = async (values, { resetForm }) => {
    if(values){
      await addMenuCategory(values).then((response)=>{
        if(response.status){
          toast.success(response.message)
          onload();
        }else{  
          toast.error(response.message)
        }
      }).catch((error)=>{
        toast.error('Something went wrong!')
      })
      resetForm();
    }
  };

  const handleClose = () =>{
    setIsEditMenuCategoryModel(false)
    setSelectedCategoryData(null)
    setConfirmationModel(false)
    initialValues.menuCategory = '';
  }

  const handleEdit = (values) => {
    if(values){
      initialValues.menuCategory = values.categoryName
      setSelectedCategoryData(values)
    }

    setIsEditMenuCategoryModel(true)
  }

  const handleDelete = (values) => {
    if(values){
      initialValues.menuCategory = values.categoryName
      setSelectedCategoryData(values)
    }
    setConfirmationModel(true)
  }

  const handleUpdateMenuCategory = async (values, { resetForm }) => {
    if(values){
      await updateMenuCategory({menuCategory:values.menuCategory},selectedCategoryData._id).then((response)=>{
        if(response.status){
          toast.success(response.message);
          handleClose();
          onload();
        }else{  
          toast.error(response.message)
        }
      }).catch((error)=>{
        toast.error('Something went wrong!')
      })
      resetForm();
    }
  };

  const handleDeleteMenuCategory = async () => {
      await deleteMenuCategory(selectedCategoryData._id).then((response)=>{
        if(response.status){
          toast.success(response.message);
          handleClose();
          onload();
        }else{  
          toast.error(response.message)
        }
      }).catch((error)=>{
        toast.error('Something went wrong!')
      })
  };

  const columns = [
    { field: 'categoryName', headerName: 'Menu Category Name',flex: 1},
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div>
          {/* <Switch
            checked={params.row.isActive}
            onChange={() => handleChangeStatus(params.row._id)}
            inputProps={{ 'aria-label': 'controlled' }}
            label={'Active'}
          /> */}
          <IconButton>
            <ModeEditIcon onClick={()=>handleEdit(params.row)}/>
          </IconButton>
          <IconButton>
            <DeleteIcon onClick={()=>handleDelete(params.row)}></DeleteIcon>
          </IconButton>
        </div>
      ),
    },
  ];


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
            <Header title="Menu Category" subtitle="Add Menu Category" />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <Formik
                onSubmit={handleAddMenuCategory}
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
                        type="text"
                        label="Enter menu category here"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.menuCategory}
                        name="menuCategory"
                        error={!!touched.menuCategory && !!errors.menuCategory}
                        helperText={touched.menuCategory && errors.menuCategory}
                        sx={{ gridColumn: "span 6" }}
                      />
                      
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                      <Button fullWidth type="submit" color="secondary" variant="contained">
                         Add Menu Category
                      </Button>
                    </Box>
                  </Form>
                )}
                </Formik>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={5}>
              <Grid item xs={6}>
              <Header title="Menu Category List" subtitle="" />
                <DataGrid
                  rows={menuCategoryList}
                  columns={columns}
                  pageSize={10}
                  autoHeight
                />
              </Grid>
          </Grid>
        </Box>
      </Box>

      <Dialog open={isEditMenuCategoryModel}>
        <DialogContent>
          <Header title='Update Menu Category' subtitle='' />
          <Formik
                onSubmit={handleUpdateMenuCategory}
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
                        type="text"
                        label="Menu Category Name"
                        placeholder='Enter menu category name here'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.menuCategory}
                        name="menuCategory"
                        error={!!touched.menuCategory && !!errors.menuCategory}
                        helperText={touched.menuCategory && errors.menuCategory}
                        sx={{ gridColumn: "span 6" }}
                      />
                      
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                      <Button fullWidth type="submit" color="secondary" variant="contained">
                         Update Menu Category
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
      <Dialog open={confirmationModel}>
          <DialogTitle>Delete Menu Category</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Are you sure you want to delete this category?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDeleteMenuCategory } color="error">Delete</Button>
          </DialogActions>
      </Dialog>
    </>
  );
};

export default MenuCategory;
