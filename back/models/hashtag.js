module.exports = (sequelize,DataTypes) => {
  const Hashtag = sequelize.define('Hashtag' , {
    content: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag'});; // 다수 : 다수 관계 (중간에 테이블이 생긴다, 그 테이블 이름이 posthashtag)
  };
  return Hashtag;
}