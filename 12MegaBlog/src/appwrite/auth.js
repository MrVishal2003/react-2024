import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf.js'; // Assuming this file contains your Appwrite config

class AuthService {
  client = new Client();
  account;

  constructor() {
    // Set up the Appwrite client
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Create a new account
  async createAccount({ email, password, name }) {
    try {
      // Create the account with unique ID and provided email/password
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      
      // If account creation is successful, log the user in
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(`Account creation failed: ${error.message}`);
    }
  }

  // Log in an existing user
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailSession(email, password);
      return session;
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  // Get current authenticated user
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log("Error getting current user:", error);
      return null;
    }
  }

  // Log out the current user
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Error logging out:", error);
    }
  }
}

// Create an instance of the AuthService
const authService = new AuthService();

// Export the instance for usage in other parts of the application
export default authService;
