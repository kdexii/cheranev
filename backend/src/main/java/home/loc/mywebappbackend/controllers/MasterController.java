package home.loc.mywebappbackend.controllers;

import home.loc.mywebappbackend.database.PostgresQueryExecutor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MasterController {
    @GetMapping("/sayhello")
    public String sayHelloWorld(){
        PostgresQueryExecutor postgresQueryExecutor = new PostgresQueryExecutor();
        postgresQueryExecutor.getServiceList();
        return "Hello World!";
    }
}
