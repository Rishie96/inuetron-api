const QUERIES = {
  GET_USER: "SELECT * FROM users WHERE user_id=?",
  CREATE_USER: "INSERT INTO users SET ?",
  UPDATE_USER: "UPDATE users SET ? WHERE user_id=?",
  DELETE_USER: "DELETE FROM users WHERE user_id=?"
};

export default QUERIES;
