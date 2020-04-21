module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT, // 매우 길게 쓸 수 있는 글
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', // 한글 + 이모티콘까지 사용가능
    collate: 'utf8mb4_general_ci',
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 이게 있는 테이블에 다른 테이블의 id를 저장 (post에 userid 저장)
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.hasMany(db.Comment);
    db.Post.belongsTo(db.Post, { as: 'Retweet'}); 
    db.Post.belongsToMany(db.Comment, { through: 'PostHashtag'});;
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers'});
  }
  return Post;
}
