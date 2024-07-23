'use server';
import {z} from 'zod'
import {createServerActionClient} from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
const  MAX_FILE_SIZE=5000000;
const ACCEPTED_IMAGE_TYPES=[
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
];
export  async function sellYourItemAction({prevState:any,formData:FormData}){

    console.log(formData.get('name'))
    console.log(formData.get('description'))
    console.log(formData.get('contactemail'))


    const schema=z.object({
        username:z.string(),
        description:z.string(),
        contactEmail:z.string().min(1).email("This is not a valid email"),
        price:z.string().min(1),
        imageUrl:z
        .any()
        .refine((file)=>file?.size<=MAX_FILE_SIZE,`Max image size is 5MB`)
        .refine(
            (file)=>ACCEPTED_IMAGE_TYPES.includes(file?.type),`Only .jpg,jpeg,png and webp formats are supported`
        ),


    });

    const validatedFields =schema.safeParse({
        name:formData.get('name'),
        description:formData.get('description'),
        price:formData.get('price'),
        imageUrl:formData.get("imageUrl"),
        contactEmail:formData.get("contactEmail"), 
    });
    if(!validatedFields.success){
        // validatedFields.error;
        console.log('Error',validatedFields.error)
        return {
            type:'error',
            errors:validatedFields.error.flatten().fieldErrors,
            message:'Missing fields,Failed to create Product',
        };

    }
    const {name,imageUrl,contactEmail,description,price}=validatedFields.data;
    try{
        const fileName=`${Math.random()}-${imageUrl.name}`
        const supabase=createServerActionClient({cookies})
        const{data,error}=await supabase.storage;
        .from("storage")
        .upload(fileName,imageUrl,{
            cacheControl:'3600',
            upsert:false,

        });
        if(error){
            return{
                type:'error',
                message:'Database Error: Failed to upload Image.'
            }
        }

        if(data){
             const path=data.path;

        const {error:productsError}=await supabase
        .from('easysell-products')
        .insert({name,imageUrl:path,contactEmail,description,price})

        }
        //insert

       


    }catch(error){
        console.log('Error',error);
        return {
            type:'error',
            message:'Databas Error:Failed to Create Product.'
        }
    }
   
 

}