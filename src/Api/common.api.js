import Request,{ApiHelperPost,ApiHelperGet,ApiHelperPostWithoutHeader} from ".";
import { ApiRoutes} from "../constants";

const getCategory = async () => {

    try {
        const res= await ApiHelperGet(ApiRoutes.GETCATEGORY)
        return res?.data;

    } catch (error) {
        throw error;
    }
    
};

const getSubCategory = async (c_id) => {

    try {
        const res= await ApiHelperGet(ApiRoutes.GETSUBCATEGORY  +`/${c_id}`);
        return res?.data;

    } catch (error) {
        throw error;
    }
    
};

const insertSubCategory = async (FormData) => {

    try {
        const res= await ApiHelperPost (ApiRoutes.INSERTSUBCATEGORY ,FormData);
        return res?.data;

    } catch (error) {
        throw error;
    }
    
};

const insertCategory = async (FormData) => {

    try {
        const res= await ApiHelperPost(ApiRoutes.INSERTCATEGORY ,FormData)
        return res?.data;

    } catch (error) {
        throw error;
    }
    
};




const getSize = async () => {

    try {
        const res= await ApiHelperGet(ApiRoutes.GETSIZE)
        return res?.data;

    } catch (error) {
        throw error;
    }
    
};


const insertproperty = async (formData) => {

    try {
        const res= await ApiHelperPostWithoutHeader(ApiRoutes.INSERTPROPERTY,formData)
        return res?.data;

    } catch (error) {
        throw error;
    }
    
};


const insertSize = async (formData) => {

    try {
        const res= await ApiHelperPost(ApiRoutes.INSERTSIZE , formData)
        return res?.data;

    } catch (error) {
        throw error;
    }
    
};

const getProducts = async ()=>{
    try{
        const res = await ApiHelperGet(ApiRoutes.GETPRODUCTS);
        return res?.data;
    }catch(error){
throw error} }

export{

    getCategory,
    getSubCategory,
    insertSubCategory,
    insertCategory,
    getSize,
    insertproperty,
    insertSize,getProducts

}





