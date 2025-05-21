
import { Client, Account,Databases,Storage } from "appwrite";
export const appwriteConfig = {
  endpointURL: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  apiKey: import.meta.env.VITE_APPWRIE_API_KEY,
  databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  tripCollectionId: import.meta.env.VITE_APPWRIE_TRIP_COLLECTION_ID,
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpointURL)
  .setProject(appwriteConfig.projectId); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
export const database = new Databases(client)
export const storage = new Storage(client)