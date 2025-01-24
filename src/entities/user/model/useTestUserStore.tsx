function generateRandomId(length = 8): string {
  const characters = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

const name = "@mercury_test_user_id_W";

export const getUserId = () => {
  const userId = window.localStorage.getItem(name);
  const randomId = generateRandomId();
  if (userId === null) {
    window.localStorage.setItem(name, randomId);
  }
  const reUserId = window.localStorage.getItem(name);
  return reUserId as string;
};
