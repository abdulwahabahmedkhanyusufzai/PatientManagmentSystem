import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LucideAngularModule, MessageSquare, Send, X } from '@lucide/angular';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <div class="fixed bottom-6 right-6 z-50">
      <!-- Toggle Button -->
      <button 
        (click)="isOpen.set(!isOpen())"
        class="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-all transform hover:scale-105"
      >
        <lucide-icon [name]="isOpen() ? X : MessageSquare"></lucide-icon>
      </button>

      <!-- Chat Window -->
      @if (isOpen()) {
        <div class="absolute bottom-16 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-4 duration-200">
          <!-- Header -->
          <div class="p-4 bg-indigo-600 text-white flex justify-between items-center font-semibold">
            <span>AI Patient Assistant</span>
            <lucide-icon [name]="MessageSquare" class="w-4 h-4 opacity-75"></lucide-icon>
          </div>

          <!-- Messages -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            @for (msg of messages(); track $index) {
              <div [class]="msg.sender === 'user' ? 'flex justify-end' : 'flex justify-start'">
                <div [class]="msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-gray-200'" class="max-w-[80%] p-3 rounded-2xl text-sm shadow-sm">
                  {{ msg.text }}
                </div>
              </div>
            }
            @if (isLoading()) {
              <div class="flex justify-start">
                <div class="bg-gray-200 text-gray-500 p-3 rounded-2xl text-xs animate-pulse">AI is thinking...</div>
              </div>
            }
          </div>

          <!-- Input -->
          <div class="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              [(ngModel)]="userInput" 
              (keyup.enter)="sendMessage()"
              placeholder="Ask me anything about patients..."
              class="flex-1 px-4 py-2 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all"
            >
            <button 
              (click)="sendMessage()"
              [disabled]="!userInput().trim() || isLoading()"
              class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50"
            >
              <lucide-icon [name]="Send" class="w-4 h-4"></lucide-icon>
            </button>
          </div>
        </div>
      }
    </div>
  `
})
export class ChatWidgetComponent {
  private http = inject(HttpClient);
  
  readonly MessageSquare = MessageSquare;
  readonly Send = Send;
  readonly X = X;

  isOpen = signal(false);
  isLoading = signal(false);
  userInput = signal('');
  messages = signal<{sender: 'user' | 'ai', text: string}[]>([
    {sender: 'ai', text: 'Hello! I am your AI assistant. How can I help you manage patients today?'}
  ]);

  sendMessage() {
    const text = this.userInput().trim();
    if (!text) return;

    this.messages.update(m => [...m, {sender: 'user', text}]);
    this.userInput.set('');
    this.isLoading.set(true);

    this.http.get('http://localhost:8080/chat', { 
      params: { message: text },
      responseType: 'text' 
    }).subscribe({
      next: (response) => {
        this.messages.update(m => [...m, {sender: 'ai', text: response}]);
        this.isLoading.set(false);
      },
      error: () => {
        this.messages.update(m => [...m, {sender: 'ai', text: 'Sorry, I encountered an error. Please try again.'}]);
        this.isLoading.set(false);
      }
    });
  }
}
