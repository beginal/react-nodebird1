module.exports =(sequelize, DataTypes) => {
  const User =sequelize.define('User', {
    nickname: {
      type: DataTypes.STRING(20), // 20글자 이하
      allowNull: false, // 필수
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true, // 고유한 값
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset: 'utf8', // 한글이 저장되게 (아래까지 두개 써야함) 
    collate: 'utf8_general_ci',
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post, {as: 'Post'});
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked'});
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Following'})
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers'})
  };
  return User;
}

const user = {
  id: 1,
  nickname: 'junho',
  Liked: [{}, {}, {}],
  Posts: [{}, {}, {}],
  Followers: [{}, {}, {}],
}