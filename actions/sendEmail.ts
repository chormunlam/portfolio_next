'use server';

re_3K67q15z_NZyENKNhZseKgpVGJg57PAyG
export const sendEmail=async(formData: FormData)=>{
    console.log('Running on server');
    console.log(formData.get('senderEmail'));
    console.log(formData.get('message'));

};