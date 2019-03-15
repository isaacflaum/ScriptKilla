const removeScripts = () => {
	const scripts = document.getElementsByTagName('script');
  for (var s in scripts) {
    try {
      scripts[s].parentNode.removeChild(scripts[s]);
    } catch (_) {}
  }
}

// remove 5 times as some scripts are resilient
for (var i = 0; i < 5; i++) {
  removeScripts();
}