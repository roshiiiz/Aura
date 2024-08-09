import { ID, Account, Client, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aura',
  projectId: '66aea28a002f606f5b73',
  databaseId: '66aea4830010bfeaef91',
  userCollectionId: '66aea4ac00377ee3d7bc',
  videoCollectionId: '66aea50a0010fc8f2b32',
  storageId: '66aea68f00128d974f40'
};

const{
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId,
}=config;
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);
    if (!newAccount) throw new Error("Failed to create a new account.");

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    );

    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const signIn = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error);
    }
  };
  

  export const getCurrentUser = async () => {
    try {
      const currentAccount = await account.get();
      if (!currentAccount) throw Error;
  
      return currentAccount;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getAllPosts = async () =>{
    try {
      const posts = await databases.listDocuments(
        databaseId,
        videoCollectionId
      )
      return posts.documents;
    } catch (error) {
      throw new Error (error);
      
    }
  }