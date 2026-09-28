const filterButtons = document.querySelectorAll(".menu-filter");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Active button change
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        // Selected category
        const filter = this.getAttribute("data-filter");

        // Show / hide items
        menuItems.forEach(item => {

            const category = item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                item.classList.remove("hide");
            } 
            else {
                item.classList.add("hide");
            }

        });

    });

});