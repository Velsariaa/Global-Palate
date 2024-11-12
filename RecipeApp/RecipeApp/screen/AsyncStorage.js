  import AsyncStorage from '@react-native-async-storage/async-storage';

  const STORAGE_KEY = '@storage_Key';

  const CURRENT_USER_KEY = '@current_user';

  export const storeCurrentUser = async (username) => {
    try {
      await AsyncStorage.setItem(CURRENT_USER_KEY, username);
    } catch (e) {
      console.error('Failed to save the current user to the storage', e);
    }
  }

  export const getCurrentUser = async () => {
      try {
        const username = await AsyncStorage.getItem(CURRENT_USER_KEY);
        return getAccount(username);
      } catch(e) {
        console.error('Failed to get the current user from storage', e);
      }
    }

  export const storeAccount = async (account) => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      let accounts = jsonValue != null ? JSON.parse(jsonValue) : [];
      if (!Array.isArray(accounts)) {
          accounts = [];
        }

      const existingAccount = accounts.find(a => a.username === account.username);
      if (existingAccount) {
        existingAccount.password = account.password;
        existingAccount.favorites = account.favorites;
        existingAccount.comments = account.comments;
      } else {
        if (!account.comments) {
          account.comments = [];
        }
        if (!account.favorites) {
          account.favorites = [];
        }
        accounts.push(account);
      }

      const newJsonValue = JSON.stringify(accounts);
      await AsyncStorage.setItem(STORAGE_KEY, newJsonValue);
    } catch (e) {
      console.error('Failed to save the data to the storage', e);
    }
  }

  export const getAccount = async (username) => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      let accounts = jsonValue != null ? JSON.parse(jsonValue) : [];
      if (!Array.isArray(accounts)) {
          accounts = [];
        }
      const account = accounts.find(account => account.username === username);
      console.log('Fetched account:', account);
      if (account && !account.comments) {
        account.comments = []; 
      }
      return account;
    } catch(e) {
      console.error('Failed to get the data from storage', e);
    }
  }

  export const storeComment = async (username, dish, comment) => {
    try {
      const account = await getAccount(username);
      if (account) {
        if (!account.comments) {
          account.comments = [];
        }
        const date = new Date(); 
        account.comments.push({ dish, comment: { username, text: comment, date } });
        await storeAccount(account);
        return account.comments;
      }
    } catch (e) {
      console.error('Failed to save the comment to the storage', e);
    }
  }
    

  export const getComment = async (username, dish) => {
    try {
      const account = await getAccount(username);
      if (account && account.comments) {
        return account.comments.find(c => c.dish === dish);
      }
    } catch(e) {
      console.error('Failed to get the comment from storage', e);
    }
  }

  export const toggleFavorite = async (username, dish) => {
    try {
      const account = await getAccount(username);
      if (account) {
        if (!account.favorites) {
          account.favorites = [];
        }
        const index = account.favorites.indexOf(dish);
        if (index > -1) {
          account.favorites.splice(index, 1);
        } else {
          account.favorites.push(dish);
        }
        await storeAccount(account);
      }
    } catch (e) {
      console.error('Failed to toggle favorite in the storage', e);
    }
  }

  export const isFavorite = async (username, dish) => {
    try {
      const account = await getAccount(username);
      if (account && account.favorites) {
        return account.favorites.includes(dish);
      }
      return false;
    } catch(e) {
      console.error('Failed to check if the dish is a favorite', e);
    }
  }

export const getAllComments = async (dishName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    let accounts = jsonValue != null ? JSON.parse(jsonValue) : [];
    if (!Array.isArray(accounts)) {
        accounts = [];
      }
    let allComments = [];
    for (let account of accounts) {
      if (account.comments) {
        const commentsForDish = account.comments.filter(comment => comment.dish === dishName);
        allComments = [...allComments, ...commentsForDish];
      }
    }
    return allComments;
  } catch(e) {
    console.error('Failed to get all comments from storage', e);
  }
}