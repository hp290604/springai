package com.springai.project.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.google.genai.GoogleGenAiChatOptions;
import org.springframework.ai.image.ImageModel;
import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class ModelService {

//    private final
    private final ChatModel chatModel;


    public ModelService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }


    private String responseFromAI(String message){
//        ImagePrompt prompt=new ImagePrompt(message);
//        ImageResponse response = imageModel.call(prompt);
//        return response.getResult().getOutput().getUrl();
        ChatResponse response = chatModel.call(new Prompt(message,GoogleGenAiChatOptions.builder().temperature(0.2).model("gemini-2.5-flash").build()));
        String result = response.getResult().getOutput().getText();
        return result;
    }
    // Spring AI automatically injects a ChatClient.Builder
//    public ModelService(ChatClient.Builder builder) {
//        this.chatClient = builder.build();
//    }
//
//    private String responseFromAI(String message){
//        return chatClient.prompt()
//                .user(message)
//                .call()
//                .content();
//    }
    public String getResponse(String message){
        String answer= responseFromAI(message);
        System.out.println(answer);
        return answer;
    }
}
