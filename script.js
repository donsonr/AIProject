
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.group\\/design-root');
    const closeButton = modal.querySelector('button');
    const showButton = document.createElement('button');

    showButton.textContent = 'Show Modal';
    showButton.classList.add('bg-theme-blue', 'text-white', 'p-2', 'rounded-lg', 'm-4');
    document.body.insertBefore(showButton, modal.parentElement);

    modal.parentElement.classList.add('hidden');

    closeButton.addEventListener('click', () => {
        modal.parentElement.classList.add('hidden');
    });

    showButton.addEventListener('click', () => {
        modal.parentElement.classList.remove('hidden');
    });
});
