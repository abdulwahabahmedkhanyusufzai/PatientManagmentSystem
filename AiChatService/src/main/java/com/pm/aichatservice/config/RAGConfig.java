package com.pm.aichatservice.config;

import java.util.List;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RAGConfig {

  @Bean
  public CommandLineRunner ingestionRunner(VectorStore vectorStore) {
    return args -> {
      List<Document> documents =
          List.of(
              new Document(
                  "Hypertension Treatment Guidelines: Initial therapy should include a"
                      + " thiazide-type diuretic, calcium channel blocker, ACE inhibitor, or ARB."),
              new Document(
                  "Type 2 Diabetes Management: Metformin is the preferred initial pharmacologic"
                      + " agent for the treatment of type 2 diabetes."),
              new Document(
                  "Patient Privacy Policy: All medical records are encrypted at rest and accessible"
                      + " only to authorized personnel via OAuth2."));

      // vectorStore.add(documents); // Uncomment when DB is ready
      System.out.println("RAG Ingestion: Ready to load medical knowledge.");
    };
  }
}
