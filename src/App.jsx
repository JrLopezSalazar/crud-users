import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);

  const baseUrl = "https://users-crud.academlo.tech";
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setCloseForm);

  useEffect(() => {
    getAllUsers("/users");
  }, []);
  console.log(users);

  const handleOpenForm = () => {
    setCloseForm(false);
  };

  return (
    <div>
      <nav className="nav_container">
       <h1 className="userCard_h1">Users</h1>
       <button className="formuser_btn_nav" onClick={handleOpenForm} >
        + Create new user
      </button>
      </nav>
      <div className="userCard-container">
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          closeForm={closeForm}
          setCloseForm={setCloseForm}
        />
         <div className="userCard-container1">
          {users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))}
        </div>
        </div>
    </div>
    
  );
}

export default App;
