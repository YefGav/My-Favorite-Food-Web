// timer.js
class Timer {
    constructor() {
      this.timeLeft = 0;
      this.timerId = null;
      this.timeDisplay = document.querySelector('.time-display');
      this.startBtn = document.querySelector('.start-btn');
      this.timeButtons = document.querySelectorAll('.timer-buttons button:not(.start-btn)');
      
      this.init();
    }
  
    init() {
      this.timeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          this.timeLeft = parseInt(btn.textContent) * 60;
          this.updateDisplay();
        });
      });
  
      this.startBtn.addEventListener('click', () => {
        if (this.timerId) {
          this.stop();
        } else {
          this.start();
        }
      });
    }
  
    updateDisplay() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      this.timeDisplay.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    start() {
      if (this.timeLeft === 0) return;
      
      this.startBtn.textContent = 'Stop';
      this.timerId = setInterval(() => {
        this.timeLeft--;
        this.updateDisplay();
        
        if (this.timeLeft === 0) {
          this.stop();
          alert('¡Tiempo terminado!');
        }
      }, 1000);
    }
  
    stop() {
      clearInterval(this.timerId);
      this.timerId = null;
      this.startBtn.textContent = 'Start';
    }
  }
  
  // Inicializar el timer cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    new Timer();
  });