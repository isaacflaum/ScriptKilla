const removeScripts = () => {
  const scripts = document.getElementsByTagName('script');
  for (let s in scripts) {
    try {
      scripts[s].parentNode.removeChild(scripts[s]);
    } catch (_) {}
  }
}

// remove 10 times as some scripts are resilient
for (let i = 0; i < 10; i++) {
  removeScripts();
}