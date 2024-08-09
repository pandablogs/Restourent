const db = require('../model')
const AddMenuCategory = async(req,res) =>{
    try{
        const { _id } = req._user
        const { menuCategory } = req.body
        if(!menuCategory){res.json({status:false,message:'Category Name required'})}
        else{
            const isMenuExist = await db.menuCategoryModel.findOne({userId:_id,categoryName:menuCategory})
            if(isMenuExist){
                res.json({status:false,message:'Menu already added'})
            }else{
                await db.menuCategoryModel.create({
                    userId:_id,
                    categoryName : menuCategory
                })
                res.json({status:true,message:'Menu Category added successfully'})
            }
        }
    }catch(err){
        res.json({status:false,message:err.message})
    }
}

const getAllMenuCategory = async(req,res) =>{
    try{
        const { _id } = req._user
        const menuCategory = await db.menuCategoryModel.find({userId:_id,isDeleted:false})
        if(menuCategory){
            res.json({status:true,message:'Menu Category fetched successfully',data:menuCategory})
        }else{
            res.json({status:false,message:'Something went wrong!'})
        }
    }catch(err){
        res.json({status:false,message:err.message})
    }
}

const updateMenuCategory = async(req,res) =>{
    try{
        const { _id } = req._user
        const {categoryId} = req.params
        const { menuCategory } = req.body
        if(categoryId && menuCategory){
            const isMenuExist = await db.menuCategoryModel.findOne({userId:_id,categoryName:menuCategory})
            if(isMenuExist){
                res.json({status:false,message:'Menu already added'})
            }else{
                await db.menuCategoryModel.updateOne({_id:categoryId},{$set:{categoryName:menuCategory}})
                res.json({status:true,message:'Menu Category updated successfully'})
            }
        }else{
            res.json({status:false,message:'Something went wrong!'})
        }
    }catch(err){
        res.json({status:false,message:err.message})
    }
}


const deleteMenuCategory = async(req,res) =>{
    try{
        const {categoryId} = req.params
        if(categoryId){
            await db.menuCategoryModel.updateOne({_id:categoryId},{$set:{isDeleted:true}})
            res.json({status:true,message:'Menu Category deleted successfully'})
        }else{
            res.json({status:false,message:'Something went wrong!'})
        }
    }catch(err){
        res.json({status:false,message:err.message})
    }
}

module.exports = {
    AddMenuCategory,
    getAllMenuCategory,
    updateMenuCategory,
    deleteMenuCategory
}