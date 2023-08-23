import "./styles/UserCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUserById("/users", user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpenForm();
  };

  return (
    <article className="userCard_article">
      <div className="box_h2">
        
      <h2 className="userCard_h2">{`${user.first_name} ${user.last_name}`}</h2>
      </div>
      
      <ul className="userCard_list">
        <li className="userCard_item">
          <span className="userCard_label">Email</span>
          <span className="userCard_item-value">{user.email}</span>
        </li>

        <li className="userCard_item">
          <span className="userCard_label">Birthday</span>
          <span className="userCard_item-value">{user.birthday}</span>
        </li>
      </ul>
      <hr className="userCard_line"/>
      <footer className="userCard_footer">
        <button className="userCard_btn_delete" onClick={handleDelete}>
          <i className="bx bxs-trash"></i>
        </button>
        <button className="userCard_btn" onClick={handleUpdate}>
          <i className="bx bx-edit"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
