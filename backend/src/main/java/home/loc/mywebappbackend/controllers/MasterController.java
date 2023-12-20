package home.loc.mywebappbackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MasterController {
    @GetMapping("/sayhello")
    public String sayHelloWorld(){
        return "Hello World!";
    }
}
