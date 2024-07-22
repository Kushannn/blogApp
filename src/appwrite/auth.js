import {Client,Account,ID} from "appwrite";
import  conf  from "../conf/conf.js"

export class AuthService {

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount ({email , name , password}){
        try {
          const userAccount = await this.account.create(ID.unique(),email,password,name);

          if(userAccount){
            return this.login({email,password})
          } else{
            return userAccount;
          }
        } catch (error) {
            console.log("Error in createAccount Method : Error : ",error)
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("Error in login method : error :",error);
        }
    }

   async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Error in logout method : error :",error);
        }
    }

};

const authService = new AuthService();

export default authService;