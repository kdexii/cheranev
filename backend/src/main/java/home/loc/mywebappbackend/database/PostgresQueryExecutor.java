package home.loc.mywebappbackend.database;

import java.sql.*;

public class PostgresQueryExecutor {


    public void getServiceList() {

        String SQL = "select * from public.service_catalog sc order by id";

        try (Connection conn = new PostgresConnector().makeTunnel("jdbc:postgresql://192.168.0.182:5432/postgres", "secretUser", "secretPassword123");
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(SQL)) {
            // display actor information
            ResultSetMetaData md = rs.getMetaData();
            int colCount = md.getColumnCount();



            while (rs.next()) {
                for (int i = 1; i <= colCount ; i++){
                    String col_name = md.getColumnName(i);
                    System.out.println(col_name);
                    System.out.println(rs.getString(col_name));
                }
            }

        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }

}
