
module.exports = (Sequelize, DataTypes) => {
    const Film = Sequelize.define("Film", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement :true,
            primaryKey: true
        },
        nama_Film:{
            type: DataTypes.STRING,
        },
        description : {
            type: DataTypes.STRING,
        },
        sutradara: {
            type: DataTypes.STRING,
        },
        tahun_terbit: {
            type: DataTypes.DATE,
        },
        genre: {
            type: DataTypes.STRING,
        }
        
    });
    return Film;
};