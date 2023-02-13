import React from "react";

const style = {
  userListItem: `flex items-center py-2 px-2`,
  name: `z-10 text-gray-600 text-xl truncate hover:overflow-visible`,
};

const User = ({ user }) => {
  return (
    <div>
      <div className={`${style.userListItem}`}>
        <p className={style.name}>{user.displayName}</p>
      </div>
    </div>
  );
};

export default User;
