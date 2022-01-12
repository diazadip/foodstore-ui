import env from "react-dotenv";

const config = {
    api_host: env.REACT_APP_API_HOST,
    site_title: env.REACT_APP_SITE_TITLE,
    global_ongkir: env.REACT_APP_GLOBAL_ONGKIR,
    owner: env.REACT_APP_OWNER,
    contact: env.REACT_APP_CONTACT,
    billing: {
    account_no: env.REACT_APP_BILLING_NO,
    bank_name: env.REACT_APP_BILLING_BANK
    }
   }
export { config };

/*import dotenv from 'dotenv';
dotenv.config();


const config = {
 api_host: process.env.REACT_APP_API_HOST,
 site_title: process.env.REACT_APP_SITE_TITLE,
 global_ongkir: process.env.REACT_APP_GLOBAL_ONGKIR,
 owner: process.env.REACT_APP_OWNER,
 contact: process.env.REACT_APP_CONTACT,
 billing: {
 account_no: process.env.REACT_APP_BILLING_NO,
 bank_name: process.env.REACT_APP_BILLING_BANK
 }
}
export { config };*/