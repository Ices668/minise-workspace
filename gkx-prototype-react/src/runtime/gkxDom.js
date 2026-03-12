export function toggleGroup(btn) {
  const c = btn?.nextElementSibling
  if (!c) return

  if (c.style.maxHeight && c.style.maxHeight !== '0px') {
    c.style.maxHeight = '0'
    const icon = btn.querySelector('.expand-icon')
    if (icon) icon.textContent = 'expand_more'
  } else {
    c.style.maxHeight = `${c.scrollHeight}px`
    const icon = btn.querySelector('.expand-icon')
    if (icon) icon.textContent = 'expand_less'
  }
}

export function setActiveNavItem() {
  const cur = location.href.split('/').pop().split('?')[0]
  document.querySelectorAll('.nav-item').forEach((a) => {
    if (a.getAttribute('data-file') === cur) {
      a.classList.add('active-nav-item')
      const ch = a.closest('.group-children')
      if (ch) {
        ch.style.maxHeight = '9999px'
        const ic = ch.previousElementSibling?.querySelector('.expand-icon')
        if (ic) ic.textContent = 'expand_less'
      }
    }
  })
}
