// Select all list items
const $list = document.querySelectorAll('li');

// Function to handle click events on list items
function activeLink() {
    // Remove 'active' class from all list items
    $list.forEach(($li) => {
        $li.classList.remove('active');
    });

    // Add 'active' class to the clicked list item
    this.classList.add('active');
}

// Attach click event listener to all list items
$list.forEach(($li) => $li.addEventListener('click', activeLink));

// Select all elements with class "collapsible"
var coll = document.getElementsByClassName("collapsible");
var i;

// Add click event listener to each "collapsible" element
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        // Toggle the "active" class for the clicked element
        this.classList.toggle("active");

        // Get the next sibling element (assumed to be the collapsible content)
        var content = this.nextElementSibling;

        // Check if the content is currently visible
        if (content.style.maxHeight) {
            // If visible, hide the content by setting maxHeight to null
            content.style.maxHeight = null;
        } else {
            // If hidden, show the content by setting maxHeight to its scrollHeight
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
