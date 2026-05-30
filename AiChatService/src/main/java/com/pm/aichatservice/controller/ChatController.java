package com.pm.aichatservice.controller;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

  private final ChatClient chatClient;

  public ChatController(ChatClient.Builder builder) {
    this.chatClient = builder
        .defaultSystem("You are a helpful assistant for the Patient Management System. You can help users query patient data using the available tools.")
        .build();
  }

  @GetMapping("/chat")
  public String chat(@RequestParam(value = "message", defaultValue = "How can you help me?") String message) {
    return chatClient.prompt()
        .user(message)
        .functions("getPatientList")
        .call()
        .content();
  }
}
