// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animación de aparición de secciones al hacer scroll
const sections = document.querySelectorAll('.section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Efecto de hover en los números de paso
const stepNumbers = document.querySelectorAll('.step-number');
stepNumbers.forEach(step => {
    step.addEventListener('mouseenter', () => {
        step.style.transform = 'scale(1.2) rotate(360deg)';
    });
    
    step.addEventListener('mouseleave', () => {
        step.style.transform = 'scale(1) rotate(0deg)';
    });
});

console.log('%c🎮 Minecraft Tutorial Loaded! ', 'background: #5ec975; color: #2e2e2e; font-size: 20px; padding: 10px; font-weight: bold;');
```

**Estructura de archivos:**

📁 tu-proyecto/
  ├── 📄 index.html
  ├── 📄 styles.css
  └── 📄 script.js
```

// Función para copiar la IP del servidor
function copyIP() {
    const ip = '81.61.81.71';
    const btn = document.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(ip).then(() => {
        // Cambiar texto del botón temporalmente
        const originalText = btn.innerHTML;
        btn.innerHTML = '¡IP Copiada!';
        btn.classList.add('copied');
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar:', err);
        alert('IP del servidor: ' + ip);
    });
}