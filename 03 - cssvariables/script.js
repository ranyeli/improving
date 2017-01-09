var handleUpdate = function () {
    console.log(this.name + "=" +this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

const inputs = document.querySelectorAll(".controlls input");

inputs.forEach(input => input.addEventListener("change", handleUpdate))
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))