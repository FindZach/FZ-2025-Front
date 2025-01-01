import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  template: `
    <div class="container mt-5">
      <h2>Order Details</h2>
      <div class="card p-4">
        <h3>Order Name</h3>
        <p>Order Description</p>
        <hr/>

        <h4>Edit Details</h4>

        <!-- Quill Editor -->
        <div id="editor" style="height: 300px; border: 1px solid #ccc;"></div>

        <button class="btn btn-primary mt-3" (click)="saveDetails()">Save</button>
        <button class="btn btn-secondary mt-3 ms-2" (click)="backToOrders()">Back</button>
      </div>
    </div>
  `,
  styles: [
    `
      .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      .btn-primary {
        background-color: #007bff;
        color: white;
      }

      .btn-secondary {
        background-color: #6c757d;
        color: white;
      }
    `,
  ],
  standalone: true
})
export class OrderDetailsComponent implements AfterViewInit {
  private quill: any;

  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];

  ngAfterViewInit(): void {
    // Dynamically load Quill from CDN
    const quillScript = document.createElement('script');
    quillScript.src = 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.min.js';
    quillScript.onload = () => this.initializeQuill();
    document.body.appendChild(quillScript);

    // Add Quill CSS
    const quillStyle = document.createElement('link');
    quillStyle.rel = 'stylesheet';
    quillStyle.href = 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css';
    document.head.appendChild(quillStyle);
  }

  initializeQuill() {
    // Initialize Quill editor with image handler
    this.quill = new (window as any).Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: this.toolbarOptions,
      },
    });
  }

  async saveDetails() {
    const editorContent = this.quill.root.innerHTML; // Get the editor content
    const title = "Sample Content"; // Replace with user-provided title
    console.log('Saved Content:', editorContent);

    try {
      const response = await fetch('http://localhost:8080/api/content/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, htmlContent: editorContent }),
      });

      if (response.ok) {
        alert('Content saved successfully!');
      } else {
        const error = await response.text();
        console.error('Error saving content:', error);
        alert('Failed to save content.');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content.');
    }
  }

  backToOrders() {
    alert('Navigating back to orders...');
  }
}
