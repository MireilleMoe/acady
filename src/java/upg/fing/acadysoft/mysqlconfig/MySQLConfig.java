package upg.fing.acadysoft.mysqlconfig;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author GINF
 */
public class MySQLConfig {

    //L'établissement de la connexion
    /* String dbUrl = "jdbc:mysql://localhost:3307/academia?";
    String login = "root";
    String pwd = "root";*/
    private MysqlDataSource dataSource;
    private Connection con;

    public MySQLConfig() throws SQLException {
        dataSource = new MysqlDataSource();
        dataSource.setUser("root"); //Selon votre configuration
        dataSource.setPassword("root");//Selon votre configuration
        dataSource.setServerName("localhost");//Selon votre configuration
        dataSource.setPort(3307); //Selon votre configuration
        dataSource.setDatabaseName("academia");

        con = dataSource.getConnection();
        //L'établissement de la connexion
        //this.con = DriverManager.getConnection(dbUrl, login, pwd);
    }

    public Connection getCon() {
        return con;
    }

    public void closeCon() throws SQLException {
        if (con != null) {
            con.close();
        }
    }

}
