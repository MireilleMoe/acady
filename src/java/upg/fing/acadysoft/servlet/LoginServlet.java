/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package upg.fing.acadysoft.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import upg.fing.acadysoft.dbmapper.DataBaseMapper;
import upg.fing.acadysoft.mysqlconfig.MySQLConfig;

/**
 *
 * @author GINF
 */
public class LoginServlet extends HttpServlet {

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        boolean auth = false;
        try {
            auth = doProcessRequest(request);
        } catch (SQLException ex) {
            WriteServerMessage.writeLoginError(response);
        }
        if (auth) {
            WriteServerMessage.writeLoginSuccess(response);
        } else {
            WriteServerMessage.writeLoginError(response);
        }
    }

    private boolean doProcessRequest(HttpServletRequest request) throws SQLException {

        DataBaseMapper dbM = new DataBaseMapper();
        String logininfo = request.getParameter("logininfo");
        String[] loginPwd = logininfo.split(";");
        MySQLConfig conf = new MySQLConfig();
        Connection con = conf.getCon();
        boolean auth = dbM.chekClient(con, loginPwd);
        return auth;
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
