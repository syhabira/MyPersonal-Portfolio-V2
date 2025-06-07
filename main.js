document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("[data-collapse-toggle]")
  const navbarMenu = document.getElementById("navbar-cta")

  toggleButton.addEventListener("click", () => {
    const isExpanded = navbarMenu.classList.contains("hidden")
    if (isExpanded) {
      navbarMenu.classList.remove("hidden")
    } else {
      navbarMenu.classList.add("hidden")
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) {
      navbarMenu.classList.remove("hidden")
    } else {
      navbarMenu.classList.add("hidden")
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  // First animate the overlays up and out of view
  gsap.to(".first", 1.5, {
    delay: 0.5,
    y: "-100%",
    ease: "expo.inOut",
    onComplete: () => {
      document.querySelector(".first").classList.add("overlay-hidden")
    },
  })
  gsap.to(".second", 1.5, {
    delay: 0.7,
    y: "-100%",
    ease: "expo.inOut",
    onComplete: () => {
      document.querySelector(".second").classList.add("overlay-hidden")
    },
  })
  gsap.to(".third", 1.5, {
    delay: 0.9,
    y: "-100%",
    ease: "expo.inOut",
    onComplete: () => {
      document.querySelector(".third").classList.add("overlay-hidden")
    },
  })

  // Rest of your animation code remains the same
  // IMG Animation
  gsap.from(".home_img", { opacity: 0, duration: 2, delay: 2, x: 60 })

  // INFORMATION
  gsap.from(".home__information", {
    opacity: 0,
    duration: 3,
    delay: 2.3,
    y: 25,
  })
  gsap.from(".anime-text", {
    opacity: 0,
    duration: 3,
    delay: 2.3,
    y: 25,
    ease: "expo.out",
    stagger: 0.3,
  })

  // NAV ITEM
  gsap.from(".nav__logo", {
    opacity: 0,
    duration: 3,
    delay: 3.2,
    y: 25,
    ease: "expo.out",
  })
  gsap.from(".nav__item", {
    opacity: 0,
    duration: 3,
    delay: 3.2,
    y: 25,
    ease: "expo.out",
    stagger: 0.2,
  })

  // SOCIAL ICONS
  gsap.from(".home__social-icon", {
    opacity: 0,
    duration: 3,
    delay: 4,
    y: 25,
    ease: "expo.out",
    stagger: 0.2,
  })
})

gsap.from(".nav", { opacity: 0, duration: 2, delay: 2, x: 60 })
const lenis = new Lenis()

lenis.on("scroll", ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

function showDestinationPopup(shabira) {
  if (document.getElementById(shabira).style.visibility === "hidden") {
    document.getElementById(shabira).style.visibility = "visible"
  } else {
    document.getElementById(shabira).style.visibility = "hidden"
  }
}

const swiperPopular = new Swiper(".popular-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  width: 1400,
  pagination: {
    el: ".swiper-pagination",
  },
})

function showDestinationPopup(shabira) {
  if (document.getElementById(shabira).style.visibility === "hidden") {
    document.getElementById(shabira).style.visibility = "visible"
  } else {
    document.getElementById(shabira).style.visibility = "hidden"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const submitButton = document.getElementById("submitButton")
  const toast = document.getElementById("toast")
  const toastTitle = document.getElementById("toastTitle")
  const toastMessage = document.getElementById("toastMessage")
  const toastIcon = document.getElementById("toastIcon")

  // Form validation and submission
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Clear previous error messages
    clearErrors()

    // Get form data
    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    }

    // Validate form
    let isValid = true

    if (!formData.name) {
      showError("name", "Name is required")
      isValid = false
    }

    if (!formData.email) {
      showError("email", "Email is required")
      isValid = false
    } else if (!isValidEmail(formData.email)) {
      showError("email", "Please enter a valid email address")
      isValid = false
    }

    if (!formData.message) {
      showError("message", "Message is required")
      isValid = false
    }

    if (!isValid) return

    // Disable submit button and show loading state
    submitButton.disabled = true
    submitButton.textContent = "Sending..."

    try {
      // Simulate form submission with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      showToast("success", "Success!", "Your message has been sent. I'll get back to you soon!")

      // Reset form
      contactForm.reset()
    } catch (error) {
      // Show error message
      showToast("error", "Error", "There was a problem sending your message. Please try again.")
    } finally {
      // Re-enable submit button
      submitButton.disabled = false
      submitButton.textContent = "Send Message"
    }
  })

  // Helper functions
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId)
    field.classList.add("field-error")

    // Create error message element
    const errorElement = document.createElement("div")
    errorElement.className = "error-message"
    errorElement.textContent = message

    // Insert error message after the field
    field.parentNode.insertBefore(errorElement, field.nextSibling)
  }

  function clearErrors() {
    // Remove all error classes
    document.querySelectorAll(".field-error").forEach((field) => {
      field.classList.remove("field-error")
    })

    // Remove all error messages
    document.querySelectorAll(".error-message").forEach((message) => {
      message.remove()
    })
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function showToast(type, title, message) {
    // Set toast content
    toastTitle.textContent = title
    toastMessage.textContent = message

    // Set icon based on type
    if (type === "success") {
      toastIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
          `
    } else {
      toastIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          `
    }

    // Show toast
    toast.classList.add("toast-enter")
    toast.classList.remove("translate-y-full", "opacity-0")

    // Hide toast after 5 seconds
    setTimeout(() => {
      toast.classList.add("toast-exit")
      setTimeout(() => {
        toast.classList.remove("toast-enter", "toast-exit")
        toast.classList.add("translate-y-full", "opacity-0")
      }, 300)
    }, 5000)
  }
})
