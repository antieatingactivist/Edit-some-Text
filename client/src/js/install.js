const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    
    window.deferredPrompt = null;
    // butInstall.classList.toggle('hidden', true);
    console.log(butInstall.classList);
    promptEvent.prompt();
});


window.addEventListener('appinstalled', (event) => {  
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
    console.log('🖖', 'appinstalled', event);
});
