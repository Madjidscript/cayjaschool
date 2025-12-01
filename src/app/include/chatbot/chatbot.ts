import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})
export class Chatbot   {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  formData = new FormGroup({
    message: new FormControl('')
  });
  isOpen = false; // chat fermé par défaut

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
  messages: Message[] = [];
  isLoading = false;

  

  constructor() {
    // Message initial
    this.messages.push({
      id: '1',
      role: 'assistant',
      content: 'Bonjour ! Je suis votre assistant.',
      timestamp: new Date()
    });
  }

  sendMessage() {
    const text = this.formData.value.message?.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    this.messages.push(userMessage);
    this.formData.reset();

    // indicateur de saisie
    const typingId = 'typing';
    this.messages.push({ id: typingId, role: 'assistant', content: '', isTyping: true, timestamp: new Date() });

    this.isLoading = true;
    // this.aiService.postCompletion({ message: text }).subscribe({
    //   next: (res) => {
    //     this.messages = this.messages.filter(m => m.id !== typingId);
    //     this.messages.push({
    //       id: (Date.now() + 1).toString(),
    //       role: 'assistant',
    //       content: res.reply || 'Je n’ai pas compris.',
    //       timestamp: new Date()
    //     });
    //     this.scrollToBottom();
    //   },
    //   error: () => {
    //     this.messages = this.messages.filter(m => m.id !== typingId);
    //     this.messages.push({
    //       id: (Date.now() + 1).toString(),
    //       role: 'assistant',
    //       content: 'Erreur serveur.',
    //       timestamp: new Date()
    //     });
    //   },
    //   complete: () => this.isLoading = false
    // });
  }

  scrollToBottom() {
    setTimeout(() => {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }, 50);
  }

}
