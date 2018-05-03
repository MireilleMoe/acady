package upg.fing.acadysoft.dbmapper;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author GINF
 */
public class DataBaseMapper {

    public DataBaseMapper() {
    }

    public boolean chekClient(Connection con, String[] loginPwd) throws SQLException {

        //L'accès à la base de données
        ResultSet res = null;
        ResultSetMetaData rsmd;/*La méthode getMetaData() retourne un objet de 
        la classe ResultSetMetaData qui permet d'obtenir des informations sur
        le résultat de la requête*/
        try {
            PreparedStatement pStmt
                    = con.prepareStatement("SELECT * FROM academia.user WHERE userName=? AND userPWD =?");
            /*Le résultat d'une requête d'interrogation est renvoyé 
            dans un objet de la classe ResultSet par la méthode executeQuery()*/
            pStmt.setString(1, loginPwd[0]);
            pStmt.setString(2, loginPwd[1]);
            res = pStmt.executeQuery();
            int count = 0;
            while (res.next()) {
                count++;
            }
            if (count == 1) {
                return true;
            }
        } catch (SQLException ex) {
            ex.printStackTrace();

        } finally {
            con.close();
        }

        return false;
    }
}
