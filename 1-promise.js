export default async function getFullResponseFromAPI(success) { // top most comment was added to test conflict
  return new Promise((resolve, reject) => {
    if (success) {
      const dict = {
        status: 200,
        body: 'Success',
      };
      resolve(dict);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// js comment was added