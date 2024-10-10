// Плавное появление контента при скролле
window.addEventListener('scroll', function () {
	const sections = document.querySelectorAll('.content-section')
	const windowHeight = window.innerHeight

	sections.forEach(section => {
		const sectionTop = section.getBoundingClientRect().top
		if (sectionTop < windowHeight - 100) {
			section.classList.add('visible')
		}
	})
})

// Интро-анимация при загрузке страницы
window.onload = function () {
	const intro = document.getElementById('intro')
	setTimeout(() => {
		intro.style.opacity = '0'
		setTimeout(() => {
			intro.style.display = 'none'
		}, 1000)
	}, 3000) // Длительность интро-анимации (3 секунды)
}

// Плавный скролл
function smoothScroll(target) {
	document.querySelector(target).scrollIntoView({
		behavior: 'smooth',
	})
}
