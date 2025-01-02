import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu"];

  connect() {
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.menuTarget.classList.add(
        "fixed",
        "top-0", 
        "left-0", 
        "right-0",
        "shadow-lg",
        "animate-down"
      );
    } else {
      this.menuTarget.classList.remove(
        "fixed",        
        "top-0",
        "left-0",
        "right-0",
        "shadow-lg",
        "animate-down" 
      );
    }
  }
}




// -translate-y-full opacity-0 transition-all duration-500 ease-in-out