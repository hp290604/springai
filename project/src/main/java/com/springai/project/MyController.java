package com.springai.project;


import com.springai.project.service.ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartException;
// import org.springframework.web.multipart.MultipartFile;

// import java.io.FileNotFoundException;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {
    @Autowired
    private ModelService modelService;
    @GetMapping
    public String modelResponse(@RequestParam String message ){
        try{
            return this.modelService.getResponse(message);
        }
        finally{}
        // finally {
        //     return "hello world";
        // }

    }
//    @GetMapping
//    public String response(@RequestParam("file") MultipartFile multipartFile){
//        try{
//            return multipartFile.getName();
//        }
//        catch(MultipartException exp){
//            return exp.getLocalizedMessage()    ;
//        }
//    }
}
