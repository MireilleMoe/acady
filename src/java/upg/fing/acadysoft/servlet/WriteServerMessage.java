package upg.fing.acadysoft.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author днс
 */
public class WriteServerMessage {

    protected static void writeLoginSuccess(HttpServletResponse response) throws IOException {
        try (PrintWriter writer = response.getWriter()) {
            writer.write("Successfully Logged in...");
        }

    }

    protected static void writeLoginError(HttpServletResponse response) throws IOException {

        try (PrintWriter writer = response.getWriter()) {
            writer.write("Login or Password is wrong...!!!!");
        }
    }
}
