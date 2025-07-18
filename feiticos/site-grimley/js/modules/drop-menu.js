export default function initMenu() {
    const dropMenuItems = document.querySelectorAll('.data-menu');
  
    function handleClick(event) {
      // event.preventDefault();
  
      // Fecha todos os submenus
      dropMenuItems.forEach(item => {
        item.classList.remove('active');
      });
  
      // Abre ou fecha o submenu do item clicado
      this.classList.toggle('active');
    }
  
    dropMenuItems.forEach(menu => {
      menu.addEventListener('click', handleClick);
    });
  
    // EventListener para fechar o submenu ao clicar fora
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.data-menu')) {
        dropMenuItems.forEach(item => {
          item.classList.remove('active');
        });
      }
    });
  }
  